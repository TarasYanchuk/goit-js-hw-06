let counterValue = 0;
const addListenerBtnDecrement = document.querySelector(`[data-action="decrement"]`);
const addListenerBtnIncrement = document.querySelector(`[data-action="increment"]`);
const addListenerCounterValue = document.querySelector("#value");
addListenerBtnDecrement.addEventListener(`click`, () => {
  counterValue -= 1;
  if (addListenerBtnDecrement) {
    Number((addListenerCounterValue.textContent = counterValue));
  }
});
addListenerBtnIncrement.addEventListener(`click`, () => {
  counterValue += 1;
  if (addListenerBtnIncrement) {
    Number((addListenerCounterValue.textContent = counterValue));
  }
});
