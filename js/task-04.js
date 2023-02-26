const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);

const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);

const spanEl = document.querySelector("#value");

const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const handleDecrementBtn = btnDecrementEl.addEventListener("click", () => {
  counter.decrement();
  spanEl.textContent = counter.value;
  console.log(counter.value);
});

const handleIncrementBtn = btnIncrementEl.addEventListener("click", () => {
  counter.increment();
  spanEl.textContent = counter.value;
  console.log(counter.value);
});
