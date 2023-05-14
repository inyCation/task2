function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("time").innerText = time; 
    
    let t = setTimeout(()=>{
        currentTime() 
    }, 1000);
}

function currentDate(){
    let date = new Date(); 
    let day = date.getDate();
    
    var month = date.toLocaleString('default', { month: 'short' });
    
    let year = date.getFullYear();
    
    let currentDate = `${day}-${month}-${year}`;
    document.getElementById("date").innerText = currentDate; 

}

const apikey = "981aa4122d03c916998831ee05ed81ca";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".input_area input");
const searchbtn = document.querySelector(".input_area button");

async function checkweather(city){

    const response = await fetch(apiurl + city +  `&appid=${apikey}`);
    
    if(response.status==404){
        alert("PLEASE ENTER A VALID CITY: ");
    }
    else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".city_lc").innerHTML = 
        "Local Time ("+data.name+")";


        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".weather").innerHTML = data.weather[0].main;

        document.querySelector(".weather_detail").innerHTML = "(It's "+data.weather[0].description +")";
        document.querySelector(".humidity-detail").innerHTML = data.main.humidity + "%";

        document.querySelector(".wind_speed_details").innerHTML = data.wind.speed+ " km/h";
        
        document.querySelector(".wind_speed_details").innerHTML = data.wind.speed+ " km/h";
        


        // const weathericon = document.querySelector(".weather-icon");
    
        // if(data.weather[0].main=="Rain"){
        //     weathericon.innerHTML = "rainy";
        // }
        // if(data.weather[0].main=="Clear"){
        //     weathericon.innerHTML = "clear_day";
        // }
        // if(data.weather[0].main=="Clouds"){
        //     weathericon.innerHTML = "cloud";
        // }
        // if(data.weather[0].main=="Thunderstorm"){
        //     weathericon.innerHTML = "thunderstorm";
        // }
        // if(data.weather[0].main=="Drizzle"){
        //     weathericon.innerHTML = "foggy";
        // }
        // if(data.weather[0].main=="Snow"){
        //     weathericon.innerHTML = "cloudy_snowing";
        // }
    }
    
}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
})





currentTime();
currentDate();