import { openPopup } from './index.js';

const popupImageZoom = document.querySelector('#image-zoom');
const zoomedPicture = document.querySelector('.popup__image');
const imageCaptionZoom = document.querySelector('.popup__image-caption');

export default class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._card = cardTemplate.querySelector('.card').cloneNode(true);
    this._cardLikeBtn = this._card.querySelector('.card__like-button');
    this._cardDeleteBtn = this._card.querySelector('.card__delete-button');
  }

  _likeCardHandler() {
    this._cardLikeBtn.classList.toggle('card__like-button_active');
  }

  _deleteCardHandler() {
    this._card.remove();
  }

  _zoomImage() {
    zoomedPicture.src = this._link;
    imageCaptionZoom.textContent = this._name;
    openPopup(popupImageZoom);
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener('click', () => this._likeCardHandler());
    this._cardDeleteBtn.addEventListener('click', () =>
      this._deleteCardHandler()
    );
    this._card.querySelector('.card__image').addEventListener('click', () => {
      this._zoomImage();
    });
  }

  generateCard() {
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._setEventListeners();

    return this._card;
  }
}
