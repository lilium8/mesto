import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popuSelector, { formSubmit }) {
    super(popuSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }
  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  close() {
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
    );
  }
}
