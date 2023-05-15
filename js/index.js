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
var currentDate;
var day;
var month;
function currentDate(){
    let date = new Date(); 
    day = date.getDate();
    
    month = date.toLocaleString('default', { month: 'short' });
    
    let year = date.getFullYear();
    
    currentDate = `${day}-${month}-${year}`;
    document.getElementById("date").innerText = currentDate; 

    document.querySelector("#date-1").innerHTML =  (day+1+" "+month);
    document.querySelector("#date-2").innerHTML =  (day+2+" "+month);
    document.querySelector("#date-3").innerHTML =  (day+3+" "+month);
    document.querySelector("#date-4").innerHTML =  (day+4+" "+month);
    document.querySelector("#date-5").innerHTML =  (day+5+" "+month);


}

const apikey = "981aa4122d03c916998831ee05ed81ca";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".input_area input");
const searchbtn = document.querySelector(".input_area button");

const daily_apiurl = "http://api.openweathermap.org/data/2.5/forecast?units=metric&q=";


async function checkweather(city){

    const response = await fetch(apiurl + city +  `&appid=${apikey}`);
    const response_daily = await fetch(daily_apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        alert("PLEASE ENTER A VALID CITY: ");
    }
    else{
        let data = await response.json();
        
        
        document.querySelector(".city").innerHTML = data.name;
        // document.querySelector(".city_lc").innerHTML = "Local Time ("+data.name+")";


        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        

        document.querySelector(".weather_detail").innerHTML = "(It's "+data.weather[0].description +")";
        document.querySelector(".humidity-detail").innerHTML = data.main.humidity + "%";
        
        document.querySelector(".wind_speed_details").innerHTML = data.wind.speed+ " km/h";
        
        document.querySelector(".wind_speed_details").innerHTML = data.wind.speed+ " km/h";
        
        let daily_data = await response_daily.json();
        
        console.log(daily_data.city.name);

        document.querySelector(".temp-1").innerHTML = Math.round(daily_data.list[1].main.temp) +"°C";

        document.querySelector(".humidity-1").innerHTML = daily_data.list[1].main.humidity + "%";

        document.querySelector(".weather_detail-1").innerHTML = daily_data.list[1].weather[0].main;

        /* second */

        document.querySelector(".temp-2").innerHTML = Math.round(daily_data.list[2].main.temp) +"°C";

        document.querySelector(".humidity-2").innerHTML = daily_data.list[2].main.humidity + "%";

        document.querySelector(".weather_detail-2").innerHTML = daily_data.list[2].weather[0].main;

        /* thrid */

        document.querySelector(".temp-3").innerHTML = Math.round(daily_data.list[3].main.temp) +"°C";

        document.querySelector(".humidity-3").innerHTML = daily_data.list[3].main.humidity + "%";

        document.querySelector(".weather_detail-3").innerHTML = daily_data.list[3].weather[0].main;

        /* four */

        document.querySelector(".temp-4").innerHTML = Math.round(daily_data.list[4].main.temp) +"°C";

        document.querySelector(".humidity-4").innerHTML = daily_data.list[4].main.humidity + "%";

        document.querySelector(".weather_detail-4").innerHTML = daily_data.list[4].weather[0].main;

        /* five */

        document.querySelector(".temp-5").innerHTML = Math.round(daily_data.list[5].main.temp) +"°C";

        document.querySelector(".humidity-5").innerHTML = daily_data.list[5].main.humidity + "%";

        document.querySelector(".weather_detail-5").innerHTML = daily_data.list[5].weather[0].main;








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
searchbox.addEventListener("ente")

currentTime();
currentDate();