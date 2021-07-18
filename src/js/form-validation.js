const nameInputRef = document.querySelector('#name');
const surnameInputRef = document.querySelector('#surname');
const emailInputRef = document.querySelector('#email');
const telInputRef = document.querySelector('#phone');

const btnRef = document.querySelector('.form__button');

btnRef.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();
  btnRef.style.boxShadow = 'none';

  // Валидация имени
  if (!nameInputRef.value) {
    nameInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Write your name!',
      position: 'topRight',
    });
  } else {
    nameInputRef.classList.remove('invalid');
    nameInputRef.classList.add('valid');
  }

  // Валидация фамилии
  if (!surnameInputRef.value) {
    surnameInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Write your surname!',
      position: 'topRight',
    });
  } else {
    surnameInputRef.classList.remove('invalid');
    surnameInputRef.classList.add('valid');
  }

  // Валидация имейла
  const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (!emailInputRef.value) {
    emailInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Write your E-mail!',
      position: 'topRight',
    });
  } else if (!emailRegex.test(emailInputRef.value)) {
    emailInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Wrong E-mail!',
      position: 'topRight',
    });
  } else {
    emailInputRef.classList.remove('invalid');
    emailInputRef.classList.add('valid');
  }

  // Валидация номера телефона
  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  if (!telInputRef.value) {
    telInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Write your phone number!',
      position: 'topRight',
    });
  } else if (!phoneRegex.test(telInputRef.value)) {
    telInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Wrong phone number!',
      position: 'topRight',
    });
  } else {
    telInputRef.classList.remove('invalid');
    telInputRef.classList.add('valid');
  }
}
