import testGetWeather from "./getInfo.js";

function makeDiv(id) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
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
    weatherIcon.src = '#';
    weatherIcon.setAttribute('id', 'weatherIcon');
    weatherIcon.setAttribute('data-updateable', 'yes');
    tempInfoBody.appendChild(weatherIcon);
}

function createTempValueBody() {
    const tempInfoBody = document.getElementById('tempInfoBody');
    let tempValueBody = makeDiv('temperature');
    tempValueBody.setAttribute('data-updateable', 'yes');
    tempValueBody.textContent = '20';
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
    celciusBody.textContent = 'C';
    farenheitBody.textContent = 'F';
    tempUnitBody.appendChild(celciusBody);
    tempUnitBody.appendChild(farenheitBody);
}

function tempUnitsClicked(event) {
    console.log(event.target.textContent);
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
    searchBox.setAttribute('type', 'text');
    searchBox.addEventListener('keydown', (event) => {
        if(event.code === 'Enter') {
            // get the info of the the location mentioned
        }
    })
}