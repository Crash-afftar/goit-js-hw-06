function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const body = document.body;
const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

colorBtn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
});