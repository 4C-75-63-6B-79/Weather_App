

const weather = (function() {
    let currentWeatherAttributeValues, currentDayHourlyForecastWeatherAttributeValues, forecastDayAttributeValues;

    function getCurrent(attributeName) {
        return currentWeatherAttributeValues[attributeName];
    }

    function setCurrent(data) {
        currentWeatherAttributeValues = {};
        currentWeatherAttributeValues = {
            location: data.location.name,
            dayDate: data.location.localtime.split(' ')[0],
            time: data.location.localtime.split(' ')[1],
            weatherIcon: data.current.condition.icon,
            temperature: {
                'c': data.current.temp_c,
                'f': data.current.temp_f,
            },
            weatherType: data.current.condition.text,
            feelsLike: {
                c: data.current.feelslike_c,
                f: data.current.feelslike_f,
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
                'c': data.temp_c,
                'f': data.temp_f,
            },
            weatherType: data.condition.text,
            feelsLike: {
                c: data.feelslike_c,
                f: data.feelslike_f,
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
        return object;
    }

    function setHourlyForecast(data) {
        let currentHour = currentWeatherAttributeValues['time'].split(':')[0];
        let todayHourData = data.forecast.forecastday[0].hour.slice(Number(currentHour));
        let tomorrowHourData = data.forecast.forecastday[1].hour.slice(0,Number(currentHour));
        let forecast24HourData = todayHourData.concat(tomorrowHourData);
        todayHourData = [];
        tomorrowHourData = [];
        // console.log(forecast24HourData);
        currentDayHourlyForecastWeatherAttributeValues = [];
        for(let hourData in forecast24HourData) {
            let object = hourlyWeatherDataObjectFactory(forecast24HourData[hourData]);
            currentDayHourlyForecastWeatherAttributeValues.push(object);
        }
        // console.log(hourlyForecastWeatherAttributeValues);
    }

    function getHourlyForecast(pos, attributeName) {
        return currentDayHourlyForecastWeatherAttributeValues[pos][attributeName];
    }
    
    function averageForecastDataObjectFactory(data, index) {
        let object = {
            astro: {
                moonrise: data.astro.moonrise,
                moonset: data.astro.moonset,
                sunrise: data.astro.sunrise,
                sunset: data.astro.sunset,
            },
            average: {
                DayName: data.date,
                WeatherIcon: data.day.condition.icon,
                WeatherType: data.day.condition.text,
                MaxTemp: {
                    c: data.day.maxtemp_c,
                    f: data.day.maxtemp_f
                },
                MinTemp: {
                    c: data.day.mintemp_c,
                    f: data.day.mintemp_f
                },
                ChanceOfRain: data.day.daily_chance_of_rain,
                WindSpeed: {
                    kph: data.day.maxwind_kph,
                    mph: data.day.maxwind_mph
                }
            },
            hourly: [],
        }
        if(index === '0') {
            // console.log('object returned');
            return object;
        }
        for(let hourData in data.hour) {
            object.hourly.push(hourlyWeatherDataObjectFactory(data.hour[hourData]));
        }
        // console.log(object.hourly[1]);
        return object;
    }

    function setDayForecast(data) {
        let averageForecastData = data.forecast.forecastday;
        forecastDayAttributeValues = [];
        for(let data in averageForecastData) {
            forecastDayAttributeValues.push(averageForecastDataObjectFactory(averageForecastData[data], data));          
        }
        // console.log(forecastDayAttributeValues);
    }

    function getAverageForeCast(dayIndex, attributeName) {
        return forecastDayAttributeValues[Number(dayIndex)].average[attributeName];
    }

    function getHourlyDailyForecastData(dayIndex, hourIndex, attributeName) {
        // console.log(attributeName);
        // console.log(forecastDayAttributeValues[dayIndex].hourly[hourIndex][attributeName]);
        return (forecastDayAttributeValues[dayIndex].hourly[hourIndex][attributeName]);
    }

    function getAstroData(dayIndex) {
        // console.log(dayIndex)
        // console.log(forecastDayAttributeValues);
        return forecastDayAttributeValues[dayIndex]['astro'];
    }

    return {
        getCurrent,
        setCurrent,
        setHourlyForecast, // for current day
        getHourlyForecast,
        setDayForecast, // for day that are ahead of current days
        getAverageForeCast,
        getHourlyDailyForecastData,
        getAstroData,
    }

})();

    
export default function weatherSet_Get(func, option) {
    
    switch(func) {
        case 'getCurrent':
            return weather.getCurrent(option);
        case 'set':
            weather.setCurrent(option);
            weather.setHourlyForecast(option);
            weather.setDayForecast(option);
            break;
        case 'getHourly':
            return(weather.getHourlyForecast(option.hourIndex, option.attributeName));
        case 'getAverage':
            return(weather.getAverageForeCast(option.dayIndex, option.attributeName));
        case 'getDayHourly':
            // console.log(weather.getHourlyDailyForecastData(option.dayIndex, option.hourIndex, option.attributeName));
            // console.log(option.attributeName);
            return weather.getHourlyDailyForecastData(option.dayIndex, option.hourIndex, option.attributeName);
        case 'getAstro':
            return weather.getAstroData(Number(option.dayIndex));
        default:
            break;
    }
}