// пошук списку
const listEl = document.querySelector("#categories");

// 1. довжина масиву
const childrenLengthEL = listEl.children.length;
console.log("Number of categories:", childrenLengthEL);

// 2. перетворення в масив, перебір та вивід консолі
const itemTextEL = Array.from(listEl.children).forEach((child) => {
  console.log("Category:", child.firstElementChild.textContent);
  console.log("Elements:", child.lastElementChild.children.length);
});
