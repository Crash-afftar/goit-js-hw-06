// Пошук батьківського елементу
const ulEl = document.querySelector('#categories');
//Кількіть дочірніх елементів
console.log("Number of categories:", ulEl.children.length);

const childCategoryName = ulEl.children;
// Перебирання кожного елемента/дитини
for (const elem of childCategoryName) {
    // Виведення в консоль текст заголовку елемента
    console.log("Category:", elem.firstElementChild.textContent);
    // Виведення в консоль кількість елементів в категорії
    console.log("Elements:", elem.lastElementChild.children.length);
}

// const childCategoryNameNew = ulEl.querySelectorAll('.item')
// childCategoryNameNew.forEach(categoryDetail => {
//     console.log("Category:", categoryDetail.firstElementChild.textContent);
//     console.log("Elements:", categoryDetail.lastElementChild.children.length);
// })

// console.log(childCategoryName);
// console.log(childCategoryNameNew);
