﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Web.Script.Serialization;

namespace OpenWeather
{
    public class OpenWeatherService : IOpenWeatherService
    {
        /// <param name="RequestType">Please Select from enum</param>
        /// <param name="Format">Default Json .xml or html.</param>
        /// <param name="UnitType">metric or imperial </param>
        /// <param name="q">ID or CityName</param>
        /// <param name="Lat">empty string</param>
        /// <param name="Long">empty string</param>
        /// <returns></returns>
        public string GetWeather(WeatherParameter Param)
        {
            var apiKey = "ac6ddc9daa54317b3f571c9238e0006a";
            var wFormat = "";
            var RType = "";
            var UType = "";

            switch (Param.Format)
            {
                case DataFormat.jSon:
                    wFormat = "mode=json";
                    break;
                case DataFormat.Xml:
                    wFormat = "mode=xml";
                    break;
                case DataFormat.Html:
                    wFormat = "mode=html";
                    break;
                default:
                    break;
            }

            switch (Param.RequestType)
            {
                case RequestType.ByCityName:
                    RType = "q=" + Param.q;
                    break;
                case RequestType.ByCoordinates:
                    RType = "lat=" + Param.Lat + "&lon=" + Param.Lon;
                    break;
                case RequestType.ByCityId:
                    RType = "iq=" + Param.q;
                    break;
                default:
                    break;
            }

            switch (Param.UnitType)
            {
                case UnitType.Imperial:
                    UType = "units=imperial";
                    break;
                case UnitType.Metrics:
                    UType = "units=metric";
                    break;
                default:
                    break;
            }


            var BaseUrl = "http://api.openweathermap.org/data/2.5/weather?" + wFormat + "&" + RType + "&" + UType  + "&APPID=" + apiKey; ;
            var Content = "";

            WebRequest request = WebRequest.Create(
             BaseUrl);

            request.Credentials = CredentialCache.DefaultCredentials;

            WebResponse response = request.GetResponse();

            Console.WriteLine(((HttpWebResponse)response).StatusDescription);

            Stream dataStream = response.GetResponseStream();

            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            Content = responseFromServer;

            reader.Close();
            response.Close();

            return Content;
        }

        public WeatherObject GetWeatherobject(WeatherParameter Param)
        {
            var jsonObject = GetWeather(Param);
            WeatherObject WObject = new JavaScriptSerializer().Deserialize<WeatherObject>(jsonObject);
            return WObject;
        }
    }
}
