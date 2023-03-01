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
  const obj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(obj);
  event.target.reset();
};

const handleSubmitForm = formEl.addEventListener("submit", validInput);
