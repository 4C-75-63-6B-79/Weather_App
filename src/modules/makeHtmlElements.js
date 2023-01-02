import testGetWeather from "./getWeatherInfo.js";
import updateControl from "./updateInfo.js";

import imgUrl from "../assets/images/placeholder.png";
import feelsLike from "../assets/images/feelsLike.svg";
import humidity from "../assets/images/humidity.svg";
import chanceOfRain from "../assets/images/chanceOfRain.svg";
import windSpeed from "../assets/images/windSpeed.svg";
import pressure from "../assets/images/pressure.svg";

const DOM = (function() {
    function makeDiv(id = null, className = null, textContent, dataAttribute, dataAttributeValue = '') {
        let div = document.createElement('div');
        if(id) {
            div.setAttribute('id', id);
        }
        if(className) {
            div.setAttribute('class', className);
        }
        if(textContent) {
            div.textContent = textContent;
        }
        if(dataAttribute) {
            div.setAttribute(dataAttribute, dataAttributeValue);
        }
        return div;
    }

    function makeImage(id=null, url=imgUrl) {
        let img = new Image();
        if(id) {
            img.setAttribute('id', id);
        }
        img.src = url;
        return img;
    }
    
    function createMainInfoBody() {
        const body = document.querySelector('body');
        let mainInfoBody = makeDiv('mainInfoBody');
        body.appendChild(mainInfoBody);
    }
    
    function createLeftRightInfoBody() {
        const mainInfoBody = document.getElementById('mainInfoBody');
        let leftInfoBody = makeDiv('leftInfoBody');
        let rightInfoBody = makeDiv('rightInfoBody');  
        mainInfoBody.appendChild(leftInfoBody);
        mainInfoBody.appendChild(rightInfoBody);
    }
    
    function createLocationBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let locationBody = makeDiv('location', null, 'Location', 'data-updateable', 'yes');
        // locationBody.setAttribute('data-updateable', 'yes');
        // locationBody.textContent = 'Location';
        leftInfoBody.appendChild(locationBody);
    }
    
    function createDayDateBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let dayDateBody = makeDiv('dayDate', null, 'Day, Date', 'data-updateable', 'yes');
        // dayDateBody.setAttribute('data-updateable', 'yes');
        // dayDateBody.textContent = 'Day, Date';
        leftInfoBody.appendChild(dayDateBody);
    }
    
    function createTimeBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let timeBody = makeDiv('time', null, 'Time', 'data-updateable', 'yes');
        // timeBody.setAttribute('data-updateable', 'yes');
        // timeBody.textContent = 'Time';
        leftInfoBody.appendChild(timeBody);
    }
    
    function createTempInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let tempInfoBody = makeDiv('tempInfoBody');
        leftInfoBody.appendChild(tempInfoBody);
    }
    
    function createWeatherIcon() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let weatherIcon = makeImage('weatherIcon');
        weatherIcon.setAttribute('data-updateable', 'yes');
        tempInfoBody.appendChild(weatherIcon);
    }
    
    function createTempValueBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempValueBody = makeDiv('temperature', null, '#', 'data-updateable', 'yes');
        // tempValueBody.setAttribute('data-updateable', 'yes');
        // tempValueBody.textContent = '#';
        tempInfoBody.appendChild(tempValueBody);
    }
    
    function createTempUnitBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempUnitBody = makeDiv('tempUnitBody');
        tempInfoBody.appendChild(tempUnitBody);
    }
    
    function createTempUnits() {
        const tempUnitBody = document.getElementById('tempUnitBody');
        let celciusBody = makeDiv('celcius', 'activeUnit', '°C');
        let farenheitBody = makeDiv('farenheit', null, '°F');
        celciusBody.addEventListener('click', tempUnitsClicked);
        // celciusBody.setAttribute('class', 'activeUnit');
        farenheitBody.addEventListener('click', tempUnitsClicked);
        // celciusBody.textContent = '°C';
        // farenheitBody.textContent = '°F';
        tempUnitBody.appendChild(celciusBody);
        tempUnitBody.appendChild(farenheitBody);
    }
    
    function tempUnitsClicked(event) {
        let unitClicked = event.target;
        let activeUnit = document.querySelector('.activeUnit');
        if(!unitClicked.classList.contains('activeUnit')) {
            activeUnit.classList.remove('activeUnit');
            unitClicked.classList.add('activeUnit');
            updateControl({functionCode: 2});
        }
    }
    
    function createWeatherTypeInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let weatherTypeInfoBody = makeDiv('weatherType', null, 'Weather Type', 'data-updateable', 'yes');
        // weatherTypeInfoBody.setAttribute('data-updateable', 'yes');
        // weatherTypeInfoBody.textContent = 'Weather Type';
        leftInfoBody.appendChild(weatherTypeInfoBody);
    }
    
    function createSearchBox() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let searchBox = document.createElement('input');
        searchBox.setAttribute('id', 'locationSearch');
        searchBox.setAttribute('type', 'search');
        searchBox.setAttribute('placeholder', 'Search Location...');
        searchBox.addEventListener('keydown', (event) => {
            if(event.code === 'Enter' || event.code === 'NumpadEnter') {
                testGetWeather(searchBox.value);
            }
        });
        leftInfoBody.appendChild(searchBox);
    }

    function createErrorReporterBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let errorReporterBody = makeDiv('error', null, '', 'data-updateable', 'yes');
        // errorReporterBody.setAttribute('data-updateable', 'yes');
        // errorReporterBody.textContent = '';
        leftInfoBody.appendChild(errorReporterBody);
    }
    
    function createRightInfoSubBody(id, infoTypeText, infoValueText, url) {
        const rightInfoBody = document.getElementById('rightInfoBody');
        let subBodyMain = makeDiv(null, 'rightInfoSubBody');
        let img = makeImage(null, url);
        let subBodyInfo = makeDiv(null, 'subBodyInfo');
        let infoType = makeDiv(null, 'subBodyInfoType', infoTypeText);
        // infoType.textContent = infoTypeText;
        let infoValue = makeDiv(id, 'subBodyInfoValue', infoValueText, 'data-updateable', 'yes');
        // infoValue.setAttribute('data-updateable', 'yes');
        // infoValue.textContent = infoValueText;
    
        subBodyInfo.appendChild(infoType);
        subBodyInfo.appendChild(infoValue);
        subBodyMain.appendChild(img);
        subBodyMain.appendChild(subBodyInfo);
        rightInfoBody.appendChild(subBodyMain);
    }
    
    function populateRightInfoBody() {
        createRightInfoSubBody('feelsLike', 'Feels Like', 'value °C', feelsLike);
        createRightInfoSubBody('humidity', 'Humidity', 'value %', humidity);
        createRightInfoSubBody('chanceOfRain', 'Chance Of Rain', 'value %', chanceOfRain);
        createRightInfoSubBody('windSpeed', 'Wind Speed', 'value km/h', windSpeed);
        createRightInfoSubBody('pressure', 'Pressure', 'value mb', pressure);
    }

    function createSilderBody() {
        const body = document.querySelector('body');
        let sliderControlBody = makeDiv('sliderControlBody');
        body.appendChild(sliderControlBody);
    }

    function createSliderTicks() {
        let datalist = document.createElement('datalist');
        datalist.setAttribute('id', 'hourLabels');
        datalist.setAttribute('data-updateable', 'yes');
        for(let i=0; i<9; i++) {
            let option = document.createElement('option');
            // option.setAttribute('value', `${i}`); // not using the value attribute as we just want to display the label and the value is directly taken fron the slider 
            option.setAttribute('label', `${i}`); // label is here for me the updatedisplay info will update the label
            datalist.appendChild(option);
        }
        return datalist;
    }

    function createSlider() {
        const sliderControlBody = document.getElementById('sliderControlBody');
        let slider = document.createElement('input');
        slider.setAttribute('id', 'forecastSlider');
        slider.setAttribute('type', 'range');
        slider.setAttribute('min', '0');
        slider.setAttribute('max', '1439');
        slider.setAttribute('value', '0');
        slider.setAttribute('step', 'any');
        slider.addEventListener('input', sliderValueChanged);
        sliderControlBody.appendChild(slider);
        let ticks = createSliderTicks(24); // no need to add the ticks to the list attribute of the slider since then it need to be changed each time hourly or daily selected.
        // slider.setAttribute('list', ticks.getAttribute('i'))
        sliderControlBody.appendChild(ticks);
    }

    function sliderValueChanged() {
        updateControl({functionCode: 3});
    }

    function createForecastDayBody() {
        const body = document.querySelector('body');
        let forecastDayBody = makeDiv('forecastDayBody');
        body.appendChild(forecastDayBody);
    }

    function createForeCastDayCard(id) {
        const forecastDayBody = document.getElementById('forecastDayBody');
        let forecastDayCard = makeDiv(`${id}dayForecastCard`,'forecastDayCard');
        let forecastDayName = makeDiv(`${id}dayForecastDayName`, null, `Day ${id}`, 'data-updateable', 'yes');
        let forecastDayWeatherIcon = makeImage(`${id}dayForecastDayweatherIcon`); // this is make a image so dont pass the div function parameters
        let forecastDayWeatherType = makeDiv(`${id}dayForecastDayweatherIcon`, null, `${id} Weather Type`, 'data-updateable', 'yes');
        let forecastDayMaxTemp = makeDiv(`${id}dayForecastDayMaxTemp`, null, `${id} Max Temp #`, 'data-updateable', 'yes');
        let forecastDayMinTemp = makeDiv(`${id}dayForecastDayMinTemp`, null, `${id} Min Temp #`, 'data-updateable', 'yes');
        let forecastDayChanceOfRain = makeDiv(`${id}dayForecastDayChanceOfRain`, null, `${id} value %`, 'data-updateable', 'yes');
        let forecastDayWindSpeed = makeDiv(`${id}dayForecastDayChanceOfRain`, null, `${id} value kph`, 'data-updateable', 'yes');

        forecastDayCard.appendChild(forecastDayName);
        forecastDayCard.appendChild(forecastDayWeatherIcon);
        forecastDayCard.appendChild(forecastDayWeatherType);
        forecastDayCard.appendChild(forecastDayMaxTemp);
        forecastDayCard.appendChild(forecastDayMinTemp);
        forecastDayCard.appendChild(forecastDayChanceOfRain);
        forecastDayCard.appendChild(forecastDayWindSpeed);
        forecastDayBody.appendChild(forecastDayCard);
    }

    function createAllForecastDayCard() {
        // numberOfDayForecastDataAvailable depends on the number of day data that api is giving right now i have only 2 ahead day fore cast data so 2
        let numberOfDayForecastDataAvailable = 3;
        for(let i=0; i<numberOfDayForecastDataAvailable; i++) {
            createForeCastDayCard(i);
        }
    }

    return {
        1: createMainInfoBody(),
        2: createLeftRightInfoBody(),
        3: createLocationBody(),
        4: createDayDateBody(),
        5: createTimeBody(),
        6: createTempInfoBody(),
        7: createWeatherIcon(),
        8: createTempValueBody(),
        9: createTempUnitBody(),
        10: createTempUnits(),
        11: createWeatherTypeInfoBody(),
        12: createSearchBox(),
        13: createErrorReporterBody(),
        14: populateRightInfoBody(),
        15: createSilderBody(),
        16: createSlider(),
        17: createForecastDayBody(),
        18: createAllForecastDayCard(),
    };

})();

export default function makeDom() {
    for(let dom in DOM) {
        dom;
    }
}
