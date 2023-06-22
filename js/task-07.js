// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');


rangeInput.value = rangeInput.getAttribute('min');

rangeInput.addEventListener('input', onRangeInput);

function onRangeInput(evt) {
    textOutput.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;

}
