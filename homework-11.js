import { Modal } from './Modal.js';
import { Form } from './Form.js';
4. //Добавление валидации почты и вывод в консоль лог объекта { email: 'введенная почта' }
const registrationForm = new Form('email-form');
registrationForm.element.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = registrationForm.getValues();
  console.log(values);
  
  const email = values.email || '';
  function isEmailValid(email) {
    if (!email || email.length > 254 || /\s/.test(email)) {
      return false;
    }

    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const [local, domain] = parts;
    if (!local || local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
      return false;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) {
      return false;
    }

    if (!domain || domain.startsWith('-') || domain.endsWith('-') || domain.includes('--') || domain.includes('..')) {
      return false;
    }

    const labels = domain.split('.');
    if (labels.length < 2) return false;
    const tld = labels[labels.length - 1];
    if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
      return false;
    }
    return true;
  }
  console.log(isEmailValid(email))
  registrationForm.reset()
});

// 5. Создание модального окна
const registrationModal = new Modal('registration-modal');
const registrationBtn = document.querySelector('#registration-button');

if (registrationBtn) {
  registrationBtn.addEventListener('click', () => {
    registrationModal.open();
  });
}

//6. Форма для регистрации
const userName = document.querySelector('#userName');
const userLastName = document.querySelector('#userLastName');
const userBirthday = document.querySelector('#userBirthday');
const userLogin = document.querySelector('#userLogin');
const userPassword = document.querySelector('#userPassword');
const userDoublePassword = document.querySelector('#userDoublePassword');
const resetModalInput = document.querySelector('#resetModalInputBtn');
const submitTheForm = document.querySelector('#submitTheFormBtn');
const resetBtn = document.getElementById('resetModalInputBtn');

//Реализация кнопки сброса полей ввода
resetModalInput.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.modal input');
  inputs.forEach(input => {
    if (input.type === 'date') {
      input.value = '';
    } else {
      input.value = '';
    }
  });
});

//Валидация полей ввода
submitTheForm.addEventListener('click', () => {
  let user = null;
  const inputs = [userName, userLastName, userBirthday, userLogin, userPassword, userDoublePassword];
  let allValid = true;
  for (const input of inputs) {
    if (!input.checkValidity()) {
      allValid = false;
      break;
    }
  };
  const passwordsMatch = userPassword.value === userDoublePassword.value && userPassword.value !== '';
  if (!allValid || !passwordsMatch) {
    alert('Регистрация отклонена. Проверьте правильность заполнения полей.');
    return;
  };
  const userObj = {
    name: userName.value,
    lastName: userLastName.value,
    birthday: userBirthday.value,
    login: userLogin.value,
    password: userPassword.value
  };
  userObj.createdOn = new Date();
  user = userObj;
  console.log(user)
modalClass.classList.remove('modal-showed');
modalOverlay.classList.remove('overlay-active');
})