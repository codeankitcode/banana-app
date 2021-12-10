let transBtn = document.querySelector("#trans-btn")

let inputText = document.querySelector("#text-input")

let textOutput = document.querySelector("#text-output")

let serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


transBtn.addEventListener("click", clickTransBtn)

function clickTransBtn() {

    let textInput = inputText.vlaue;

    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        textOutput.textContent = translatedText;
    })
    
}
  