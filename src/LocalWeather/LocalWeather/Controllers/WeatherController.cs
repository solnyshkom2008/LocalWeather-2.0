using OpenWeatherService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OpenWeatherService.Controllers
{
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        public IHttpActionResult Get([FromUri]int param)
        {

            return Ok();
        }
    }
}
