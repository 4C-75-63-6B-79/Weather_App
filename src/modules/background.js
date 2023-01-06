import weatherSet_Get from "./process_store_values.js";

const updateBackgroundColor = (function() {

    // transition period is basically 30 mins before and after sunrise and sunset.
    // when ever the current time is in this range we use these hex value to change the color of the background
    // all the transition array colors are from night to sunrise to noon to sunset to night
    const nightColor = '#2e3678';
    const dayColor = '#31bdff';
    const transitionFormNightToSunrise = ['#2e3678', '#353874', '#3c3970', '#443b6c', '#4b3d67', '#523e63', '#59405f', '#60425b', '#684357', '#6f4553', '#76474f', '#7d484a', '#844a46', '#8c4c42', '#934d3e', '#9a4f3a', '#a15036', '#a95232', '#b0542e', '#b75529', '#be5725', '#c55921', '#cd5a1d', '#d45c19', '#db5e15', '#e25f11', '#e9610c', '#f16308', '#f86404', '#ff6600'];
    const transitionFromSunriseToNoon = ['#ff6600', '#f86909', '#f16c12', '#ea6f1a', '#e37223', '#db752c', '#d47835', '#cd7b3e', '#c67e46', '#bf814f', '#b88458', '#b18761', '#aa8a6a', '#a38d72', '#9c907b', '#949384', '#8d968d', '#869995', '#7f9c9e', '#789fa7', '#71a2b0', '#6aa5b9', '#63a8c1', '#5cabca', '#55aed3', '#4db1dc', '#46b4e5', '#3fb7ed', '#38baf6', '#31bdff'];
    const transitionFromNoonToSunset = ['#31bdff', '#38baf6', '#3fb7ed', '#46b3e5', '#4db0dc', '#55add3', '#5caaca', '#63a7c1', '#6aa4b9', '#71a0b0', '#789da7', '#7f9a9e', '#869795', '#8d948d', '#949184', '#9c8d7b', '#a38a72', '#aa876a', '#b18461', '#b88158', '#bf7e4f', '#c67a46', '#cd773e', '#d47435', '#db712c', '#e36e23', '#ea6b1a', '#f16712', '#f86409', '#ff6100'];
    const transitionFromSunsetToNight = ['#ff6100', '#f86004', '#f15e08', '#e95d0c', '#e25b11', '#db5a15', '#d45819', '#cd571d', '#c55521', '#be5425', '#b75229', '#b0512e', '#a94f32', '#a14e36', '#9a4c3a', '#934b3e', '#8c4942', '#844846', '#7d464a', '#76454f', '#6f4353', '#684257', '#60405b', '#593f5f', '#523d63', '#4b3c67', '#443a6c', '#3c3970', '#353774', '#2e3678'];

    function sliderValueChanged() {
        // console.log();
        // processSliderValue();
        // getCurrentTime();
        // getCurrentDayAndTime();
        // getTimeToSunriseAndSunset();
        updateBackgroundColorVariable();
    }

    function updateBackgroundColorVariable() {
        let color = getBackgroundColor();
        console.log(color);
        document.documentElement.style.setProperty('--background-color', color);
    }

    function getCurrentDayAndTime() {
        let activeForeCastDay = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        let currentTime;
        if(activeForeCastDay === 0) {
            currentTime = getCurrentTimeOfLocationPlusSliderValue();
            if(Number(currentTime.hrs) <= 23 && Number(currentTime.min) <= 59) {
                // console.log(activeForeCastDay, currentTime);
                return {
                    activeDay: activeForeCastDay, 
                    currentTime
                };
            } else {
                currentTime.hrs = Number(currentTime.hrs) % 24;
                activeForeCastDay = 1;
                // console.log(activeForeCastDay, currentTime);
                return {
                    activeDay: activeForeCastDay, 
                    currentTime
                };
            }
        } else {
            currentTime = processSliderValue();
            // console.log(activeForeCastDay, currentTime);
            return {
                activeDay: activeForeCastDay, 
                currentTime
            };
        }
    }
    
    function processSliderValue() {
        let sliderValue = document.getElementById('forecastSlider').value.split('.')[0];
        let hrs = Math.floor(sliderValue / 60);
        let min = sliderValue % 60;
        min = min < 10 ? '0'+min : min;
        // console.log('Slider value time ' + hrs + ":" + min);
        return {
            hrs,
            min
        };
    }

    function getCurrentTimeOfLocationPlusSliderValue() {
        let currentTime  = weatherSet_Get('getCurrent', 'time');
        let hrs = currentTime.split(':')[0];
        let min = 0;  // not taking the current time mins because we are adding the slider value mins to the current time which will automatically make it the current min as the mins of slider value are already starting
        let sliderValueTime = processSliderValue();
        hrs = Number(hrs) + Number(sliderValueTime.hrs);
        min = Number(min) + Number(sliderValueTime.min);
        if(min > 59) {
            min = min % 60;
            hrs += 1;
        }
        min = min < 10 ? '0'+ min : min;
        // console.log(hrs+ ":"+ min);
        return {
            hrs,
            min
        }
    }

    function convertTimeTo24HrClock(time) {
        let hrs, min;
        if(time.split(' ')[1] === 'AM') {
            time = time.replace(' AM', '');
            hrs = time.split(':')[0];
            min = time.split(':')[1];
            hrs = hrs === '12' ? '00' : hrs;
        } else if(time.split(' ')[1] === 'PM') {
            time = time.replace(' PM', '');
            hrs = time.split(':')[0];
            min = time.split(':')[1];
            hrs = hrs === '12' ? hrs : Number(hrs) + 12;
        }
        return hrs + ":" + min;
    }

    function timeSubtract(currentTime1, sunsetSunriseTime) {
        currentTime1 = Number(currentTime1.split(':')[0]) * 60 + Number(currentTime1.split(':')[1]);
        sunsetSunriseTime = Number(sunsetSunriseTime.split(':')[0]) * 60 + Number(sunsetSunriseTime.split(':')[1]);
        return sunsetSunriseTime - currentTime1;
    }

    function getBackgroundColor() {
        const object = getTimeToSunriseAndSunset();
        // console.log(object);
        const timeToSunrise = object.timeToSunrise;
        const timeToSunset = object.timeToSunset;
        console.log(timeToSunrise, timeToSunset);

        if(timeToSunrise > -1 && timeToSunset > -1) {
            console.log('Before Sunrise and after midnight');
            if(timeToSunrise < 30) {
                console.log('transition period from night to sunrise');
                // we are doing 29 - sunrise time because at index 0 it is night hex value so we want the hex value of sunrise when time to sunrise is 0 so we are doing this.
                return transitionFormNightToSunrise[29 - timeToSunrise]; 
            } else {
                return nightColor;
            }
        } else if(timeToSunrise < 0 && timeToSunset > -1) {
            console.log('Between Sunrise and Sunset');
            if(timeToSunrise < 0 && timeToSunrise >= -30) {
                console.log('transition period from sunrise to noon');
                // we are multiplying with -1 here since time to sunrise is negative and subrating -1 since index starts from 0 to 29
                return transitionFromSunriseToNoon[(timeToSunrise) * (-1) - 1]
            } else if(timeToSunset < 30) {
                console.log('transition period from noon to sunset');
                // the reason for 29 - time is same as the transition from night to sunrise as the 0 index is actually noon hex value and 29 is sunset. So to get correct value 
                return transitionFromNoonToSunset[29 - timeToSunset];
            } else {
                return dayColor;
            }
        } else if(timeToSunrise < 0 && timeToSunset < 0) {
            console.log('After sunset before midnight');
            if(timeToSunset < 0 && timeToSunset >= -30) {
                console.log('transition period from sunset to night');
                // we are multiplying with -1 here since time to sunset is negative and subrating -1 since index starts from 0 to 29
                return transitionFromSunsetToNight[(timeToSunset) * (-1) -1];
            } else {
                return nightColor;
            }
        }
    }
    
    function getTimeToSunriseAndSunset() {
        let currentDayAndTime = getCurrentDayAndTime();
        let currentTime = currentDayAndTime.currentTime.hrs + ':' + currentDayAndTime.currentTime.min;
        // console.log(currentDayAndTime, currentTime);
        let astroData = weatherSet_Get('getAstro', {dayIndex: currentDayAndTime.activeDay});
        let astroData24hrFormat = Object.assign({}, astroData);
        for(let attributeName in astroData24hrFormat) {
            astroData24hrFormat[attributeName] = convertTimeTo24HrClock(astroData24hrFormat[attributeName]);
        }
        // console.log(astroData24hrFormat);
        let timeToSunrise = timeSubtract(currentTime, astroData24hrFormat['sunrise']);
        let timeToSunset = timeSubtract(currentTime, astroData24hrFormat['sunset']);
        // console.log(timeToSunrise, timeToSunset);
        return {
            timeToSunrise,
            timeToSunset
        }
    }

    return {
        sliderValueChanged,
    }

})();


export default function updateBackground() {
    updateBackgroundColor.sliderValueChanged();
}

// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

/* 
import pyperclip as clip
color = clip.paste()
color = color.split('\r\n')
*/
