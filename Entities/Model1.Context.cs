﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ThbPayments.Entities
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using THB_site.Entities;

    public partial class amrullah_thbdbEntities : DbContext
    {
        public amrullah_thbdbEntities()
            : base("name=amrullah_thbdbEntities")
        {
        }
    
    	public amrullah_thbdbEntities(string connectionString) : base(connectionString){    }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<PaymentInfo> PaymentInfoes { get; set; }
    }
}
