const passwordBox = document.getElementById("password");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specialSymbols = "@#$%&*(){}[]<>?/|\-+=!~^_";

function randomPassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    while(length > password.length){
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    }
    passwordBox.value = password;
    
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}