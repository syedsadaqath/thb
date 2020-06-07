using CCA.Util;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Runtime;
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
    public class StartController : Controller
    {
        public string action1 = string.Empty;
        public string txnid1 = string.Empty;
        string txnid, surl = ConfigurationManager.AppSettings["surl"], curl = ConfigurationManager.AppSettings["curl"], furl = ConfigurationManager.AppSettings["furl"];

        public string GenerateUniqueId()
        {
            var entitiesInfo = new ThbLoginContextEntity(null).ThbEntities;
            Invoice invoice = new Invoice();
            invoice.TimeStamp = DateTime.Now;
            invoice.Info = "";
            invoice.SessionId = HttpContext.Session.SessionID;
            entitiesInfo.Invoices.Add(invoice);
            entitiesInfo.SaveChanges();

            return invoice.InvoiceNumber.ToString();
        }

        // GET: Payment/Start
        public ActionResult Index()
        {
            if (ViewData["InvoiceNumber"] == null)
                ViewData["InvoiceNumber"] = GenerateUniqueId();
            return View(new StartModel() { SubmitButtonVisible = true, InvoiceNumber = ViewData["InvoiceNumber"].ToString(), Currency = "INR" });
        }

        // GET: Payment/Start
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(FormCollection form)
        {
            StartModel obj = new StartModel() { SubmitButtonVisible = true };
            if (ModelState.IsValid)
            {
                try
                {
                    if (TryUpdateModel(obj))
                    {
                        surl = Request.Url.Scheme + "://" + Request.Url.Authority + surl;
                        curl = Request.Url.Scheme + "://" + Request.Url.Authority + curl;
                        furl = Request.Url.Scheme + "://" + Request.Url.Authority + furl;
                        PerformPostBack(obj);
                    }
                }
                catch (OverflowException)
                {
                    ModelState.AddModelError("Amount", "Please Enter Lower Amount Value");
                }

            }
            return View(obj);
        }

        private StartModel PerformPostBack(StartModel obj)
        {
            
            try
            {


                var entitiesInfo = new ThbLoginContextEntity(null).ThbEntities;
                var paymentInfo = new PaymentInfo();

                if (string.IsNullOrEmpty(Request.Form["txnid"])) // generating txnid
                {
                    Random rnd = new Random();
                    string strHash = Generatehash512(rnd.ToString() + DateTime.Now);
                    txnid1 = strHash.ToString().Substring(0, 20);

                }
                else
                {
                    txnid1 = Request.Form["txnid"];
                }


                if (
                    string.IsNullOrEmpty(ConfigurationConstants.MERCHANT_ID) ||
                    string.IsNullOrEmpty(txnid1) ||
                    (obj.Amount <= 0) ||
                    string.IsNullOrEmpty(obj.Name) ||
                    string.IsNullOrEmpty(obj.Email) ||
                    string.IsNullOrEmpty(obj.Phone) ||
                    string.IsNullOrEmpty(obj.InvoiceNumber) ||
                    string.IsNullOrEmpty(obj.ProductInfo)
                    )
                {
                    //error

                    obj.ErrorMessage = true;
                    return obj;
                }
                else
                {
                    obj.ErrorMessage = false;
                    action1 = ConfigurationConstants.CCAVENUE_URL;
                }

                {
                    txnid = txnid1;

                    System.Collections.Hashtable data = new System.Collections.Hashtable(); // adding values in gash table for data post
                    data.Add("merchant_param1", txnid);
                    string AmountForm = Convert.ToDecimal(obj.Amount).ToString("g29");// eliminating trailing zeros
                    
                    data.Add("order_id", obj.InvoiceNumber);
                    data.Add("currency", obj.Currency);
                    data.Add("amount", obj.Amount);
                    data.Add("billing_name", obj.Name);
                    data.Add("merchant_id", ConfigurationConstants.MERCHANT_ID);
                    data.Add("billing_email", obj.Email);
                    data.Add("billing_tel", obj.Phone);
                    data.Add("redirect_url", surl.Trim());
                    data.Add("cancel_url", curl.Trim());

                    string inputRequest = "";
                    string strForm = PreparePOSTForm(action1, data, ref inputRequest);
                    paymentInfo.TxnId = txnid;
                    paymentInfo.Amount = Convert.ToDecimal(AmountForm);
                    paymentInfo.Name = obj.Name.Trim();
                    paymentInfo.Email = obj.Email.Trim();
                    paymentInfo.ProductInfo = obj.ProductInfo.Trim();
                    paymentInfo.InvoiceNumber = obj.InvoiceNumber.Trim();
                    paymentInfo.Status = "Initiated";
                    paymentInfo.Phone = obj.Phone.Trim();
                    paymentInfo.Response = "";
                    paymentInfo.Request = inputRequest;
                    paymentInfo.CreatedOn = DateTime.Now;
                    paymentInfo.ModifiedOn = DateTime.Now;
                    paymentInfo.Browser = Request.Browser == null ? "" : Request.Browser.Browser;
                    paymentInfo.MachineIp = GetIPAddress(Request);
                    paymentInfo.Currency = obj.Currency;
                    entitiesInfo.PaymentInfoes.Add(paymentInfo);
                    entitiesInfo.SaveChanges();
                    ViewData["InvoiceNumber"] = null;
                    obj.Html = strForm;
                }
            }
            catch (Exception ex)

            {
                Response.Write("<span style='color:red'>" + ex.Message + "</span>");

            }

            return obj;
        }
        public static string GetIPAddress(HttpRequestBase request)
        {
            string ip;
            try
            {
                ip = request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (!string.IsNullOrEmpty(ip))
                {
                    if (ip.IndexOf(",") > 0)
                    {
                        string[] ipRange = ip.Split(',');
                        int le = ipRange.Length - 1;
                        ip = ipRange[le];
                    }
                }
                else
                {
                    ip = request.UserHostAddress;
                }
            }
            catch { ip = null; }

            return ip;
        }

        private string PreparePOSTForm(string url, System.Collections.Hashtable data, ref string inputRequest)      // post form
        {
            //Set a name for the form
            string formID = "PostForm";
            //Build the form using the specified data to be posted.
            StringBuilder strForm = new StringBuilder();
            strForm.Append("<form id=\"" + formID + "\" name=\"" +
                           formID + "\" action=\"" + url +
                           "\" method=\"POST\">");

            string strEncRequest = "";

            foreach (System.Collections.DictionaryEntry key in data)
            {
                inputRequest = inputRequest + key.Key + "=" + key.Value + "&";
                /* Response.Write(name + "=" + Request.Form[name]);
                  Response.Write("</br>");*/
            }

            int i = inputRequest.LastIndexOf("&");
            inputRequest = inputRequest.Remove(i, 1);
            CCACrypto ccaCrypto = new CCACrypto();
            strEncRequest = ccaCrypto.Encrypt(inputRequest, ConfigurationConstants.CCAVENUE_WORKING_KEY);

            strForm.Append("<input type=\"hidden\" name=\"encRequest\" value=\"" + strEncRequest + "\">");
            strForm.Append("<input type=\"hidden\" name=\"access_code\" value=\"" + ConfigurationConstants.CCAVENUE_ACCESS_CODE + "\">");

            strForm.Append("</form>");
            //Build the JavaScript which will do the Posting operation.
            StringBuilder strScript = new StringBuilder();
            strScript.Append("<script language='javascript'>");
            strScript.Append("var v" + formID + " = document." +
                             formID + ";");
            strScript.Append("v" + formID + ".submit();");
            strScript.Append("</script>");
            //Return the form and the script concatenated.
            //(The order is important, Form then JavaScript)
            return strForm.ToString() + strScript.ToString();
        }

        public string Generatehash512(string text)
        {

            byte[] message = Encoding.UTF8.GetBytes(text);

            UnicodeEncoding UE = new UnicodeEncoding();
            byte[] hashValue;
            SHA512Managed hashString = new SHA512Managed();
            string hex = "";
            hashValue = hashString.ComputeHash(message);
            foreach (byte x in hashValue)
            {
                hex += String.Format("{0:x2}", x);
            }
            return hex;

        }
    }
}
