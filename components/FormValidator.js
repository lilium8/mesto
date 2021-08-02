export default class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formSelector = config.formSelector;
    this.inputSelector = config.inputSelector;
    this.inputErrorClass = config.inputErrorClass;
    this.errorActiveClass = config.inputErrorClass;
    this.submitButtonSelector = config.submitButtonSelector;
  }

  _checkInput(input) {
    const errorElement = document.querySelector(`#${input.id}-error`);
    const isValid = input.validity.valid;
    console.log(input.validationMessage);

    if (!isValid) {
      input.classList.add(this.inputErrorClass);
      errorElement.textContent = input.validationMessage;
    } else {
      input.classList.remove(this.inputErrorClass);
      errorElement.textContent = '';
    }
  }

  _toggleButtonState(form) {
    const buttonElement = form.querySelector(this.submitButtonSelector);
    const isValid = form.checkValidity();

    if (isValid) {
      buttonElement.disabled = false;
    } else {
      buttonElement.disabled = true;
    }
  }

  _setEventListeners(form) {
    const formFoundedInputs = form.querySelectorAll(this.inputSelector);
    const inputsArr = Array.from(formFoundedInputs);

    inputsArr.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInput(input);
        this._toggleButtonState(form);
      });
    });
  }
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this.formSelector));

    formList.forEach((form) => {
      this._setEventListeners(form);
    });
  }
}
