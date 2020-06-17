using MailApi;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Mvc;
using THB_site.Entities;
using THB_site.Models;


namespace THB_site.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            return View();
        }
        public ActionResult Technology_Center()
        {
            return View();
        }
        public ActionResult Development_Center()
        {
            return View();
        }
        public ActionResult Research_and_Development()
        {
            return View();
        }
        public ActionResult Products()
        {
            return View();
        }
        public ActionResult Careers()
        {
            return View();
        }
        public ActionResult Industries()
        {
            return View();
        }
        public ActionResult Our_clients()
        {
            return View();
        }
        public ActionResult Our_Expertise()
        {
            return View();
        }
        public ActionResult Technical_Services()
        {
            return View();
        }
        public ActionResult Staffing()
        {
            return View();
        }
        
        // get
        public ActionResult Contact_Us()
        {            
            return View(new ContactUS());
        }   
        
        [HttpPost]
        public ActionResult Contact_Us(ContactUS cu)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    SendEmail(cu);
                    cu.EmailSent = true;
                    return View(cu);
                }
                catch (Exception)
                {
                    return View(cu);
                }
            }
            return View(cu);
        }

        public void SendEmail(ContactUS cu)
        {
            string emailContent = "";
            //var emailContent = string.Format(content, paymentInfo.InvoiceNumber, DateTime.Now.ToLongDateString(), DateTime.Now.ToLongTimeString()
            //    , Request.Form["firstname"]
            //    , Request.Form["email"]
            //    , Request.Form["phone"]
            //    , Request.Form["productinfo"]
            //    , Request.Form["mihpayid"]
            //    , Request.Form["txnid"]
            //    , Request.Form["MachineMac"]
            //    , paymentInfo.MachineIp
            //    , paymentInfo.Browser
            //    , Request.Form["status"]
            //    , Request.Form["error"] + " " + Request.Form["error_Message"]
            //    , paymentInfo.Amount,
            //    paymentInfo.Currency);

            emailContent = "First Name: " + cu.FirstName;
            emailContent += "Last Name: " + cu.LastName;
            emailContent += "Email: " + cu.Email;
            emailContent += "Phone: " + cu.Phone;
            emailContent += "Company:" + cu.Company;
            emailContent += "ContactUs_Request:" + cu.ContactUs_Request;

            MailSend send = new MailSend();
            send.Send("title of email", emailContent);
        }

        public ActionResult Privacy_Statement()
        {
            return View();
        }
        public ActionResult Cookie_Policy()
        {
            return View();
        }
        public ActionResult Terms_of_Use()
        {
            return View();
        }
    }
}