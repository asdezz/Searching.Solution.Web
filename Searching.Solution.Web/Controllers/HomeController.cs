using Newtonsoft.Json;
using Searching.Solution.Web.App_Start;
using Searching.Solution.Web.Logic.Transport;
using SearchingLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Searching.Solution.Web.Controllers
{
    public class HomeController : Controller
    {   
        AnnFilter filter = new AnnFilter();
        //GET: Home
        [HttpGet]
        [AllowCrossSiteJson]
        public ActionResult StartPage()
            {
            AnnFilter ann = new AnnFilter();
            ViewData["Title"] = "Index";
            return View();
        }

        //public JsonResult testPostMethod(int categories_id)
        //{
        //    AnnFilter filter = new AnnFilter(); ;
        //    return Json(filter, JsonRequestBehavior.AllowGet);
        //}

        //[AllowCrossSiteJson]
        //public async Task< ActionResult> SaveCategories_id(int filter)
        //{
        //   // filter.Category_id = categories_id;
        //    List<Announcing> la = new List<Announcing>();
        //   // la = await QueryList.GetAnnouncingFilter(filter);
        //    return Json(la);
        //}

        //public ActionResult SaveCity_id(int city_id)
        //{
        //    filter.City_id = city_id;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveAreas_id(int areas_id)
        //{
        //    filter.Areas_id = areas_id;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveCountry_id(int country_id )
        //{
        //    filter.Country_id= country_id;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveGender_user(char gender_user)
        //{
        //    filter.Gender_user = gender_user;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveDateAnnouncing(DateTime DateAnnouncing)
        //{
        //    filter.DateAnnouncing = DateAnnouncing;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveMaxDateBearthday(DateTime MaxDateBearthday)
        //{
        //    filter.MaxDateBirthday = MaxDateBearthday;
        //    return RedirectToAction("GetAnn", filter);
        //}
        //public ActionResult SaveMinDateBearthday(DateTime MinDateBearthday)
        //{
        //    filter.MinDateBirthday = MinDateBearthday;
        //    return RedirectToAction("GetAnn", filter);
        //}
        
        public ActionResult Test ()
        {
            var strang = ""; 
            return Json(strang);
        }

    }
}