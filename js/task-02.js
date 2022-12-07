const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.querySelector(`#ingredients`);
const itemEl = [];
const greateEl = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.append(ingredient);
  itemEl.push(li);
});
ul.append(...itemEl);

// const itemLiEl = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement(`li`);
//   li.classList.add(`item`);
//   li.textContent = ingredients[i];
//   itemLiEl.push(li);
// }
// ul.append(...itemLiEl);
// console.log(ul);
