export default async function testGetWeather(locationName) {
    let response;
    try {
        response = await fetch(`https://api.weatherapi.com/v1/current.json?key=053785ea687c447299e70926222812&q=${locationName}&aqi=no`, {mode: 'cors'});
        console.log(response.status);
        if(response.status == '200') {
            console.log(response);
            let data = await response.json();
            console.log(data);
            let img = new Image();
            img.src = data.current.condition.icon;
            console.log(img.src);
        }
    } catch(err) {
        console.log(err);
    }

} 