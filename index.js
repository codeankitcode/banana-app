const inputEl = document.querySelector("#input-el")
const btn = document.querySelector("#btn")
const outputEl = document.querySelector("#output-el")


const serverUrl = "https://api.funtranslations.com/translate/minion.json"


function clickHandler(){
    const inputVal = inputEl.value
    // console.log(getTranslationURL)
    // outputEl.textContent = inputVal
    // console.log("my name is ankit")
    fetch(getTranslationURL(inputVal))
    .then(response => response.json())
    .then(json => {
        // let translatedText = 
        outputEl.textContent = json.contents.translated
    })
    .catch(err => console.log("faild request", err))
}

function getTranslationURL(text){
    return serverUrl + "?text=" + text
}

btn.addEventListener("click", clickHandler)









































// let transBtn = document.querySelector("#trans-btn")


// let inputText = document.querySelector("#text-input")

// let textOutput = document.querySelector("#text-output")

// let serverURL = "https://api.funtranslations.com/translate/minion.json"


// function getTranslationURL(text){
//     return serverURL + "?" + "text=" + text
// }


// transBtn.addEventListener("click", clickTransBtn)

// function clickTransBtn() {

//     let textInput = inputText.vlaue;

//     fetch(getTranslationURL(textInput))
//     .then(response => response.json())
//     .then(json => {
//         let translatedText = json.contents.translated;
//         textOutput.textContent = translatedText;
//     })
//     .catch(err => console.log("failed", err))
    
// }