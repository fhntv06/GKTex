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

btnSubmit.addEventListener('click', () => {
  const result = validatePassword(passwordInput.value, confirmPasswordInput.value);
  const fields = [confirmPasswordInput, passwordInput]

  if (!result.isValid) {
    fields.forEach((element) => {
      element.insertAdjacentHTML('beforebegin', `<span class="form__input__text-error p-small">${result.message}</span>`)
    })
  } else {
    Array.from(document.querySelectorAll('.form__input__text-error')).forEach((element) => element.remove())
  }
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
});