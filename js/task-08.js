const formEl = document.querySelector(".login-form");

const validInput = function (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  console.log(`{Email: ${email.value}, Password: ${password.value}}`);
  event.target.reset();
};

const handleSubmitForm = formEl.addEventListener("submit", validInput);
