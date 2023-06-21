// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue

let counterValue = 0;
const containerCounter = document.querySelector('#counter')
const resultCounter = document.querySelector('#value')


containerCounter.addEventListener('click', onClick)


//ВАРІАНТ 1
// function onClick(evt) {
//     if (evt.target.dataset.action === "increment") {
//         counterValue += 1;
//     }
//     else {
//         counterValue -= 1;
//     }
//     resultCounter.textContent = counterValue;

// }



//ВАРІАНТ 2
function onClick(evt) {
    
    counterValue += evt.target.dataset.action === "increment" ? 1 : -1;
    resultCounter.textContent = counterValue;
}
