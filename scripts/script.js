//Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let descrip = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let inputEL = document.querySelector('.inputs');
let displayEl = document.querySelector('.display');
let btnBackEl = document.getElementById('back');


apik = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

function convertion(val){
    return (val - 273).toFixed(2)
}
//Now we have to collect all the information with the help of fetch method

    btn.addEventListener('click', function(){

//This is the api link from where all the information will be collected

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())

         //.then(data => console.log(data))

        .then(data => {

//Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

            

        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))

        
        inputEL.classList.add('hidden');
        displayEl.classList.remove('hidden');
    })
//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.

btnBackEl.addEventListener('click', function(){
    inputEL.classList.remove('hidden');
    displayEl.classList.add('hidden');
    inputval.value = null;
});
