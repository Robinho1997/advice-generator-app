const adviceID = document.getElementById("advice-header");
const adviceText = document.getElementById("advice-text");


window.onload(getAdvice());


function getAdvice() { 

fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'}).then(response => {
    return response.json();
}).then(adviceData => {
   const adviceObject = adviceData.slip;
   adviceID.innerText = `Advice # ${adviceObject.id}`;
   adviceText.innerText = adviceObject.advice;
})

}


