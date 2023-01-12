var submitBtn = document.querySelector('#submitBtn');
var weatherNow = document.querySelector('#city');
var today = dayjs();
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var temp1 = document.querySelector('#day1temp');
var wind1 = document.querySelector('#day1wind');
var humidity1 = document.querySelector('#day1humidity');
var temp2 = document.querySelector('#day2temp');
var wind2 = document.querySelector('#day2wind');
var humidity2 = document.querySelector('#day2humidity');
var temp3 = document.querySelector('#day3temp');
var wind3 = document.querySelector('#day3wind');
var humidity3 = document.querySelector('#day3humidity');
var temp4 = document.querySelector('#day4temp');
var wind4 = document.querySelector('#day4wind');
var humidity4 = document.querySelector('#day4humidity');
var temp5 = document.querySelector('#day5temp');
var wind5 = document.querySelector('#day5wind');
var humidity5 = document.querySelector('#day5humidity');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');
var day5 = document.querySelector('#day5');
var nextday1 = today.add(1,'day');
var nextday2 = today.add(2,'day');
var nextday3 = today.add(3,'day');
var nextday4 = today.add(4,'day');
var nextday5 = today.add(5,'day');
var futureFore = document.querySelector('#future-forecast');
var pastSearch = document.querySelector('#past-search');
futureFore.style.display = 'none'
function handleSearchForm() {
    

    var searchEl = document.querySelector('#search-input').value;
    console.log(searchEl);
    localStorage.setItem('place', searchEl);
getCoordinates(searchEl);
}

function getWeather(lat,lon){
    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon="+ lon + "&appid=f530182cb4174a206705fd0503ae3852"

    fetch(apiURL)
        .then(function(response){
            if(response.ok){
                console.log(response);
                return response.json();
            } else {
                console.error("You messed up AGAIN");
            }
        })
        .then(function(weather){
            console.log(weather);
            console.log(weather.list[0].main.temp);
            var farTemp = weather.list[0].main.temp *(9/5) - 459.67;
            var windNum = weather.list[0].wind.speed;
            var humidityNum = weather.list[0].main.humidity;
            var farTemp1 = weather.list[2].main.temp *(9/5) - 459.67;
            var windNum1 = weather.list[2].wind.speed;
            var humidityNum1 = weather.list[2].main.humidity;
            var farTemp2 = weather.list[9].main.temp *(9/5) - 459.67;
            var windNum2 = weather.list[9].wind.speed;
            var humidityNum2 = weather.list[9].main.humidity;
            var farTemp3 = weather.list[17].main.temp *(9/5) - 459.67;
            var windNum3 = weather.list[17].wind.speed;
            var humidityNum3 = weather.list[17].main.humidity;
            var farTemp4 = weather.list[25].main.temp *(9/5) - 459.67;
            var windNum4 = weather.list[25].wind.speed;
            var humidityNum4 = weather.list[25].main.humidity;
            var farTemp5 = weather.list[33].main.temp *(9/5) - 459.67;
            var windNum5 = weather.list[33].wind.speed;
            var humidityNum5 = weather.list[33].main.humidity;
            farTemp = Math.trunc(farTemp);
            console.log(farTemp);
            weatherNow.textContent =  weather.city.name + " on " + today.format("MMM D, YYYY");
            temp.textContent = "Temp: " + farTemp + "°F";
            wind.textContent = "Wind Speeds: " + windNum + " MPH";
            humidity.textContent = "Humidity of: " + humidityNum + " %";
            temp1.textContent = "Temp: " + Math.trunc(farTemp1) + "°F";
            wind1.textContent = "Wind Speeds: " + windNum1 + " MPH";
            humidity1.textContent = "Humidity of: " + humidityNum1 + " %";
            temp2.textContent = "Temp: " + Math.trunc(farTemp2) + "°F";
            wind2.textContent = "Wind Speeds: " + windNum2 + " MPH";
            humidity2.textContent = "Humidity of: " + humidityNum2 + " %";
            temp3.textContent = "Temp: " + Math.trunc(farTemp3) + "°F";
            wind3.textContent = "Wind Speeds: " + windNum3 + " MPH";
            humidity3.textContent = "Humidity of: " + humidityNum3 + " %";
            temp4.textContent = "Temp: " + Math.trunc(farTemp4) + "°F";
            wind4.textContent = "Wind Speeds: " + windNum4 + " MPH";
            humidity4.textContent = "Humidity of: " + humidityNum4 + " %";
            temp5.textContent = "Temp: " + Math.trunc(farTemp5) + "°F";
            wind5.textContent = "Wind Speeds: " + windNum5 + " MPH";
            humidity5.textContent = "Humidity of: " + humidityNum5 + " %";
            day1.textContent = nextday1.format("MMM D, YYYY")
            day2.textContent = nextday2.format("MMM D, YYYY")
            day3.textContent = nextday3.format("MMM D, YYYY")
            day4.textContent = nextday4.format("MMM D, YYYY")
            day5.textContent = nextday5.format("MMM D, YYYY")
            console.log(weather.list[0].weather[0].icon)
            futureFore.style.display = 'block'
        })

}

function getCoordinates (place) {
    var geoAPI = "https://api.openweathermap.org/geo/1.0/direct?q=" + place + "&limit=1&appid=d4c1369a9ccf7f44a319092d1e4c64b7"
    console.log(geoAPI);

    fetch(geoAPI)
        .then(function (response){
            if (response.ok){
                console.log(response);
                return response.json();
                
            } else {
                console.error("you messed up")
            }
         })
        .then(function(latRes){
                console.log(latRes)
                console.log(latRes[0])
                console.log(latRes[0].lat)
                var latitude = latRes[0].lat;
                var longitude = latRes[0].lon;
                console.log(latitude);
                console.log(longitude);
                getWeather(latitude,longitude)
            })
        var storedPlace = localStorage.getItem('place')
        console.log(storedPlace);
        // for (i=0;i<storedPlace.length; i++){
        //     var newPlace = document.createElement('p');
        //     newPlace.textContent = storedPlace[i];
        //     pastSearch.appendChild(newPlace);
        // }
       pastSearch.textContent = storedPlace;
}
var storedPlace = localStorage.getItem('place')
        console.log(storedPlace);
        // for (i=0;i<storedPlace.length; i++){
        //     var newPlace = document.createElement('p');
        //     newPlace.textContent = storedPlace[i];
        //     pastSearch.appendChild(newPlace);
        // }
       pastSearch.textContent = storedPlace;
submitBtn.addEventListener('click', handleSearchForm);