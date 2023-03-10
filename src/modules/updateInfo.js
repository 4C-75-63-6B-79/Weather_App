import weatherSet_Get from "./process_store_values";
import updateBackground from "./background.js";

const update = (function() {

    function updateAllDisplayValues(dataCategory, hrs, dayIndex) {
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
            updateForecastDayBody();
            updateActiveForecastDayCard()
            updateError();
        }

        updateDayDate(dataCategory, hrs, dayIndex);
        updateTime(dataCategory, hrs, dayIndex);
        updateWeatherIcon(dataCategory, hrs, dayIndex);
        updateTemperature(dataCategory, hrs, dayIndex);
        updateWeatherType(dataCategory, hrs, dayIndex);
        updateFeelLikeTemperature(dataCategory, hrs, dayIndex);
        updateHumidity(dataCategory, hrs, dayIndex);
        updateChanceOfRain(dataCategory, hrs, dayIndex);
        updateWindSpeed(dataCategory, hrs, dayIndex);
        updatePressure(dataCategory, hrs, dayIndex);
        updateBackground();
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
    
    function updateDayDate(dataCategory, hrs, day) {
        let element = document.getElementById('dayDate');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = formatDayDate(attributeValue);
    }

    function updateTime(dataCategory, hrs, day){
        let element = document.getElementById('time');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
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
    
    function updateWeatherIcon(dataCategory, hrs, day) {
        let element = document.getElementById('weatherIcon');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.src = attributeValue;
    }
    
    function updateTemperature(dataCategory, hrs, day) {
        let element = document.getElementById('temperature');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        element.textContent = attributeValue[activeUnit];
    }
    
    function updateWeatherType(dataCategory, hrs, day) {
        let element = document.getElementById('weatherType');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue;
    }

    function updateFeelLikeTemperature(dataCategory, hrs, day) {
        let element = document.getElementById('feelsLike');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        element.textContent = attributeValue[activeUnit] + ' ??' + activeUnit.toUpperCase();
    }

    function updateHumidity(dataCategory, hrs, day) {
        let element = document.getElementById('humidity');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue + " %";
    }
    
    function updateChanceOfRain(dataCategory, hrs, day) {
        let element = document.getElementById('chanceOfRain');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue + " %";
    }

    function updateWindSpeed(dataCategory, hrs, day) {
        let element = document.getElementById('windSpeed');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue['kph'] + " kph";
    }
    
    function updatePressure(dataCategory, hrs, day) {
        let element = document.getElementById('pressure');
        let id = element.getAttribute('id');
        let attributeValue = weatherSet_Get(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || weatherSet_Get('getCurrent', id);
        element.textContent = attributeValue['mb'] + " mb";
    }

    function updateForecastSliderValue(sliderValue) {
        // slider value is undefined usually but when the forecast day card is clicked this is 0 since day starts at 0:00 hrs
        const forecastSlider = document.getElementById('forecastSlider');
        let currentMin = sliderValue || Number(weatherSet_Get('getCurrent', 'time').split(':')[1]);
        // console.log(currentMin);
        forecastSlider.value = `${Number(currentMin)}`;
        // forecastSlider.value = '0';
    }

    function updateForeCastSliderLabels(firstSliderLable) {
        let currentHour = firstSliderLable || Number(weatherSet_Get('getCurrent', 'time').split(':')[0]);
        let hourLabels = Array.from(document.querySelectorAll('option'));
        // console.log(hourLabels);
        for(let label in hourLabels) {
            // console.log(label);
            if(label === '0' || label === '8') {
                hourLabels[label].label = '';
            } else {
                currentHour = Number(currentHour) + 3;
                currentHour = currentHour > 23 ? currentHour%23-1 : currentHour;
                hourLabels[label].label = currentHour < 10 ? `0${currentHour}:00` : `${currentHour}:00`;
            }
        }        
    }

    function updateTemperatureUnitsChanged() {
        let dataCategory, hrs, dayIndex;
        const activeForecastDayCardDayIndex = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        if(activeForecastDayCardDayIndex === 0) {  // here we are checking if the current day is selected so we get the hourly data but if not then dayHourly data
            if(! (processSliderValue('hrs') === 0)) {
                hrs = processSliderValue('hrs');
                dataCategory = 'getHourly';
            } else {
                hrs = null;
                dataCategory = null;
            }
        } else {
            hrs = processSliderValue('hrs');
            dataCategory = 'getDayHourly';
            dayIndex = activeForecastDayCardDayIndex;
        }

        updateTemperature(dataCategory, hrs, dayIndex);
        updateFeelLikeTemperature(dataCategory, hrs, dayIndex);
        updateForecastDayTemperatureUnit(); // this only updates the card temperature units so no attribute necessary as it is done in that function 
    } 

    function updateForecastHourInfo() {
        let dataCategory, hrs, dayIndex;
        const activeForecastDayCardDayIndex = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        if(activeForecastDayCardDayIndex === 0) {
            if(! (processSliderValue('hrs') === 0)) {
                hrs = processSliderValue('hrs');
                dataCategory = 'getHourly';
            } else {
                hrs = null;
                dataCategory = null;
            }
        } else {
            hrs = processSliderValue('hrs');
            dataCategory = 'getDayHourly';
            dayIndex = activeForecastDayCardDayIndex;
        }

        // hrs = processSliderValue('hrs');
        // dataCategory = 'getHourly';
        updateAllDisplayValues(dataCategory, hrs, dayIndex);
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

    function updateError(err) {
        const error = document.getElementById('error');
        error.textContent = err;
    }

    function updateForecastDayTemperatureUnit() {
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        let maxTemps = Array.from(document.getElementsByClassName('forecastDayMaxTemp'));
        let minTemps = Array.from(document.getElementsByClassName('forecastDayMinTemp'));

        for(let maxTemp in maxTemps) {
            let element = maxTemps[maxTemp];
            let dayIndex = element.getAttribute('id').split('dayForecastDay')[0];
            let attributeName = element.getAttribute('id').split('dayForecastDay')[1];
            let attributeValue = weatherSet_Get('getAverage', {dayIndex, attributeName});
            element.textContent = attributeValue[activeUnit] + ' ??' + activeUnit.toUpperCase();
        }

        for(let minTemp in minTemps) {
            let element = minTemps[minTemp];
            let dayIndex = element.getAttribute('id').split('dayForecastDay')[0];
            let attributeName = element.getAttribute('id').split('dayForecastDay')[1];
            let attributeValue = weatherSet_Get('getAverage', {dayIndex, attributeName});
            element.textContent = attributeValue[activeUnit] + ' ??' + activeUnit.toUpperCase();
        }
    }

    function updateForecastDayCard(dayCard) {
        // console.log(dayCard);
        let splitValue = 'dayForecastDay';
        let dayCardId = dayCard.getAttribute('id');
        let dayIndex = dayCardId.charAt(0);
        for(let child of dayCard.children) {
            let attributeName = child.getAttribute('id').split(splitValue)[1];
            // console.log(attributeName);
            let attributeValue = weatherSet_Get('getAverage', {dayIndex, attributeName});
            // this is not good practice sorry
            switch(attributeName) {
                case 'DayName':
                    let day = formatDayDate(attributeValue);
                    child.textContent = day.split(', ')[0];
                    break;
                case 'WeatherIcon': 
                    child.src = attributeValue;
                    break;
                case 'WeatherType':
                    child.textContent = attributeValue;
                    break;
                // case 'MaxTemp':
                //     let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
                //     child.textContent = attributeValue[activeUnit] + ' ??' + activeUnit.toUpperCase();
                //     break;
                case 'MinTemp':
                    // let activeUni = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
                    // child.textContent = attributeValue[activeUni] + ' ??' + activeUni.toUpperCase();
                    updateForecastDayTemperatureUnit();
                    break;
                case 'ChanceOfRain':
                    let chanceOfRainChild = child.lastChild;
                    child.textContent = attributeValue + ' %';
                    child.appendChild(chanceOfRainChild);
                    break;
                case 'WindSpeed':
                    let windSpeedChild = child.lastChild;
                    child.textContent = attributeValue['kph'] + ' kph';
                    child.appendChild(windSpeedChild);
                    break;
            }
        }
    }

    function  updateForecastDayBody(){
        const forecastDayCards = Array.from(document.getElementsByClassName('forecastDayCard'));
        // console.log(forecastDayCards);
        for(let card in forecastDayCards) {
            updateForecastDayCard(forecastDayCards[card]);
        }
    }

    function updateDisplayValueAccordingToForecastDayCardClicked(dayIndex) {
        if(dayIndex === 0) {
            updateAllDisplayValues();
        } else {
            // updating the slider value and the label values here since i was not able to find a solution to update them in updatealldisplay
            // value function without using if and else which might make it jank and difficult to under stand with all the undefined
            // and null values i am sending it to make it work which makes it already very jank so sorry
            updateForecastSliderValue('0');
            updateForeCastSliderLabels('0');
            updateAllDisplayValues('getDayHourly', 0, Number(dayIndex));
        }
    }
    
    function updateActiveForecastDayCard() {
        const activeForecastDay = document.querySelector('.activeForecastDayCard');
        const currentDayCard = document.getElementById('0dayForecastCard');
        if(! currentDayCard.classList.contains('activeForecastDayCard')) {
            activeForecastDay.classList.remove('activeForecastDayCard');
            currentDayCard.classList.add('activeForecastDayCard');
        }
    }


    return {
        updateAllDisplayValues,
        updateTemperatureUnitsChanged,
        updateForecastHourInfo,
        updateError,
        updateDisplayValueAccordingToForecastDayCardClicked,
    }
})();

export default function updateControl(option) {
    if(option.functionCode === 1) {
        update.updateAllDisplayValues();
    } else if(option.functionCode === 2) {
        update.updateTemperatureUnitsChanged();
    } else if(option.functionCode === 3) {
        update.updateForecastHourInfo();
    } else if(option.functionCode === 4) {
        update.updateError(option.error);
    } else if(option.functionCode === 5) {
        update.updateDisplayValueAccordingToForecastDayCardClicked(option.dayIndex);
    }
}