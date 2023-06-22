// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('#controls');

const divBoxes = document.querySelector('#boxes')

const btnCreate = document.querySelector('[data-create]')

const btnDestroy = document.querySelector('[data-destroy]')



btnCreate.addEventListener('click', onCreateBtn)

btnDestroy.addEventListener('click', onDestroyBtn)



function createBoxes(amount) {
  let newDivs = '';
  let size = 30;
  for (let i = 0; i < amount; i += 1) {

    const color = getRandomHexColor();

    newDivs += `<div class="new-div" style="width:${size}px; height:${size}px; background-color:${color}"></div> `
    size += 10;
  }
  divBoxes.insertAdjacentHTML('beforeend', newDivs);
}

function onCreateBtn(evt) {
  const amount = container.firstElementChild.value;
  createBoxes(amount);
}

function onDestroyBtn(evt) {
  divBoxes.innerHTML = '';
  container.firstElementChild.value = '';
}