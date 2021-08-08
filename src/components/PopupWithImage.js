import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._zoomedPicture = this._popup.querySelector('.popup__image');
    this._imageCaptionZoom = this._popup.querySelector('.popup__image-caption');
  }
  open(name, link) {
    super.open();
    this._zoomedPicture.src = link;
    this._zoomedPicture.alt = name;
    this._imageCaptionZoom.textContent = name;
  }
}

// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open.
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
