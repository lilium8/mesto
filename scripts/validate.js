
const hideInputError = (formElement,inputElement) =>{
    const{inputErrorClass, errorActiveClass} = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(formElement)
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
}

const showInputError = (formElement, inputElement) =>{
      const{inputErrorClass, errorActiveClass} = config;
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    console.log(inputElement)
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement,inputElement, config);
    }
    else {
        showInputError(formElement,inputElement, config); 
    }
}

const hasInvalidInput = (inputList) => {
   return inputList.some(inputElement => !inputElement.validity.valid)
}

const toogleButtonState = (buttonElement, inputList) =>{
    // if form valid enable button else disable
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}


const setEventListeners = (formElement, config) => {
    const {inputSelector, submitButtonSelector, ...restConfig} = config;
 formElement.addEventListener('submit',(evt) =>{
     evt.preventDefault();
 })
 const buttonElement = formElement.querySelector(submitButtonSelector);
 const inputList = Array.from(formElement.querySelectorAll(inputSelector));
 inputList.forEach((inputElement) =>{
     inputElement.addEventListener('input', () =>{
         checkInputValidity(formElement, inputElement, restConfig);
         toogleButtonState(buttonElement, inputList, restConfig);
     })
     // set initial button state
     toogleButtonState(buttonElement, inputList, config);
 })

}

const enableValidation = (config) => {
    const {formSelector, ...restConfig} = config;
    //find all forms 
   const formList = Array.from(document.querySelectorAll(formSelector));
    // set all listeners
    formList.forEach(formElement => {
        setEventListeners(formElement, restConfig);
    })
}
