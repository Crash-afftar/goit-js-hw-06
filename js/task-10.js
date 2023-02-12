function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const docInput = document.querySelector('input');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');

createEl.addEventListener('click', createBoxes);
function createBoxes() { 
  divBox.innerHTML;
  const divArray = [];
  for (let i = 0; i < docInput.value; i += 1) {
    const divCreate = document.createElement('div');
    divCreate.style.height = i * 10 + 20 + 'px';
    divCreate.style.width = i * 10 + 20 + 'px';
    divCreate.style.background = getRandomHexColor();
    divArray.push(divCreate);
  }
  divBox.append(...divArray);
}

const destroyBoxes = () => {
  divBox.innerHTML = '';
}

destroyEl.addEventListener('click', destroyBoxes);