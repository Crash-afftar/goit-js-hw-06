// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const summListener = document.querySelector('#value');

decrBtn.addEventListener("click", () => {
    counterValue -= 1;
    summListener.textContent = counterValue;
});
incrBtn.addEventListener("click", () => {
    counterValue += 1;
    summListener.textContent = counterValue;
});