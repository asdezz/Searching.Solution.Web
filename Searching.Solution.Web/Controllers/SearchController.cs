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
    public class SearchController : Controller
    {
       
        public ActionResult AnnouncingList()
        {
            return View();
        }

        //public async Task<ActionResult> GetAnnFilter(AnnFilter filter)
        //{
        //    List<Announcing> la = new List<Announcing>();
        //    la = await QueryList.GetAnnouncingFilter(filter);
        //    return Json(la);
        //}
        ////public async Task<ActionResult> GetAnnFilter()
        ////{
        ////    AnnFilter filter = new AnnFilter();
        ////    List<Announcing> la = new List<Announcing>();
        ////    la = await QueryList.GetAnnouncingFilter(filter);
        ////    return Json(la);
        ////}
        //public async Task<ActionResult> GetAnnFull(int announcing_id)
        //{
        //    Announcing ann = new Announcing();
        //    ann = await QueryList.GetAnnouncingFull(announcing_id.ToString());
        //    return Json(ann);
        //}
    }
}