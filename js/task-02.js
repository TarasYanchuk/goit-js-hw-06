const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.querySelector(`#ingredients`);
const itemLiEl = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = ingredients[i];
  itemLiEl.push(li);
}
ul.append(...itemLiEl);
console.log(ul);
