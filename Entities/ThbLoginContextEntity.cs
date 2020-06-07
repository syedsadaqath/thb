using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity.Core.EntityClient;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ThbPayments.Entities;

namespace thb.Entities
{
    public class ThbLoginContextEntity
    {
        public ThbLoginContextEntity(string connectionString)
        {
            ThbEntities = new amrullah_thbdbEntities(GetConnectionString(connectionString));
        }

        public static string GetConnectionString(string connectionString)
        {
            string connection = "";

            SqlConnectionStringBuilder sqlBuilder = new SqlConnectionStringBuilder();
            if (string.IsNullOrEmpty(connectionString))
                sqlBuilder.ConnectionString = ConfigurationManager.AppSettings["amrullah_thbdb"];
            sqlBuilder.IntegratedSecurity = false;
            sqlBuilder.MultipleActiveResultSets = true;

            EntityConnectionStringBuilder entity = new EntityConnectionStringBuilder();
            // entity.Name = "EntityBazaCRM";
            entity.Metadata = @"res://*/";

            entity.Provider = "System.Data.SqlClient";
            entity.ProviderConnectionString = sqlBuilder.ToString();

            connection = entity.ToString();

            return connection;
        }

        public amrullah_thbdbEntities ThbEntities { get; set; }
    }
}