//import fs from 'fs';
// verables for displayP1
const tempS1 = document.querySelector('#temp') as HTMLParagraphElement;
const windS1= document.getElementById('wind') as HTMLParagraphElement;
const humidS1 = document.getElementById('humidity') as HTMLParagraphElement;
const cityS1 = document.getElementById('todayPcity') as HTMLElement;
const searchaButton = document.getElementById('search') as HTMLButtonElement;
const city= document.getElementById('city') as HTMLInputElement

//verables for 5 day forecast
const b1Date = document.getElementById('box1Date') as HTMLElement
const b1temp = document.getElementById('b1temp') as HTMLElement
const b1wind = document.getElementById('b1wind') as HTMLElement
const b1humid = document.getElementById('b1hum') as HTMLElement

const b2Date = document.getElementById('box2Date') as HTMLElement
const b2temp = document.getElementById('b2temp') as HTMLElement
const b2wind = document.getElementById('b2wind') as HTMLElement
const b2humid = document.getElementById('b2hum') as HTMLElement

const b3Date = document.getElementById('box3Date') as HTMLElement
const b3temp = document.getElementById('b3temp') as HTMLElement
const b3wind = document.getElementById('b3wind') as HTMLElement
const b3humid = document.getElementById('b3hum') as HTMLElement

const b4Date = document.getElementById('box4Date') as HTMLElement
const b4temp = document.getElementById('b4temp') as HTMLElement
const b4wind = document.getElementById('b4wind') as HTMLElement
const b4humid = document.getElementById('b4hum') as HTMLElement

const b5Date = document.getElementById('box5Date') as HTMLElement
const b5temp = document.getElementById('b5temp') as HTMLElement
const b5wind = document.getElementById('b5wind') as HTMLElement
const b5humid = document.getElementById('b5hum') as HTMLElement




const fiveDayDisplay = (data:any)=>{
    const FiveDayForecast:any[] =[data.list[1],data.list[13],data.list[21],data.list[29],data.list[37],]

    b1Date.textContent = `${FiveDayForecast[0].dt_txt.split(' ')[0]}`
    b2Date.textContent = `${FiveDayForecast[1].dt_txt.split(' ')[0]}`
    b3Date.textContent = `${FiveDayForecast[2].dt_txt.split(' ')[0]}`
    b4Date.textContent = `${FiveDayForecast[3].dt_txt.split(' ')[0]}`
    b5Date.textContent = `${FiveDayForecast[4].dt_txt.split(' ')[0]}`
    
    b1temp.textContent =`Temp: ${Math.ceil(FiveDayForecast[0].main.temp)}°F`
    b2temp.textContent =`Temp: ${Math.ceil(FiveDayForecast[1].main.temp)}°F`
    b3temp.textContent =`Temp: ${Math.ceil(FiveDayForecast[2].main.temp)}°F`
    b4temp.textContent =`Temp: ${Math.ceil(FiveDayForecast[3].main.temp)}°F`
    b5temp.textContent =`Temp: ${Math.ceil(FiveDayForecast[4].main.temp)}°F`

    b1wind.textContent =`Wind: ${FiveDayForecast[0].wind.speed} Mph`
    b2wind.textContent =`Wind: ${FiveDayForecast[1].wind.speed} Mph`
    b3wind.textContent =`Wind: ${FiveDayForecast[2].wind.speed} Mph`
    b4wind.textContent =`Wind: ${FiveDayForecast[3].wind.speed} Mph`
    b5wind.textContent =`Wind: ${FiveDayForecast[4].wind.speed} Mph`

    b1humid.textContent =`Humdidity ${FiveDayForecast[0].main.humidity}%`
    b2humid.textContent =`Humdidity ${FiveDayForecast[1].main.humidity}%`
    b3humid.textContent =`Humdidity ${FiveDayForecast[2].main.humidity}%`
    b4humid.textContent =`Humdidity ${FiveDayForecast[3].main.humidity}%`
    b5humid.textContent =`Humdidity ${FiveDayForecast[4].main.humidity}%`

}




//const GioCode=`api.openweathermap.org/data/2.5/forecast?q=london&appid=c0a197fb774ca83ce8adcee863e1445d`

const displayP1 =(data:any)=>{
  tempS1.textContent = `Temp: ${data.main.temp}°F`;
  windS1.textContent = `Wind speed: ${data.wind.speed}MPH`;
  humidS1.textContent = `Humidity: ${data.main.humidity}%`;

  var today:any = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  today = `${city.value} (${mm} - ${dd})`
  
  cityS1.textContent = `${today}`
}

function currectWAPI(city:any){
  const urL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0a197fb774ca83ce8adcee863e1445d&units=imperial`;
  
  fetch(urL)
  .then((res)=>res.json())
  .then((data)=>{console.log(data)
    displayP1(data);
  })
}

function getAPI(){
  const urL = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=c0a197fb774ca83ce8adcee863e1445d&units=imperial`;
  
  fetch(urL)
  .then((res)=>res.json())
  .then((data)=>{console.log(data)
    
    currectWAPI(city.value)
    fiveDayDisplay(data);
    console.log(`${data.list[0].weather.icon}`)
  })
}


searchaButton.addEventListener('click', getAPI);
