﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace THB_site.Models
{
    public class Locations
    {
        public string latitude { get; set; }
        public string longitude { get; set; }

        public Locations(string latitude, string longitude)
        {
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
}