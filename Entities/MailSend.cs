using System;
using System.Configuration;
using System.Net;
using System.Net.Mail;

namespace MailApi
{
    public class MailSend
    {
        public MailSend()
        {
        }
        public string[] ToEmailAddress = ConfigurationManager.AppSettings["ToEmailId"].Split(',');
        public static string FromEmailId= ConfigurationManager.AppSettings["FromEmailId"];
        public static string SmtpUserName= ConfigurationManager.AppSettings["SmtpUserName"];
        public static string SmtpUserPassword= ConfigurationManager.AppSettings["SmtpPassword"];
        public static string SmtpUserDomain = ConfigurationManager.AppSettings["SmtpUserDomain"];
        public static string SmtpServerUri= ConfigurationManager.AppSettings["SmtpServerUri"];
        public bool Send(string subject, string content)
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
            MailMessage m = new MailMessage
            {
                From = new MailAddress(FromEmailId) //"one@atst.asoft.in");//msend.dyndns-work.com");
            };
            foreach (string mids in ToEmailAddress)
            {
                if (string.IsNullOrEmpty(mids))
                    continue;
                try
                {
                    m.To.Add(new MailAddress(mids));
                }
                catch(Exception)
                {
                    return false;
                }
            }
            if (m.To.Count < 0)
                return false;
            m.Subject = subject;
            m.Body = content;
            SmtpClient smtp = new SmtpClient
            {
                Port = 587,
                EnableSsl = true,
                Host = SmtpServerUri,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(SmtpUserName, SmtpUserPassword, SmtpUserDomain)
            };//"mtest.asoft.in");//atst.asoft.in");//msend.asoft.in");//atst.asoft.in");//atst.asoft.in");
            try
            {
                //smtp.Port = 2525;
                //int i = 200;
                //while (i > 0)
                //{

                smtp.Send(m);
                return true;
            }
            catch(Exception)
            {
                //log l = new log();
                //l.write(e.Message);
                return false;
            }
            finally
            {
                smtp.Dispose();
            }
        }
    }
}
