import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  profilePopupButton,
  placeOpenPopupButton,
  nameInput,
  jobInput,
  cardsForm,
  profileForm,
  cardsContainer,
  initialCards,
  config,
} from '../utils/constants.js';

const formValidationProfilePopup = new FormValidator(config, profileForm);
const formValidationPlacePopup = new FormValidator(config, cardsForm);
formValidationProfilePopup.enableValidation();
formValidationPlacePopup.enableValidation();

const popupWithImage = new PopupWithImage('#image-zoom');
popupWithImage.setEventListeners();

const createCard = (name, link) => {
  const card = new Card(
    {
      name: name,
      link: link,
      zoomedImage: () => {
        popupWithImage.open(name, link);
      },
    },
    '#card-template'
  );

  return card.generateCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link);
      cardList.addItem(cardElement);
    },
  },
  cardsContainer
);
cardList.renderItems();

const userInfo = new UserInfo('.profile__name', '.profile__description');
const popupUserForm = new PopupWithForm('#profile-popup', {
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});
popupUserForm.setEventListeners();

const handleOpenProfilePopup = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupUserForm.open();
};

const placeFormPopup = new PopupWithForm('#place-popup', {
  formSubmit: (item) => {
    const cardElement = createCard(item.name, item.link);
    cardList.addItem(cardElement);
    formValidationPlacePopup.resetFormError();
  },
});
placeFormPopup.setEventListeners();

profilePopupButton.addEventListener('click', handleOpenProfilePopup);
placeOpenPopupButton.addEventListener('click', () => placeFormPopup.open());

