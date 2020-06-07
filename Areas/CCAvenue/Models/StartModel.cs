using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ThbPayments.Areas.CCAvenue
{
    public class StartModel
    {
        public bool ErrorMessage { get; set; }
        public bool SubmitButtonVisible { get; set; }
        public string Html { get; internal set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [Phone()]
        [MinLength(10)]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        [DataType(DataType.Currency)]
        public decimal Amount { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string ProductInfo { get; set; }

        [Required]
        public string InvoiceNumber { get; set; }

        [Required]
        public string Currency { get; set; }

        public static IEnumerable<SelectListItem> CurrencyTypes() => (new string[] { "USD", "INR" }).Select(x => new SelectListItem() { Text = x, Value = x, Selected = x == "INR" });
    }
}