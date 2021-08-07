import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popuSelector, {formSubmit}) {
        super(popuSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }
    _getInputValues(){
        this.inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        const inputValues = {};
        this.inputs.forEach((input) => {
            inputValues[input.name] = input.value
        });
            return inputValues
    }

    close(){
        super.close();
        this._form.reset();
    }
    
    setEventListeners() {
        super.setEventListeners(
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._formSubmit(this._getInputValues());
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