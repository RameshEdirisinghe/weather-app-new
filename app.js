const apiKey ="b5177070d5f70305691d02a4d8fcf3ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




function search(){

    Geocode();
    let city = document.getElementById("searchBar").value;
    document.getElementById("wrapper").style.display="block";
    fetch(apiUrl + city + `&appid=${apiKey}`)
    .then(response => response.json())
    .then(result=>{
        console.log(result);
        document.getElementById("wind").innerHTML=result.wind.speed +"km/h";
        document.getElementById("Humidity").innerHTML=result.main.humidity + "%";
        document.getElementById("Sea_Level").innerHTML=result.main.sea_level + " ft";
        document.getElementById("temperature").innerHTML=Math.round(result.main.temp) + "°c";
        
        
        if(result.weather[0].main == "Clouds"){
            document.getElementById("weatherImage").innerHTML=`<img src="assets/clouds.png" alt="product: ps5 controller image">`;
        }
        else if(result.weather[0].main == "Clear"){
            document.getElementById("weatherImage").innerHTML=`<img src="assets/clear.png" alt="product: ps5 controller image">`;
        }
        else if(result.weather[0].main == "Rain"){
            document.getElementById("weatherImage").innerHTML=`<img src="assets/rain.png" alt="product: ps5 controller image">`;
        }
        else if(result.weather[0].main == "Drizzle"){
            document.getElementById("weatherImage").innerHTML=`<img src="assets/drizzle.png" alt="product: ps5 controller image">`;
        }
        else if(result.weather[0].main == "Mist"){
            document.getElementById("weatherImage").innerHTML=`<img src="assets/mist.png" alt="product: ps5 controller image">`;
        }
    })




}

function Geocode(){
    let city = document.getElementById("searchBar").value;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b5177070d5f70305691d02a4d8fcf3ff`)
    .then(response => response.json())
    .then(result=>{
        console.log(result);
        document.getElementById("countryP").innerHTML=`<p>${result[0].country}</p>`
        document.getElementById("stateP").innerHTML=`<p>${result[0].state}</p>`
        document.getElementById("gpsP").innerHTML=`<p>lat : ${result[0].lat}</p>
        <p>lon : ${result[0].lon}</p>`


        
    })

}