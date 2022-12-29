import testGetWeather from "./getWeatherInfo.js";

import imgUrl from "../assets/images/placeholder.png";

const DOM = (function() {
    function makeDiv(id = null, className = null) {
        let div = document.createElement('div');
        if(id) {
            div.setAttribute('id', id);
        }
        if(className) {
            div.setAttribute('class', className);
        }
        return div;
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
        let locationBody = makeDiv('location');
        locationBody.setAttribute('data-updateable', 'yes');
        locationBody.textContent = 'Location';
        leftInfoBody.appendChild(locationBody);
    }
    
    function createDayDateBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let dayDateBody = makeDiv('dayDate');
        dayDateBody.setAttribute('data-updateable', 'yes');
        dayDateBody.textContent = 'Day, Date';
        leftInfoBody.appendChild(dayDateBody);
    }
    
    function createTimeBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let timeBody = makeDiv('time');
        timeBody.setAttribute('data-updateable', 'yes');
        timeBody.textContent = 'Time';
        leftInfoBody.appendChild(timeBody);
    }
    
    function createTempInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let tempInfoBody = makeDiv('tempInfoBody');
        leftInfoBody.appendChild(tempInfoBody);
    }
    
    function createWeatherIcon() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let weatherIcon = new Image();
        weatherIcon.src = imgUrl;
        weatherIcon.setAttribute('id', 'weatherIcon');
        weatherIcon.setAttribute('data-updateable', 'yes');
        tempInfoBody.appendChild(weatherIcon);
    }
    
    function createTempValueBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempValueBody = makeDiv('temperature');
        tempValueBody.setAttribute('data-updateable', 'yes');
        tempValueBody.textContent = '#';
        tempInfoBody.appendChild(tempValueBody);
    }
    
    function createTempUnitBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempUnitBody = makeDiv('tempUnitBody');
        tempInfoBody.appendChild(tempUnitBody);
    }
    
    function createTempUnits() {
        const tempUnitBody = document.getElementById('tempUnitBody');
        let celciusBody = makeDiv('celcius');
        let farenheitBody = makeDiv('farenheit');
        celciusBody.addEventListener('click', tempUnitsClicked);
        farenheitBody.addEventListener('click', tempUnitsClicked);
        celciusBody.textContent = '°C';
        farenheitBody.textContent = '°F';
        tempUnitBody.appendChild(celciusBody);
        tempUnitBody.appendChild(farenheitBody);
    }
    
    function tempUnitsClicked(event) {
        console.log(event.target.textContent);
        // handle the unit change
    }
    
    function createWeatherTypeInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let weatherTypeInfoBody = makeDiv('weatherType');
        weatherTypeInfoBody.setAttribute('data-updateable', 'yes');
        weatherTypeInfoBody.textContent = 'Weather Type';
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
        let errorReporterBody = makeDiv('error');
        errorReporterBody.setAttribute('data-updateable', 'yes');
        errorReporterBody.textContent = 'error';
        leftInfoBody.appendChild(errorReporterBody);
    }
    
    function createRightInfoSubBody(id, infoTypeText, infoValueText, url) {
        const rightInfoBody = document.getElementById('rightInfoBody');
        let subBodyMain = makeDiv(null, 'rightInfoSubBody');
        let img = new Image();
        img.src = url;
        let subBodyInfo = makeDiv(null, 'subBodyInfo');
        let infoType = makeDiv(null, 'subBodyInfoType');
        infoType.textContent = infoTypeText;
        let infoValue = makeDiv(id, 'subBodyInfoValue');
        infoValue.setAttribute('data-updateable', 'yes');
        infoValue.textContent = infoValueText;
    
        subBodyInfo.appendChild(infoType);
        subBodyInfo.appendChild(infoValue);
        subBodyMain.appendChild(img);
        subBodyMain.appendChild(subBodyInfo);
        rightInfoBody.appendChild(subBodyMain);
    }
    
    function populateRightInfoBody() {
        createRightInfoSubBody('feelsLike', 'Feels Like', 'value °C', imgUrl);
        createRightInfoSubBody('humidity', 'Humidity', 'value %', imgUrl);
        createRightInfoSubBody('chanceOfRain', 'Chance Of Rain', 'value %', imgUrl);
        createRightInfoSubBody('windSpeed', 'Wind Speed', 'value km/h', imgUrl);
        // createRightInfoSubBody('pressure', 'Pressure', '1014');
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
        14: populateRightInfoBody()
    };

})();

export default function makeDom() {
    for(let dom in DOM) {
        dom;
    }
}



