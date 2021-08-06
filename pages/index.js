import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/popupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/popupWithImage.js';
import Popup from '../components/Popup.js';


/// ОБЪЯВЛЯЕМ ПЕРЕМЕННЫЕ
// const popups = document.querySelectorAll('.popup');
// const profilePopup = document.querySelector('#profile-popup');
// const placePopup = document.querySelector('#place-popup');
// const popupImageZoom = document.querySelector('#image-zoom');
const profilePopupButton = document.querySelector('#open_popup');
// const closePopupButton = document.querySelector('.popup__close-button');
const placeOpenPopupButton = document.querySelector('#place-open-popup_button');
// const placeCloseButton = document.querySelector('#place_close-button');
// const imageZoomCloseButton = document.querySelector('.popup__image-close-button');
const nameInput = document.querySelector('#name_input');
const jobInput = document.querySelector('#job_input');
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('#popup_form');
const cardsForm = document.querySelector('#popup-cards__form');
const profileForm = document.querySelector('#popup_form');
// const cardTitleInput = document.querySelector('#card-title_input');
// const cardImageLinkInput = document.querySelector('#card-link-input');
const cardsContainer = document.querySelector('.cards__container');
// const cardTemplate = document.querySelector('#card-template').content;
const popupForms = document.querySelectorAll('.popup__form');
// const cardSelector = document.querySelector('#card-template');
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
const popupWithImage = new PopupWithImage('#image-zoom');
popupWithImage.setEventListeners();

const popupProfile = new Popup('#profile-popup');
const popupPlace = new Popup('#place-popup');
popupProfile.setEventListeners();
popupPlace.setEventListeners();

const createCard = (name, link) => {

  console.log(name)
  console.log(link)
  
  const card = new Card({ 
    name: name, 
    link: link,
    zoomedImage: () => {
      popupWithImage.open(name, link)
  }}, '#card-template');

  return card.generateCard();
}
 
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
   const cardElement = createCard(item.name, item.link)
    cardList.addItem(cardElement);
    },
  },
  cardsContainer
);
cardList.renderItems();


/// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
// function openPopup(popup) {
//   popup.classList.add('popup_visible');
//   document.addEventListener('keydown', closePopupbyEscape);
// }

/// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
// function closePopup(popup) {
//   popup.classList.remove('popup_visible');
//   document.removeEventListener('keydown', closePopupbyEscape);
// }

/// ФУНКЦИЯ ПОЛУЧЕНИЯ ДАННЫХ ПОПАПА ПРОФИЛЯ ИЗ ИНПУТОВ

const userInfo = new UserInfo('.profile__name', '.profile__description');
const handleProfileFormSubmit = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name; 
  jobInput.value = userData.profession; 
  popupProfile.close();
}

const userFormPopup = new PopupWithForm('#profile-popup', {
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});
userFormPopup.setEventListeners();

const placeFormPoup = new PopupWithForm ('#place-popup', {
  formSubmit: (item) => {
    console.log(item)
    console.log(item)
    console.log(item.link)

    const cardElement = createCard(item.name, item.link);
    cardList.addItem(cardElement);
  }
})
placeFormPoup.setEventListeners();

const handlePlaceFormSubmit = () => {
  popupPlace.close();
}

// const popupCardForm = new PopupWithForm('.popup_type_add-card', {
//   formSubmit: (data) => {
//     const cardElement = createCard(data.name, data.link);
//     cardList.addItem(cardElement);
//   }
// });

// popupCardForm.setEventListeners();

// const handlePopupAddCard = () => {
//   resetAddForm(formAdd);
//   popupCardForm.open();
// };



/// ФУНКЦИЯ ПОЛУЧЕНИЯ ДАННЫХ ИЗ ИНПУТОВ ПОПАПА КАРТОЧКИ
// function handlePlaceFormSubmit(evt) {
//   evt.preventDefault();
//   const newCard = {
//     name: cardTitleInput.value,
//     link: cardImageLinkInput.value,
//   };
//   // addItem(newCard);
//   cardList.addItem(newCard);
//   popupPlace.close();
// }

/// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА КНОПКОЙ ESC
// function closePopupbyEscape(evt) {
//   if (evt.key === 'Escape') {
//     const showPopup = document.querySelector('.popup_visible');
//     closePopup(showPopup);
//   }
// }
// popups.forEach((popupElement) =>
//   popupElement.addEventListener('mousedown', function (evt) {
//     if (evt.target === evt.currentTarget) {
//       closePopup(popupElement);
//     }
//   })
// );

///// СЛУШАТЕЛИ КЛИКОВ

/// Слушатель открытия попапа профиля
// profilePopupButton.addEventListener('click', function () {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   popupProfile.open();
// });

// Cлушатель закрытия попапа профиля
// closePopupButton.addEventListener('click', () => popupProfile.close());
profilePopupButton.addEventListener('click', () => popupProfile.open());
// Cлушатель открытия попапа добавления карточки на странницу
placeOpenPopupButton.addEventListener('click', () => popupPlace.open());

// Слушатель закрытия попапа добавления карточки на страницу
// placeCloseButton.addEventListener('click', () => popupPlace.close());

// Слушатель закрытия попапа зума фото
// imageZoomCloseButton.addEventListener('click', () =>
//   closePopup(popupImageZoom)
// );

// Слушатели отправки форм
formElement.addEventListener('submit', handleProfileFormSubmit);
cardsForm.addEventListener('submit', handlePlaceFormSubmit);

// Вызов функции валидации формы
formValidationProfilePopup.enableValidation();
formValidationPlacePopup.enableValidation();

const popupFormsArr = Array.from(popupForms);

popupFormsArr.forEach((form) => {
  
  form.addEventListener('submit', () => resetForm(form));
});

function resetForm(form) {
  const button = form.querySelector('.popup__save-button');
  button.disabled = true;
  form.reset()
}
