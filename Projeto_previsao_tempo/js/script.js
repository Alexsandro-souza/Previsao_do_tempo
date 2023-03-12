// Link com elementos HTML
const apiCountryURL = 'https://countryflagsapi.com/png/br';
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search');
const cityElement = document.getElementById('city');
const tempElement = document.querySelector("#temperature span");
const descElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const coutryElement = document.getElementById('country');
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const a = 'f6c2e375fff61af5ef7635faea1153c5';

// Funções
const getWeatherData = async (cidade) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${a}&lang=pt_br`
    const resposta = await fetch(apiWeatherURL);
    const data = await resposta.json();
    return data;
}
    



const showWeatherData = async (cidade) => {
    const data = await getWeatherData(cidade);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`); // Aqui deve ser mudado a URL da imagem com string dinamica
    coutryElement.setAttribute("src",`https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`

   /* if(data.code == 404){
        return alert ("Cara! Não achei essa cidade, sinto muito 😥");
        
    }*/


}

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); //  Empede que o evento padrão ocorra, no caso traria todo o form
    const cidade = cityInput.value;
    showWeatherData(cidade);
})
