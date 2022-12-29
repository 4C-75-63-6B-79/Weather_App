export default async function testGetWeather(locationName) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=053785ea687c447299e70926222812&q=${locationName}&aqi=no`, {mode: 'cors'});
        console.log(response.status);
        console.log(response.ok);
        if(response.status == '200') {
            console.log(response);
            let data = await response.json();
            console.log(data);
            let img = new Image();
            img.src = data.current.condition.icon;
            console.log(img.src);
        } else if(!response.ok) {
            console.log('bad request');
        }
    } catch(err) {
        console.log('Error Happened');  
    }

} 