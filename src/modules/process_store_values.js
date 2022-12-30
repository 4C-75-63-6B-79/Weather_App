

const weather = (function(value) {
    let weatherAttributeValues;

    function get(attributeName) {
        return weatherAttributeValues[attributeName];
    }

    function set(data) {
        weatherAttributeValues = {
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
    
    return {
        get,
        set
    }

})();

    
export default function weatherSet_Get(func, option) {
    
    switch(func) {
        case 'get':
            return weather.get(option);
            break;
        case 'set':
            weather.set(option);
            break;
        default:
            break;
    }
}