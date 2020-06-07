using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ThbPayments.General
{
    public class ConfigurationConstants
    {
        public static string MERCHANT_ID = ConfigurationManager.AppSettings["MERCHANT_ID"];
        public static string CCAVENUE_URL = ConfigurationManager.AppSettings["CCAVENUE_URL"];
        public static string CCAVENUE_ACCESS_CODE = ConfigurationManager.AppSettings["CCAVENUE_ACCESS_CODE"];
        public static string CCAVENUE_WORKING_KEY = ConfigurationManager.AppSettings["CCAVENUE_WORKING_KEY"];
    }
}