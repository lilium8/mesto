const hideInputError = (formElement,inputElement) =>{
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    console.log(errorElement);
    inputElement.classList.remove('popup__input_type_error');
}
const showInputError = (formElement,inputElement) =>{
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement)
    inputElement.classList.add('popup__input_type_error');
    console.log('validationMessage');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('popup__input-error_active')
}

const checkInputValidity = (formElement, inputElement) => {
    console.log(inputElement.validity.valid)
    if (inputElement.validity.valid) {
        hideInputError(formElement,inputElement);
    }
    else {
        showInputError(formElement,inputElement); 
    }
}


const setEventListeners = (formElement) => {
 const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
 console.log(inputList)
 inputList.forEach((inputElement) =>{
     inputElement.addEventListener('input', () =>{
         // check input is valid
         checkInputValidity(formElement,inputElement)
     })

 })
 // add listeners gor each input

}

const enableValidation = () => {
    //find all forms 
   const formList = Array.from(document.querySelectorAll('.popup__form'));
    // set all listeners
    formList.forEach(formElement => {
        setEventListeners(formElement);
    })
}
