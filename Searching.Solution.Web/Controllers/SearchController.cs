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
       
        public ActionResult AnnouncingList(/*int categories_id = 0*/)
        {
            //List<Announcing> la = new List<Announcing>();
            //if (categories_id == 0) { 
            // la = await QueryList.GetAnnouncing();
            //}
            //else
            //{ 
            //_filter.Category_id = categories_id;
            // la = await QueryList.GetAnnouncingFilter(_filter);
            //}
            return View(/*la*/);
        }

        public async Task<ActionResult>GetAnnFilter(AnnFilter filter) {
        List<Announcing> la = new List<Announcing>();
            la = await QueryList.GetAnnouncingFilter(filter);   
            return Json(la);
        } 
    }
}