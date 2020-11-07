
function success(pos) {

    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;

    fetch(url)
        .then((response) => {
            return response.json();
    })
    .then((data) => {

        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp + "°C";
        document.querySelector('#main').textContent = data.weather[0].main;
        document.querySelector('#desc').textContent = data.weather[0].description;

        document.querySelector('#weather').classList.remove("hidden");
        console.log('data :', data);
    });

    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}