export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorActiveClass = config.inputErrorClass;
    this._inactiveSaveButtonClass = config.inactiveSaveButtonClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputsList = Array.from(this._formElement.querySelectorAll(this.inputSelector));
  }
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
  
  _isValid(inputElement)  {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _hasInvalidInput() {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput) {
      buttonElement.classList.add(this.inactiveSaveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(this.inactiveSaveButtonClass);
      buttonElement.removeAttribute("disabled");
      
    }
  }
   resetFormError() {
    this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
    this._toggleButtonState();
  });
}

  _setEventListeners() {
    this._inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    this._isValid(inputElement);
    this._toggleButtonState();
      });
    });
  }


  enableValidation = () => {
    this._toggleButtonState();
    this._setEventListeners();
  }
}
