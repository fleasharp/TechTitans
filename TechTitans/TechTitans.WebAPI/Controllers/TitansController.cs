using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using TechTitans.Domain.Entities;
using TechTitans.WebAPI.Services;

namespace TechTitans.WebAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class TitansController : ApiController
    {
        // GET: api/Titans
        public IEnumerable<Titan> Get()
        {
            TitanService service = new TitanService();

            return service.GetAll();
        }

        public IHttpActionResult GetById(int id)
        {
            try
            {
                TitanService service = new TitanService();

                var titan = service.GetById(id);
                if (titan != null)
                    return Ok(titan);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return NotFound();
        }

        public IHttpActionResult Post([FromBody] Titan value)
        {
            try
            {
                TitanService service = new TitanService();
                service.Add(value);

                return Ok(value);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        public IHttpActionResult Put([FromBody] Titan value)
        {
            try
            {
                TitanService service = new TitanService();

                service.Update(value);

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
