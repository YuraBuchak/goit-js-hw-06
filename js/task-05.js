const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const handleInputEl = inputEl.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    spanEl.textContent = event.target.value.trim();
    return;
  }
  spanEl.textContent = "Anonymous";
});
