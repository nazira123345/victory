function() {
  // Получение элементов формы
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const submitButton = document.querySelector('button[type="submit"]');

  // Установка обработчика события на отправку формы
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Валидация полей формы

    // Проверка на заполненность поля адреса электронной почты
    if (!emailInput.value) {
      alert('Пожалуйста, введите адрес электронной почты.');
      emailInput.focus();
      return;
    }

    // Проверка на корректный формат адреса электронной почты
    if (!validateEmail(emailInput.value)) {
      alert('Некорректный адрес электронной почты.');
      emailInput.focus();
      return;
    }

const form = document.querySelector('.login form');
const emailInput = document.querySelector('.login input[type="email"]');

form.addEventListener('submit', (event) => {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    event.preventDefault(); // Предотвратить отправку формы
    alert('Пожалуйста, введите корректный email.');
  }
});

function validateEmail(email) {
  // Регулярное выражение для проверки email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
