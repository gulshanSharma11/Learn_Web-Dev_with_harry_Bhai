const password=document.getElementById("password");


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const Symbol="!@#$%^&*()_+=-~<>?/";
let final='';
const length=12;
let newPassword=upperCase+lowerCase+numbers+Symbol;
function generateRandomString(){
    let randomNumber='';
    while(randomNumber.length<length){
    randomNumber += newPassword[Math.floor(Math.random()*newPassword.length)];
    }
    password.value=randomNumber;
}
function copy(){
    password.select();
    document.execCommand('copy');
}



// Generate and log a random string of 8 characters
