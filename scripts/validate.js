const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorActiveClass);
  errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorActiveClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((item) => {
    if (item.validity.valid) {
      return false;
    } else {
      return true;
    }
  });
};

const toggleButtonState = (buttonElement, inputList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, config) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = config;
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  const buttonElement = formElement.querySelector(submitButtonSelector);

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(buttonElement, inputList);
    });
    toggleButtonState(buttonElement, inputList);
  });
};

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  });
};
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorActiveClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__save-button',
};

enableValidation(config);
