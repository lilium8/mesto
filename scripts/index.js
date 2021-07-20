import Card from './Card.js';
import FormValidator from './FormValidator.js';
/// ОБЪЯВЛЯЕМ ПЕРЕМЕННЫЕ
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('#profile-popup');
const placePopup = document.querySelector('#place-popup');
const popupImageZoom = document.querySelector('#image-zoom');
const profilePopupButton = document.querySelector('#open_popup');
const closePopupButton = document.querySelector('.popup__close-button');
const placeOpenPopupButton = document.querySelector('#place-open-popup_button');
const placeCloseButton = document.querySelector('#place_close-button');
const imageZoomCloseButton = document.querySelector(
  '.popup__image-close-button'
);
const nameInput = document.querySelector('#name_input');
const jobInput = document.querySelector('#job_input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('#popup_form');
const cardsForm = document.querySelector('#popup-cards__form');
const profileForm = document.querySelector('#popup_form');
const cardTitleInput = document.querySelector('#card-title_input');
const cardImageLinkInput = document.querySelector('#card-link-input');
const cardTemplate = document.querySelector('#card-template').content;
const popupForms = document.querySelectorAll('.popup__form');
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
};

const formValidationProfilePopup = new FormValidator(config, profileForm);
const formValidationPlacePopup = new FormValidator(config, cardsForm);

/// ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
function renderCardElements() {
  initialCards.forEach((item) => {
    addCard(item, cardTemplate);
  });
}
renderCardElements();

/// ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ НА СТРАНИЦУ
function addCard(item, cardTemplate) {
  const card = new Card(item, cardTemplate).generateCard();
  document.querySelector('.cards__container').prepend(card);
}

/// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupbyEscape);
}

/// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', closePopupbyEscape);
}

/// ФУНКЦИЯ ПОЛУЧЕНИЯ ДАННЫХ ПОПАПА ПРОФИЛЯ ИЗ ИНПУТОВ
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

/// ФУНКЦИЯ ПОЛУЧЕНИЯ ДАННЫХ ИЗ ИНПУТОВ ПОПАПА КАРТОЧКИ
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardTitleInput.value,
    link: cardImageLinkInput.value,
  };
  addCard(newCard, cardTemplate);
  closePopup(placePopup);
}

/// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА КНОПКОЙ ESC
function closePopupbyEscape(evt) {
  if (evt.key === 'Escape') {
    const showPopup = document.querySelector('.popup_visible');
    closePopup(showPopup);
  }
}
git
popups.forEach((popupElement) =>
  popupElement.addEventListener('mousedown', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  })
);

///// СЛУШАТЕЛИ КЛИКОВ

/// Слушатель открытия попапа профиля
profilePopupButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
});

// Cлушатель закрытия попапа профиля
closePopupButton.addEventListener('click', () => closePopup(profilePopup));

// Cлушатель открытия попапа добавления карточки на странницу
placeOpenPopupButton.addEventListener('click', () => openPopup(placePopup));

// Слушатель закрытия попапа добавления карточки на страницу
placeCloseButton.addEventListener('click', () => closePopup(placePopup));

// Слушатель закрытия попапа зума фото
imageZoomCloseButton.addEventListener('click', () =>
  closePopup(popupImageZoom)
);

// Слушатели отправки форм
formElement.addEventListener('submit', handleProfileFormSubmit);
cardsForm.addEventListener('submit', handlePlaceFormSubmit);

// Вызов функции валидации формы
formValidationProfilePopup.enableValidation();
formValidationPlacePopup.enableValidation();
formValidationPlacePopup.enableValidation();
formValidationPlacePopup.enableValidation();

const popupFormsArr = Array.from(popupForms);

popupFormsArr.forEach((form) => {
  form.addEventListener('submit', () => resetForm(form));
});

function resetForm(form) {
  const inputs = form.querySelectorAll('.popup__input');
  const inputsArr = Array.from(inputs);
  const button = form.querySelector('.popup__save-button');
  button.disabled = true;
  inputsArr.forEach((input) => {
    input.value = '';
  });
  
}



export { openPopup };
