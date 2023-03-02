function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxEl = document.querySelector("#boxes");

const createMarkup = function () {
  let amount = inputEl.value;
  const firstSizeEl = 30;

  for (let i = 0; i < amount; i += 1) {
    let randomBgrColor = getRandomHexColor();
    let divSizeEl = i * 10 + firstSizeEl;
    const divEl = `<div width="${divSizeEl}px" heigth="${divSizeEl}px" background-color ="${randomBgrColor}"></div>`;

    divSizeEl = boxEl.insertAdjacentHTML("afterbegin", divEl);
  }
  // console.log(boxEl);
};

const handleCreateBtn = btnCreateEl.addEventListener("click", createMarkup);
const handleDestroyBtn = btnDestroyEl.addEventListener(
  "click",
  () => (boxEl.innerHTML = "")
);
