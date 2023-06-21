// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".



const textInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

textInput.addEventListener('input', onInput);

function onInput(evt){
    evt.currentTarget.value.length > 0 ? textOutput.textContent = evt.currentTarget.value  : textOutput.textContent ='Anonymous';
}