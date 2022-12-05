const input = document.querySelector(`#validation-input`);
const dataLength = document.querySelector(`[data-length]`);
const numberDataLength = Number(dataLength.dataset.length);
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === numberDataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
