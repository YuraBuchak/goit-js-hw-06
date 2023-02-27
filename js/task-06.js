const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const handleValidInput = inputEl.addEventListener("blur", () => {
  //   console.log(inputEl.value);
  //   console.log(inputEl.value.length);
  //   console.log(inputEl.dataset.length);

  if (
    inputEl.value.length < inputEl.dataset.length ||
    inputEl.value.length > inputEl.dataset.length
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    return;
  }
  inputEl.value.length === inputEl.dataset.length;
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
});
