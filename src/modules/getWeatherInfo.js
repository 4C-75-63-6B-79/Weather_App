import weatherSet_Get from "./process_store_values.js";
import updateControl from "./updateInfo.js";

export default async function getWeatherInfo(locationName) {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=053785ea687c447299e70926222812&q=${locationName}&days=1&aqi=no&alerts=no`, {mode: 'cors'});
        // console.log(response.status);
        // console.log(response.ok);
        if(response.status == '200') {
            // console.log(response);
            let data = await response.json();
            // console.log(data);
            weatherSet_Get('set', data);
            updateControl(1);
        } else if(!response.ok) {
            console.log('bad request');
        }
    } catch(err) {
        console.log('Error Happened');  
        console.log(err);
    }

} 
