import weatherSet_Get from "./process_store_values";

const update = (function() {

    function updateAllDisplayValues(dataCategory, hrs) {
        updateLocation();
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
        updateForeCastSliderLabels();
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
        if(dataCategory) {
            // console.log(attributeValue);
            let min = processSliderValue('min');
            attributeValue = attributeValue.split(':')[0] + ':' + min;
        } else {
            attributeValue = Number(attributeValue.split(':')[0]) < 10 ? 0 + attributeValue : attributeValue;
        }
        
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
        updateTemperature();
        updateFeelLikeTemperature();
    }

    function updateForecastHourInfo() {
        let hrs = processSliderValue('hrs');
        let dataCategory = 'getHourly';
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