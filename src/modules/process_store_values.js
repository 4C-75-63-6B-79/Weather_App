

const weather = (function() {
    let currentWeatherAttributeValues, hourlyForecastWeatherAttributeValues = [];

    function getCurrent(attributeName) {
        return currentWeatherAttributeValues[attributeName];
    }

    function setCurrent(data) {
        currentWeatherAttributeValues = {
            location: data.location.name,
            dayDate: data.location.localtime.split(' ')[0],
            time: data.location.localtime.split(' ')[1],
            weatherIcon: data.current.condition.icon,
            temperature: {
                'C': data.current.temp_c,
                'F': data.current.temp_f,
            },
            weatherType: data.current.condition.text,
            feelsLike: {
                C: data.current.feelslike_c,
                F: data.current.feelslike_f,
            },
            humidity: data.current.humidity,
            chanceOfRain: data.forecast.forecastday['0'].hour[Number(data.location.localtime.split(' ')[1].split(':')[0])].chance_of_rain,
            windSpeed: {
                kph: data.current.wind_kph,
                mph: data.current.wind_mph,
            },
            pressure: {
                mb: data.current.pressure_in,
                in: data.current.pressure_mb,
            }
        }
    }

    function hourlyWeatherDataObjectFactory(data) {
        let object = {
            dayDate: data.time.split(' ')[0],
            time: data.time.split(' ')[1],
            weatherIcon: data.condition.icon,
            temperature: {
                'C': data.temp_c,
                'F': data.temp_f,
            },
            weatherType: data.condition.text,
            feelsLike: {
                C: data.feelslike_c,
                F: data.feelslike_f,
            },
            humidity: data.humidity,
            chanceOfRain: data.chance_of_rain,
            windSpeed: {
                kph: data.wind_kph,
                mph: data.wind_mph,
            },
            pressure: {
                mb: data.pressure_in,
                in: data.pressure_mb,
            }
        }
        hourlyForecastWeatherAttributeValues.push(object);
    }

    function setHourlyForecast(data) {
        let currentHour = currentWeatherAttributeValues['time'].split(':')[0];
        let todayHourData = data.forecast.forecastday[0].hour.slice(Number(currentHour));
        let tomorrowHourData = data.forecast.forecastday[0].hour.slice(0,Number(currentHour));
        let forecast24HourData = todayHourData.concat(tomorrowHourData);
        todayHourData = [];
        tomorrowHourData = [];
        console.log(forecast24HourData);
        for(let hourData in forecast24HourData) {
            hourlyWeatherDataObjectFactory(forecast24HourData[hourData]);
        }
    }

    function getHourlyForecast(pos, attributeName) {
        return hourlyForecastWeatherAttributeValues[pos][attributeName];
    }
    
    return {
        getCurrent,
        setCurrent,
        setHourlyForecast,
        getHourlyForecast,
    }

})();

    
export default function weatherSet_Get(func, option) {
    
    switch(func) {
        case 'getCurrent':
            return weather.getCurrent(option);
            break;
        case 'set':
            weather.setCurrent(option);
            weather.setHourlyForecast(option);
            break;
        case 'getHourly':
            console.log(weather.getHourlyForecast(option.pos, option.attributeName)); 
        default:
            break;
    }
}