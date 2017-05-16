using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WeatherApp.WeatherServiceWCF;
//using WeatherApp.Models;

namespace WeatherApp.Controllers
{
    /// <summary>
    /// Represents API methods for weather.
    /// </summary>
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        public IHttpActionResult Get([FromUri]WeatherParameter param)
        {
            WeatherServiceWCF.OpenWeatherServiceClient client = new WeatherServiceWCF.OpenWeatherServiceClient();

            string result = client.GetWeather(param);

            JObject json = JObject.Parse(result);

            return Ok(json);
        }
    }
}
