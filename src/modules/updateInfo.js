import weatherSet_Get from "./process_store_values";

const update = (function() {

    function updateAllDisplayValues(dataCategory, hrs) {
        // console.log(dataCategory + ' ' + hrs);

        // we don't want these functions to be called when we are changing the slider value
        // but we want these function to be called when the page is loaded for first time or new location is entered
        // when the slider is in current hour range we want the values to be taken from the current data not forecast data
        // when slider value is changed in current hour range we send null in both the data cat and hrs variable
        // on the first load or on loaction entered the data cat and hrs is undefined
        // so these functions are called on first load but not when slider value is changed in the current hour range
        // as we are sending null in the function parameters

        if(dataCategory === undefined) { 
            updateLocation();
            updateForecastSliderValue();
            updateForeCastSliderLabels();
        }

        updateDayDate(dataCategory, hrs);
        updateTime(dataCategory, hrs);
        updateWeatherIcon(dataCategory, hrs);
        updateTemperature(dataCategory, hrs);
        updateWeatherType(dataCategory, hrs);
        updateFeelLikeTemperature(dataCategory, hrs);
        updateHumidity(dataCategory, hrs);
        updateChanceOfRain(dataCategory, hrs);
        updateWindSpeed(dataCategory, hrs);
        updatePressure(dataCategory, hrs);
    }

    function updateLocation() {
        let element = document.getElementById('location');
        let attributeValue = weatherSet_Get('getCurrent', 'location');
        element.textContent = attributeValue;
    }

    function formatDayDate(attributeValue) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
        let dateSuffix = ['th', 'st', 'nd', 'rd'];
        let date = new Date(attributeValue);
        let day = date.getDate();
        if(day % 10 < 4) {
            day = day + dateSuffix[day % 10];
        } else {
            day = day + 'th';
        }
        return weekdays[date.getDay()] + ", " + day + ', ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }
    
    function updateDayDate(dataCategory, hrs) {
        let element = document.getElementById('dayDate');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = formatDayDate(attributeValue);
    }

    function updateTime(dataCategory, hrs){
        let element = document.getElementById('time');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        // we want the time to update on change of the slider but the time on loading of new loaction should be taken from current
        // when the slider is changed we send the data category value then the value of time is updated according to the forecast slider value of time
        // when we change the slider in the current hour range we send null in data cat value then also the value of time need to be updated according to fore cast slider value
        if(dataCategory || dataCategory === null) {
            let min = processSliderValue('min');
            attributeValue = attributeValue.split(':')[0] + ':' + min;
        } else {
            attributeValue = Number(attributeValue.split(':')[0]) < 10 ? 0 + attributeValue : attributeValue;
        }
        // console.log(attributeValue);
        element.textContent = attributeValue;
    }
    
    function updateWeatherIcon(dataCategory, hrs) {
        let element = document.getElementById('weatherIcon');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.src = attributeValue;
    }
    
    function updateTemperature(dataCategory, hrs) {
        let element = document.getElementById('temperature');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').textContent.charAt(1);
        element.textContent = attributeValue[activeUnit];
    }
    
    function updateWeatherType(dataCategory, hrs) {
        let element = document.getElementById('weatherType');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue;
    }

    function updateFeelLikeTemperature(dataCategory, hrs) {
        let element = document.getElementById('feelsLike');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').textContent.charAt(1);
        element.textContent = attributeValue[activeUnit] + ' °' + activeUnit;
    }

    function updateHumidity(dataCategory, hrs) {
        let element = document.getElementById('humidity');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue + " %";
    }
    
    function updateChanceOfRain(dataCategory, hrs) {
        let element = document.getElementById('chanceOfRain');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue + " %";
    }

    function updateWindSpeed(dataCategory, hrs) {
        let element = document.getElementById('windSpeed');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue['kph'] + " kph";
    }
    
    function updatePressure(dataCategory, hrs) {
        let element = document.getElementById('pressure');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue['mb'] + " mb";
    }

    function updateForecastSliderValue() {
        const forecastSlider = document.getElementById('forecastSlider');
        let currentMin = Number(weatherSet_Get('getCurrent', 'time').split(':')[1]);
        forecastSlider.value = `${Number(currentMin)}`;
        // forecastSlider.value = '0';
    }

    function updateForeCastSliderLabels() {
        let currentHour = Number(weatherSet_Get('getCurrent', 'time').split(':')[0]);
        let hourLabels = Array.from(document.querySelectorAll('option'));
        // console.log(hourLabels);
        for(let label in hourLabels) {
            // console.log(label);
            if(label === '0' || label === '8') {
                hourLabels[label].label = '';
            } else {
                currentHour = currentHour + 3;
                currentHour = currentHour > 23 ? currentHour%23-1 : currentHour;
                hourLabels[label].label = currentHour < 10 ? `0${currentHour}:00` : `${currentHour}:00`;
            }
        }        
    }

    function updateTemperatureUnitsChanged() {
        let dataCategory, hrs;
        if(! (processSliderValue('hrs') === 0)) {
            hrs = processSliderValue('hrs');
            dataCategory = 'getHourly';
        } else {
            hrs = null;
            dataCategory = null;
        }
        updateTemperature(dataCategory, hrs);
        updateFeelLikeTemperature(dataCategory, hrs);
    }

    function updateForecastHourInfo() {
        let dataCategory, hrs;
        if(! (processSliderValue('hrs') === 0)) {
            hrs = processSliderValue('hrs');
            dataCategory = 'getHourly';
        } else {
            hrs = null;
            dataCategory = null;
        }
        // hrs = processSliderValue('hrs');
        // dataCategory = 'getHourly';
        updateAllDisplayValues(dataCategory, hrs);
    }

    function processSliderValue(hrs_min) {
        let sliderValue = document.getElementById('forecastSlider').value.split('.')[0];
        // console.log(sliderValue);
        let hrs = Math.floor(sliderValue / 60);
        let min = sliderValue % 60;
        min = min < 10 ? '0'+min : min;
        // console.log(hrs+ ":"+ min);
        if(hrs_min === 'hrs' || !hrs_min) {
            return hrs;
        } else if(hrs_min === 'min') {
            return min;
        }
    }

    return {
        updateAllDisplayValues,
        updateTemperatureUnitsChanged,
        updateForecastHourInfo
    }
})();

export default function updateControl(option) {
    if(option === 1) {
        update.updateAllDisplayValues();
    } else if(option === 2) {
        update.updateTemperatureUnitsChanged();
    } else if(option === 3) {
        update.updateForecastHourInfo();
    }
}