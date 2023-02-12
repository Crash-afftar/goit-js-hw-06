const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const igredientsContainer = document.getElementById('ingredients')
// const tagElements = ingredients
//   .map(el => `<li>${el}</li>`)
//   .join('');

// igredientsContainer.innerHTML = tagElements;

ingredients.forEach(ingredient => { 
  
  // Створить окремий елемент <li>
  const liEl = document.createElement('li');

  // Додасть назву інгредієнта як його текстовий вміст
  liEl.textContent = ingredient;

  // Додасть елементу клас item.
  liEl.classList.add('item');

  // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
  igredientsContainer.append(liEl);
})
