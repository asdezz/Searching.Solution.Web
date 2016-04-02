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
       public AnnFilter _filter = new AnnFilter();
        public async  Task<ActionResult> AnnouncingList(int categories_id = 0)
        {
            _filter.Category_id = categories_id;
            List<Announcing> la = await QueryList.GetAnnouncingFilter(_filter);
            return View();
        }
    }
}