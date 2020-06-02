using System;
using System.Configuration;
using System.Net;
using System.Net.Mail;

namespace THB_site.Entities
{
    public class MailSender
    {
        public MailSender()
        {
        }
        public string[] ToEmailAddress = ConfigurationManager.AppSettings["ToEmailId"].Split(',');
        public static string FromEmailId = ConfigurationManager.AppSettings["FromEmailId"];
        public static string SmtpUserName = ConfigurationManager.AppSettings["SmtpUserName"];
        public static string SmtpUserPassword = ConfigurationManager.AppSettings["SmtpPassword"];
        public static string SmtpServerUri = ConfigurationManager.AppSettings["SmtpServerUri"];
        public bool send(string subject, string content)
        {
            //FromEmailId = "one@atst.asoft.in";
            //SmtpUserName = "one@atst.asoft.in";
            //SmtpUserPassword = "one";
            //SmtpServerUri = "atst.asoft.in";

            ////string mailid, password;
            ////password = "one";
            ////mailid = "one@mtest.asoft.in";
            ////StringBuilder sb = new StringBuilder();
            ////StringWriter sw = new StringWriter(sb);
            ////Html32TextWriter htw = new Html32TextWriter(sw);
            MailMessage m = new MailMessage();
            m.From = new MailAddress(FromEmailId); //"one@atst.asoft.in");//msend.dyndns-work.com");
            foreach (string mids in ToEmailAddress)
            {
                if (string.IsNullOrEmpty(mids))
                    continue;
                try
                {
                    m.To.Add(new MailAddress(mids));
                }
                catch
                {
                    return false;
                }
            }
            if (m.To.Count < 0)
                return false;
            m.Subject = subject;
            m.Body = content;
            SmtpClient smtp = new SmtpClient(SmtpServerUri);//"mtest.asoft.in");//atst.asoft.in");//msend.asoft.in");//atst.asoft.in");//atst.asoft.in");
            NetworkCredential SMTPUserInfo = new NetworkCredential(SmtpUserName, SmtpUserPassword);
            smtp.Credentials = SMTPUserInfo;
            smtp.Port = 587;
            smtp.EnableSsl = true;
            try
            {
                //smtp.Port = 2525;
                //int i = 200;
                //while (i > 0)
                //{

                smtp.Send(m);
                return true;
            }
            catch (Exception ex)
            {
                //log l = new log();
                //l.write(e.Message);
                return false;
            }
            finally
            {
                smtp = null;
            }
        }
    }
}