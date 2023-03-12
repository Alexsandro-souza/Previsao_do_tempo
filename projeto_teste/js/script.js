const a = 'f6c2e375fff61af5ef7635faea1153c5'
const input = document.querySelector("input");
const botao = document.querySelector("button");
const imagem = document.querySelector("img");
const cidade = document.querySelector("cidade");
const grau = document.querySelector("grau");
const conteudo = document.querySelector(".conteudo");

botao.addEventListener("click",() => {
    if(!input.value) return;
    capturarDadoAPI();
});


async function capturarDadoAPI(){
    let Api = 'https://api.openweathermap.org/data/2.5/weather?q=${petrolina}&appid=${a}' //Para definir uma string dinamica usa-se ``

    try{
        await fetch(Api)
        .then((res)=> res.json())
        .then((data)=>{
            if(data?.cod && data.cod === "404"){
                return alert ("Cara! Não achei essa cidade, sinto muito 😥");
            }
            loadWeatherInfo(data);
        })

    } catch (error){
        alert(error);
    }
};

function loadWeatherInfo(data){
    cidade.innerHTML = '${data.name}, ${data.sys.country}';
    grau.innerHTML = 'Temperatura: ${Math.floor(data.main.temp)}° c';
    imagem.src = 'http://openweathermap.org/img/wn/${data.wether[0].icon}.png';
    conteudo.style.display = "flex";
}
