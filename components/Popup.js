export default class Popup {
    constructor(popupSelector){
        this.popup = document.querySelector(popupSelector);
        this.close = this.close.bind(this)
    }
    open(){
        this.popup.classList.add('popup_visible');
    }
    close(){
        this.popup.classList.remove('popup_visible');
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if (evt.currentTarget === evt.target) {
          this.close();
        }
      }

    setEventListeners() {
        this.popup
        .querySelector('.popup__close-button')
        .addEventListener('click', this.close);  
        document.addEventListener('keydown', this._handleEscClose);
    }
}



// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.