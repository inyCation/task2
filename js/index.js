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
      
    document.getElementById("time").innerText = hh + ":" + mm + ":" + ss + " " + session;

    let t = setTimeout(()=>{
        currentTime() 
    }, 1000);
}

function currentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    
    document.getElementById("date").innerText = `${day}-${month}-${year}`;
    
    const outputElements = document.getElementsByClassName('date');
    
    const currentDateObj = new Date();
    for (let i = 0; i < outputElements.length; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDateObj.getDate() + i + 1);
      
      outputElements[i].innerHTML = nextDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }
}
  
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const daily_apiurl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const apikey = "981aa4122d03c916998831ee05ed81ca";
const searchbox = document.querySelector(".input_area input");
const searchbtn = document.querySelector(".input_area button");


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

        let temp = document.getElementsByClassName('temp'); 
        let humidity = document.getElementsByClassName('humidity'); 
        let weather_detail = document.getElementsByClassName('weather_detail'); 
        for (let i = 1; i <= 5; i++) {
            let index = i;

            temp[i].innerHTML = Math.round(daily_data.list[index].main.temp) + "°C";
            humidity[i].innerHTML = daily_data.list[index].main.humidity + "%";
            weather_detail[i].innerHTML = daily_data.list[index].weather[0].main;
        }
    }    
}
searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
    checkDaily(searchbox.value);
})
searchbox.addEventListener("keyup", ()=>{
    if (event.keyCode === 13) {
        checkweather(searchbox.value);
        checkDaily(searchbox.value);
    }
})

currentTime();
currentDate();