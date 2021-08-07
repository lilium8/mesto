export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open(){
        this._popup.classList.add('popup_visible');
        document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    }
    close(){
        this._popup.classList.remove('popup_visible');
        document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup
          .querySelector('.popup__close-button')
          .addEventListener('click', () => {
            this.close();
          });
        this._popup.addEventListener('mousedown', (evt) => {
          if (evt.target !== evt.currentTarget) {
            return;
          }
          this.close();
        });
    }
    
}
  
