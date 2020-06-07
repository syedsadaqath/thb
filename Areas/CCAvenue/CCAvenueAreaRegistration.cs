using System.Web.Mvc;

namespace ThbPayments.Areas.CCAvenue
{
    public class CCAvenueAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "CCAvenue";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "CCAvenue_default",
                "CCAvenue/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}