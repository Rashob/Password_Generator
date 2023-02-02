const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password");
let passwordEl2 = document.getElementById("password2");
function generate(){
    let password = "";
    let password2 = "";
    for(let i = 0; i < 10; i++){
        let character = characters[Math.floor(Math.random() * characters.length)];
        password += character;
    }
    for(let i = 0; i < 10; i++){
        let character = characters[Math.floor(Math.random() * characters.length)];
        password2 += character;
    }
    passwordEl.innerText = "PASSWORD 1 : " + password;
    passwordEl2.innerText = "PASSWORD 2 : " + password2;


}
