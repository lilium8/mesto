import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._zoomedPicture = document.querySelector('.popup__image');
        this._imageCaptionZoom = document.querySelector('.popup__image-caption');
    }
    open(name, link) {
        this._zoomedPicture.scr = link;
        this._imageCaptionZoom = name;
        console.log(this._imageCaptionZoom)
        this._imageCaptionZoom.textContent = name;
        /// сюда попадает Uncaught TypeError: Cannot create property 'textContent' on string 'Байкал' - не могу понять почему
    }
}


// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.