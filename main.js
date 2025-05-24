const passwordInput = document.querySelector("[name='password']");
const confirmPasswordInput = document.querySelector("[name='repeat-password']");
const btnSubmit = document.querySelector('button[type="submit"]')

function validatePassword(password, confirmPassword) {
  // Проверка на пустые поля
  if (!password) {
    return { isValid: false, message: "Поле не может быть пустым" };
  }

  // Проверка на совпадение паролей
  if (password !== confirmPassword) {
    return { isValid: false, message: "Пароли не совпадают" };
  }

  // Если все проверки пройдены
  return { isValid: true, message: "Пароль принят" };
}

// Пример вызова при отправке формы
function handleSubmit(event) {
  event.preventDefault();

  const result = validatePassword(passwordInput.value, confirmPasswordInput.value);

  if (result.isValid) {
    console.log("Пароль валиден!");
    // Отправка формы или другие действия
  } else {
    alert(result.message); // Вывод ошибки пользователю
  }
}

btnSubmit.addEventListener('click', () => {
  const result = validatePassword(passwordInput.value, confirmPasswordInput.value);
  console.log(result);
})

confirmPasswordInput.addEventListener("input", () => {
  const result = validatePassword(confirmPasswordInput.value, passwordInput.value);
  const errorElement = confirmPasswordInput.parentElement.querySelector('.form__input__text-error')

  if (errorElement) errorElement.remove()

  if (!result.isValid) {
    confirmPasswordInput.insertAdjacentHTML('beforebegin', `<span class="form__input__text-error p-small">${result.message}</span>`)
  } else {
    Array.from(document.querySelectorAll('.form__input__text-error')).forEach((element) => element.remove())
  }

  btnSubmit.disabled = !result.isValid;

  console.log(result);
});
passwordInput.addEventListener("input", () => {
  const result = validatePassword(passwordInput.value, confirmPasswordInput.value);
  const errorElement = passwordInput.parentElement.querySelector('.form__input__text-error')

  if (errorElement) errorElement.remove()

  if (!result.isValid) {
    passwordInput.insertAdjacentHTML('beforebegin', `<span class="form__input__text-error p-small">${result.message}</span>`)
  } else {
    Array.from(document.querySelectorAll('.form__input__text-error')).forEach((element) => element.remove())
  }

  btnSubmit.disabled = !result.isValid;

  console.log(result);
});