var submitBtn = document.querySelector('#submitBtn')


function handleSearchForm() {
    

    var searchEl = document.querySelector('#search-input').value;
    console.log(searchEl);
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
        })

}

function getCoordinates (place) {
    var geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + place + "&limit=1&appid=d4c1369a9ccf7f44a319092d1e4c64b7"
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
        
       
}

submitBtn.addEventListener('click', handleSearchForm);