let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.querySelector(".genBtn");

let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {

    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});


let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*()-=_+";


function generatePassword() {
    let genPassword = "";
    let allChars = "";

    if(lowercase.checked){
        allChars+=lowerchar;
    }else{
        allChars+="";
    }
    if(uppercase.checked){
        allChars+=upperchar;
    }else{
        allChars+="";
    }
    if(numbers.checked){
        allChars+=allNumbers;
    }else{
        allChars+="";
    }
    if(symbols.checked){
        allChars+=allSymbols;
    }else{
        allChars+="";
    }

    // allChars += lowercase.checked ? lowerchar : "";
    // allChars += uppercase.checked ? upperchar : "";
    // allChars += numbers.checked ? allNumbers : "";
    // allChars += symbols.checked ? allSymbols : "";


    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {


        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 2000);

    }
});