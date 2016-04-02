using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Searching.Solution.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");


            routes.MapRoute(
            name:"home",
            url:"Home/StartPage",
            defaults: new { controller="Home", action="StartPage" });

            routes.MapRoute(
                name: "Search",
                url: "Navigation/Search",
                defaults: new { controller = "Navigation", action = "Search" });

            routes.MapRoute(
                name: "Profile",
                url: "Navigation/Profile",
                defaults: new { controller = "Navigation", action = "Profile" });

            routes.MapRoute(
            name: "AnnouncingList",
            url: "Search/AnnouncingList/{categories_id}",
            defaults: new { controller = "Search", action = "AnnouncingList",categories_id=UrlParameter.Optional });

            routes.MapRoute(
            name: "AnnFilter",
            url: "Search/GetAnnFilter/{filter}",
            defaults: new { controller = "Search", action = "GetAnnFilter", filter = UrlParameter.Optional });

            routes.MapRoute(
                 name: "Default",
                 url: "{*url}",
                 defaults: new { controller = "Home", action = "StartPage" });
        }
    }
}
