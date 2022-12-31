import testGetWeather from "./getWeatherInfo.js";
import updateControl from "./updateInfo.js";

import imgUrl from "../assets/images/placeholder.png";
import feelsLike from "../assets/images/feelsLike.svg";
import humidity from "../assets/images/humidity.svg";
import chanceOfRain from "../assets/images/chanceOfRain.svg";
import windSpeed from "../assets/images/windSpeed.svg";
import pressure from "../assets/images/pressure.svg";

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
        celciusBody.setAttribute('class', 'activeUnit');
        farenheitBody.addEventListener('click', tempUnitsClicked);
        celciusBody.textContent = '°C';
        farenheitBody.textContent = '°F';
        tempUnitBody.appendChild(celciusBody);
        tempUnitBody.appendChild(farenheitBody);
    }
    
    function tempUnitsClicked(event) {
        let unitClicked = event.target;
        let activeUnit = document.querySelector('.activeUnit');
        if(!unitClicked.classList.contains('activeUnit')) {
            activeUnit.classList.remove('activeUnit');
            unitClicked.classList.add('activeUnit');
            updateControl(2);
        }
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
        errorReporterBody.textContent = '';
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

    // function createSliderTypeControlBody() {
    //     const slider_sliderControlBody = document.getElementById('sliderAndSliderTypeControlBody');
    //     let sliderTypeControlBody = makeDiv('sliderTypeControlBody');
    //     slider_sliderControlBody.appendChild(sliderTypeControlBody);
    // }

    // function createSliderTypeControls() {
    //     const sliderTypeControlBody = document.getElementById('sliderTypeControlBody');
    //     let dailySliderTypeControl = makeDiv('daily','sliderTypeControl');
    //     let hourlySliderTypeControl = makeDiv('hourly', 'sliderTypeControl');
    //     dailySliderTypeControl.addEventListener('click', sliderTypeControlClicked);
    //     hourlySliderTypeControl.addEventListener('click', sliderTypeControlClicked);
    //     hourlySliderTypeControl.classList.add('activeSliderTypeControl');
    //     dailySliderTypeControl.textContent = 'Daily';
    //     hourlySliderTypeControl.textContent = 'Hourly';
    //     sliderTypeControlBody.appendChild(hourlySliderTypeControl);
    //     sliderTypeControlBody.appendChild(dailySliderTypeControl);
    // }

    // function sliderTypeControlClicked(event) {
    //     // console.log(event.target);
    //     changeActiveSliderTypeControl(event.target);
    //     changeSliderRange();
    // }

    // function changeActiveSliderTypeControl(targetElement) {
    //     const activeSliderTypeControl = document.querySelector('.activeSliderTypeControl');
    //     if(!targetElement.classList.contains('activeSliderTypeControl')) {
    //         activeSliderTypeControl.classList.remove('activeSliderTypeControl');
    //         targetElement.classList.add('activeSliderTypeControl');
    //     }
    // }  
    
    // function changeSliderRange() {
    //     const activeSliderTypeControl = document.querySelector('.activeSliderTypeControl');
    //     const forecastSlider = document.getElementById('forecastSlider');
    //     forecastSlider.value = 0;
    //     if(activeSliderTypeControl.getAttribute('id') === 'hourly') {
    //         forecastSlider.setAttribute('max', '23');
    //     } else if(activeSliderTypeControl.getAttribute('id') === 'daily') {
    //         forecastSlider.setAttribute('max', '7');
    //     }
    // }

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
        // let sliderValue = event.target.value.split('.')[0];
        // // console.log(sliderValue);
        // let hrs = Math.floor(sliderValue / 60);
        // let min = sliderValue % 60;
        // min = min < 10 ? '0'+min : min;
        // console.log(hrs+ ":"+ min);
        // // update the display info on the hourly basis
        updateControl(3);
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
        // 16: createSliderTypeControlBody(),
        // 17: createSliderTypeControls(),
        18: createSlider(),
    };

})();

export default function makeDom() {
    for(let dom in DOM) {
        dom;
    }
}



