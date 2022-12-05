const navEl = document.querySelectorAll(`.item`);
const navNumbersEl = navEl.length;
console.log(`Number of categories:${navNumbersEl}`);
const navItemEl = document.querySelectorAll(`.item`);
// console.log(navTitleEl);
for (let i = 0; i < navItemEl.length; i += 1) {
  //   console.log(navTitleEl[i]);
  console.log(`Category:` + navItemEl[i].querySelector(`h2`).textContent);
  console.log(`Elements:` + navItemEl[i].querySelectorAll(`li`).length);
}
