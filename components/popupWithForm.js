import Popup from "./Popup.js";

export default class PopupWithIForm extends Popup {
    constructor(popuSelector,{formSubmit}) {
        super(popuSelector);
        this._form = this._popupSelector.querySelector('.popup__form');
        this._formSubmit = formSubmit;
    }
    _getInputValues(){
        const Inputs = form.querySelectorAll('.popup__input');
        const inputsArr = Array.from(Inputs);
        const inputValues = {};
        inputsArr.forEach((input =>
            inputValues[input.name] = input.value));
            return inputValues
    }

    close (){
        super.close();
        this.form.reset();
    }
    
    setEventListeners() {
        super.setEventListeners(
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this.formSubmit(this._getInputValues());
                this.close();
            })
        )
    }
}





// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
// но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.