
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace THB_site.Entities
{

using System;
    using System.Collections.Generic;
    
public partial class PaymentInfo
{

    public string TxnId { get; set; }

    public decimal Amount { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }

    public string ProductInfo { get; set; }

    public System.DateTime ModifiedOn { get; set; }

    public System.DateTime CreatedOn { get; set; }

    public string Response { get; set; }

    public string Status { get; set; }

    public Nullable<System.DateTime> ResponseTime { get; set; }

    public string Request { get; set; }

    public string InvoiceNumber { get; set; }

    public string Browser { get; set; }

    public string MachineIp { get; set; }

    public string Currency { get; set; }

}

}
