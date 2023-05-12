const apikey = "981aa4122d03c916998831ee05ed81ca";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function checkweather(city){
    const response = await fetch(apiurl + city +  `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h";


    


}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
})
