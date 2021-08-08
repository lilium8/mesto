const profilePopupButton = document.querySelector('#open_popup');
const placeOpenPopupButton = document.querySelector('#place-open-popup_button');
const nameInput = document.querySelector('#name_input');
const jobInput = document.querySelector('#job_input');
const cardsForm = document.querySelector('#popup-cards__form');
const profileForm = document.querySelector('#popup_form');
const cardsContainer = document.querySelector('.cards__container');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorActiveClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__save-button',
  inactiveSaveButtonClass: 'popup__save-button_inactive',
};

export {
  profilePopupButton,
  placeOpenPopupButton,
  nameInput,
  jobInput,
  cardsForm,
  profileForm,
  cardsContainer,
  initialCards,
  config,
};
