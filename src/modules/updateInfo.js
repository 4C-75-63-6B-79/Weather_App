import weatherSet_Get from "./process_store_values";

const update = (function() {

    function updateAllDisplayValues() {
        let dataUpdateableElements = Array.from(document.querySelectorAll('[data-updateable]'));
        // console.log(dataUpdateableElements.length);
        for(let element in dataUpdateableElements) {
            let id = dataUpdateableElements[element].getAttribute('id');
            let attributeValue = weatherSet_Get('get', id);
            if(id === 'dayDate') {
                updateDayDate(dataUpdateableElements[element], attributeValue);
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
            } else {
                dataUpdateableElements[element].textContent = attributeValue;
            }
        }
    }
    
    function updateTemperatureUnitsChanged() {
        let temperatureElement = document.getElementById('temperature');
        let feelsLikeTempertureElement = document.getElementById('feelsLike');
        let attributeValue = weatherSet_Get('get', temperatureElement.getAttribute('id'));
        updateTemperature(temperatureElement, attributeValue);
        attributeValue = weatherSet_Get('get', feelsLikeTempertureElement.getAttribute('id'));
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