
const form = document.getElementById('form');
const input = document.getElementById('phone-number');
const result = document.getElementById('result');
const button = document.getElementById('button');
const imageDisplay = document.getElementById('image-display');
const regx9 = /^(0809|0817|0818|0909|0908)/;
const regair = /^(0701|0708|0802|0808|0812|0901|0902|0904|0907|0912)/;
const reglo = /^(0705|0805|0807|0811|0815|0905|0915)/;
const regmtn = /^(0703|0706|0803|0806|0810|0813|0814|0816|0903|0906|0913|0916|07025|07026|0704)/;
const MTN = './mtn.png'
const GLO = './glo.jpg'
const AIRTEL = './airtel.png'
const MOBILE = './9mobile.jpg'


form.addEventListener('input',checkNumber)


function checkNumber(event){
    event.preventDefault()
    let check = /^((\+2340?)|0)[789][01][0-9][0-9]{7}$/
    let checker = input.value.trim();
    let checke = checker.match(check)
    let regular = regx9.test(checker)
    let regularair = regair.test(checker)
    let regulatglo = reglo.test(checker)
    let regularmtn = regmtn.test(checker)

    if(checker === ""){
         result.style.display = 'block'
         result.innerHTML = ` enter your number please`
         return;
    }else if(!checke){  
       result.style.display = 'block'
       result.innerHTML = `this is incorrect phone number ${checker}`

    }
    
    else{
        if(regular == true){
            imageDisplay.innerHTML = `<img id='image-show' src='${MOBILE}'>`
            result.style.display = 'block'
            result.innerHTML = `<div id='mobile'>
            <img id='image-show' src='${MOBILE}'>
            <p>your phone number is 9MOBILE ${checker}</p>
            </div>`
            return;
        }
    
        else if(regularmtn == true){
            imageDisplay.innerHTML = `<img id='image-show' src='${MTN}'>`
            result.style.display = 'block'
            result.innerHTML = `<div id='mtn'>
            <img id='image-show' src='${MTN}'>
            <p>your phone number is MTN NIGERIA ${checker}</p>
            </div>`
            return;
        }
        else if(regulatglo == true){
            imageDisplay.innerHTML = `<img id='image-show' src='${GLO}'>`
            result.style.display = 'block'
            result.innerHTML = ` <div id='glo'>
            <img id='image-show' src='${GLO}'>
            <p>your phone number is GLOBACOM ${checker}</p>
            </div>`
             return;
        }
        else if(regularair == true){
            imageDisplay.innerHTML = `<img id='image-show' src='${AIRTEL}'>`
            result.style.display = 'block'
            result.innerHTML = `<div id='airtel'>
            <img id='image-show' src='${AIRTEL}'>
            <p>your phone number is AIRTEL ${checker}</p>
            </div>`
            return;
        }
        else{
             result.style.display = 'block'
             result.innerHTML = `this is not a NIGERIA phone number ${checker}`
        }
    }



}
