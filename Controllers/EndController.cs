using CCA.Util;
using MailApi;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using thb.Entities;
using THB_site.Entities;
using ThbPayments.Entities;
using ThbPayments.General;

namespace ThbPayments.Areas.CCAvenue
{
    public class EndController : Controller
    {
        // GET: Payment/End
        [HttpPost]
        public ActionResult Index()
        {
            EndModel end = new EndModel();
            try
            {
                //Request.Headers["referer"] perform referer check

                CCACrypto ccaCrypto = new CCACrypto();
                string encResponse = ccaCrypto.Decrypt(Request.Form["encResp"], ConfigurationConstants.CCAVENUE_WORKING_KEY);
                NameValueCollection Params = new NameValueCollection();
                string[] segments = encResponse.Split('&');
                foreach (string seg in segments)
                {
                    string[] parts = seg.Split('=');
                    if (parts.Length > 0)
                    {
                        string Key = parts[0].Trim();
                        string Value = parts[1].Trim();
                        Params.Add(Key, Value);
                    }
                }

                var entitiesInfo = new ThbLoginContextEntity(null).ThbEntities;
                string txnId = Params["merchant_param1"];
                var record = entitiesInfo.PaymentInfoes.FirstOrDefault(cc => cc.TxnId.Equals(txnId) && cc.Status.Equals("Initiated"));
                if (record == null)
                {
                    end.Result = "Invalid Transaction";
                    return View(end);
                }
                end.TransactionNumber = txnId;
                record.Response = "Decrypted Response " + encResponse + "   " + Request.Form.ToString();
                record.ResponseTime = DateTime.Now;

                if (Params["order_status"] == "Success")
                {

                    {
                        record.Status = "Success";
                        end.Result = "Successfully performed payment";
                        //Hash value did not matched
                    }

                }
                else
                {
                    record.Status = "Failure";
                    end.Result = "Bank Payment Failure";
                    // osc_redirect(osc_href_link(FILENAME_CHECKOUT, 'payment' , 'SSL', null, null,true));
                }
                entitiesInfo.SaveChanges();
                SendEmail(record, Params);
            }

            catch (Exception ex)
            {
                Response.Write("<span style='color:red'>" + ex.Message + "</span>");
            }

            return View(end);
        }

        public void SendEmail(PaymentInfo paymentInfo, NameValueCollection Params)
        {
            //todo: put in resource file
            string content = @"Dear TechHighbrows team,

It is to bring to your notice that a payment transaction has been made. Details recorded are as below,

Invoice No : {0}
Date : {1}
Time : {2}
Name : {3}
Email : {4}
Phone : {5}
Product Description : {6}
Amount : {15} {16}
Invoice Number ID : {7}
Transaction ID : {8}
Machine Mac Address : {9}
Machine IP : {10}
Browser : {11}
Status : {12}
Status Message : {13}
Error Code : {14}

Email Sent From THB Online Payments";
            var emailContent = string.Format(content, paymentInfo.InvoiceNumber, DateTime.Now.ToLongDateString(), DateTime.Now.ToLongTimeString()
                , paymentInfo.Name
                , paymentInfo.Email
                , paymentInfo.Phone
                , paymentInfo.ProductInfo
                , paymentInfo.InvoiceNumber
                , paymentInfo.TxnId
                , Request.Form["MachineMac"]
                , paymentInfo.MachineIp
                , paymentInfo.Browser
                , Params["order_status"]
                , Params["status_code"]
                , Params["status_message"]
                , paymentInfo.Amount,
                paymentInfo.Currency);
            MailSend send = new MailSend();
            send.Send("Payment From : " + paymentInfo.Email + " Amount : " + paymentInfo.Amount + " Status : " + Params["order_status"], emailContent);
        }

    }
}