import weatherSet_Get from "./process_store_values";

const update = (function() {

    function updateAllDisplayValues() {
        let dataUpdateableElements = Array.from(document.querySelectorAll('[data-updateable]'));
        // console.log(dataUpdateableElements);
        for(let element in dataUpdateableElements) {
            let id = dataUpdateableElements[element].getAttribute('id');
            let attributeValue = weatherSet_Get('getCurrent', id);
            if(id === 'dayDate') {
                updateDayDate(dataUpdateableElements[element], attributeValue);
            } else if(id === 'time') {
                updateTime(dataUpdateableElements[element], attributeValue);
            } else if(id === 'weatherIcon') {
                updateWeatherIcon(dataUpdateableElements[element], attributeValue);
            } else if(id === 'temperature') {
                updateTemperature(dataUpdateableElements[element], attributeValue);
            } else if(id === 'feelsLike') {
                updateFeelLikeTemperature(dataUpdateableElements[element], attributeValue);
            } else if(id === 'windSpeed') {
                updateWindSpeed(dataUpdateableElements[element], attributeValue);
            } else if(id === 'pressure') {
                updatePressure(dataUpdateableElements[element], attributeValue);
            } else if(id === 'humidity' || id === 'chanceOfRain') {
                dataUpdateableElements[element].textContent = attributeValue + " %";
            } else if(id === 'hourLabels') {
                updateForeCastSliderLabels(dataUpdateableElements[element]);
                // console.log(attributeValue);
            } else {
                dataUpdateableElements[element].textContent = attributeValue;
            }
        }
    }
    
    function updateTemperatureUnitsChanged() {
        let temperatureElement = document.getElementById('temperature');
        let feelsLikeTempertureElement = document.getElementById('feelsLike');
        let attributeValue = weatherSet_Get('getCurrent', temperatureElement.getAttribute('id'));
        updateTemperature(temperatureElement, attributeValue);
        attributeValue = weatherSet_Get('getCurrent', feelsLikeTempertureElement.getAttribute('id'));
        updateFeelLikeTemperature(feelsLikeTempertureElement, attributeValue);
    }
    
    function updateDayDate(element, attributeValue) {
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
        element.textContent = weekdays[date.getDay()] + ", " + day + ', ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }

    function updateTime(element, attributeValue){
        let time = Number(attributeValue.split(':')[0]) < 10 ? 0 + attributeValue : attributeValue;
        element.textContent = time;
    }
    
    function updateWeatherIcon(element, attributeValue) {
        element.src = attributeValue;
    }
    
    function updateTemperature(element, attributeValue) {
        let activeUnit = document.querySelector('.activeUnit').textContent.charAt(1);
        element.textContent = attributeValue[activeUnit];
    }
    
    function updateFeelLikeTemperature(element, attributeValue) {
        let activeUnit = document.querySelector('.activeUnit').textContent.charAt(1);
        element.textContent = attributeValue[activeUnit] + ' °' + activeUnit;
    }
    
    function updateWindSpeed(element, attributeValue) {
        element.textContent = attributeValue['kph'] + " kph";
    }
    
    function updatePressure(element, attributeValue) {
        element.textContent = attributeValue['mb'] + " mb";
    }

    function updateForeCastSliderLabels(element) {
        let currentHour = Number(weatherSet_Get('getCurrent', 'time').split(':')[0]);
        let hourLabels = Array.from(document.querySelectorAll('option'));
        // console.log(hourLabels);
        for(let label in hourLabels) {
            console.log(label);
            if(label === '0' || label === '8') {
                hourLabels[label].label = '';
            } else {
                currentHour = currentHour + 3;
                currentHour = currentHour > 23 ? currentHour%23-1 : currentHour;
                hourLabels[label].label = currentHour < 10 ? `0${currentHour}:00` : `${currentHour}:00`;
            }
        }
    }

    return {
        updateAllDisplayValues,
        updateTemperatureUnitsChanged
    }
})();

export default function updateControl(option) {
    if(option === 1) {
        update.updateAllDisplayValues();
    } else if(option === 2) {
        update.updateTemperatureUnitsChanged();
    }
}