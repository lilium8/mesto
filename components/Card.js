// import { openPopup } from '../pages/index.js';

export default class Card {
  constructor({name, link, zoomedImage}, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._card = this._getTemplate();
    this._zoomedImage = zoomedImage;
    // this._card = cardTemplate.querySelector('.card').cloneNode(true);
    // this._cardLikeBtn = this._card.querySelector('.card__like-button');
    // this._cardDeleteBtn = this._card.querySelector('.card__delete-button');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _likeCardHandler() {
    this._cardLikeBtn.classList.toggle('card__like-button_active');
  }

  _deleteCardHandler() {
    this._card.remove();
  }

  // _zoomImage() {
  //   const popupImageZoom = document.querySelector('#image-zoom');
  //   const zoomedPicture = document.querySelector('.popup__image');
  //   const imageCaptionZoom = document.querySelector('.popup__image-caption');
  //   zoomedPicture.src = this._link;
  //   zoomedPicture.alt = this._name;
  //   imageCaptionZoom.textContent = this._name;
  //   openPopup(popupImageZoom);
  // }

  _setEventListeners() {
    this._cardLikeBtn = this._card.querySelector('.card__like-button');
    this._cardDeleteBtn = this._card.querySelector('.card__delete-button');
    this._cardLikeBtn.addEventListener('click', () => this._likeCardHandler());
    this._cardDeleteBtn.addEventListener('click', () =>
      this._deleteCardHandler()
    );
    this._card.querySelector('.card__image').addEventListener('click', () => {
      this._zoomedImage();
    });
  }

  generateCard() {
    this._img = this._card.querySelector('.card__image')
    this._card.querySelector('.card__title').textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;
    this._setEventListeners();

    return this._card;
  }
}
