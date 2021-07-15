export default class FormValidator{
    constructor(config, formElement){
        this.config = config;
        this.formElement = formElement;
        this.formSelector = config.formSelector;
        this.inputSelector = config.inputSelector;
        this.inputErrorClass = config.inputErrorClass;
        this.errorActiveClass = config.inputErrorClass;
        this.submitButtonSelector = config.submitButtonSelector;
    }
    
    _checkInput(inputElement){
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
        const validation = inputElement.validity.valid;
        if (!validation) {
            inputElement.classList.add(this.inputErrorClass);
            errorElement = inputElement.validationMessage;
        } else {
            input.classList.remove(this._inputErrorClass);
            errorElement.textContent = '';
        }
    };
    
    _toggleButtonState(form,buttonElement){
        const isValid = form.checkValidity();
        if (isValid) {
           buttonElement.disabled = false
        } else {
            buttonElement.disabled = true;
        }
    };
    _setEventListeners(formElement, config){
        const { inputSelector, submitButtonSelector, ...restConfig } = config;
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        const buttonElement = formElement.querySelector(submitButtonSelector);
        
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInput(formElement, inputElement, restConfig);
                this._toggleButtonState(buttonElement, inputList);
            });
            _toggleButtonState(buttonElement, inputList);
        });
    };
    //  errorMessageReset(){
    //    const inputError = this._formElement.querySelectorAll(this._inputErrorClass);
    //    const input = this._formElement.querySelectorAll(this._inputSelector);
    //    inputError.forEach((inputError) => {
    //        inputError.textContent = ''
    //    });
    //    input.forEach((input) => {
    //        input.classList.remove(this._inputErrorClass)
    //    })
    //    this.toggleButtonState();
    //  }
    enableValidation() {
        const { formSelector, ...restConfig } = this.config;
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach( formElement => {
            this._setEventListeners(formElement, restConfig);
        });
    }}