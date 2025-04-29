const form = document.getElementById('form');
const input = document.getElementById('phone-number');
const result = document.getElementById('result');
const button = document.getElementById('button');
const regx = /^(0809|0817|0818|0909|0908)/;
const regair = /^(0701|0708|0802|0808|0812|0901|0902|0904|0907|0912)/;
const reglo = /^(0705|0805|0807|0811|0815|0905|0915)/;
const regmtn = /^(0703|0706|0803|0806|0810|0813|0814|0816|0903|0906|0913|0916|07025|07026|0704)/;






form.addEventListener('submit',checkNumber)

function checkNumber(event){
    event.preventDefault()
    let check = /\d{11}/
    let checker = input.value.trim();
    let checke = checker.match(check)
    let regular = regx.test(checker)
    let regularair = regair.test(checker)
    let regulatglo = reglo.test(checker)
    let regularmtn = regmtn.test(checker)


    if(checker === ""){
         result.innerHTML = ` enter your number please`
         return;
    }else if(!checke){
       result.innerHTML = `this is incorrect phone number ${checker}`
    }
    else{
        if(regular == true){
            result.innerHTML = `your phone number is 9MOBILE ${checker}`
            return;
        }
    
        else if(regularmtn == true){
            result.innerHTML = `your phone number is MTN NIGERIA ${checker}`
            return;
        }
        else if(regulatglo == true){
            result.innerHTML = `your phone number is GLOBACOM ${checker}`
             return;
        }
        else if(regularair == true){
            result.innerHTML = `your phone number is AIRTEL ${checker}`
            return;
        }
        else{
             result.innerHTML = `this is not a NIGERIA phone number ${checker}`
        }
    }



}
