using OpenWeatherService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace OpenWeatherService
{
    [ServiceContract]
    public interface IOpenWeatherService
    {
        [OperationContract]
        string GetWeather(WeatherParameter Param);

        [OperationContract]
        WeatherObject GetWeatherobject(WeatherParameter Param);

        void SaveObject(WeatherObject wObject);

        void GetWeatherWithSave(WeatherParameter Param);
    }
}
