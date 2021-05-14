/// ОБЪЯВЛЯЕМ ПЕРЕМЕННЫЕ
const profilePopup = document.querySelector('#profile-popup'); 
const placePopup = document.querySelector('#place-popup'); 
const popupImageZoom = document.querySelector('#image-zoom'); 
const profilePopupButton = document.querySelector('#open_popup'); 
const closePopupButton = document.querySelector('.popup__close-button'); 
const placeOpenPopupButton = document.querySelector('#place-open-popup_button'); 
const placeCloseButton = document.querySelector('#place_close-button'); 
const imageZoomCloseButton = document.querySelector('.popup__image-close-button'); 
const nameInput = document.querySelector('#name_input'); 
const jobInput = document.querySelector('#job_input'); 
const cardTemplate = document.querySelector('#card-template').content;
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('#popup_form');
const cardsForm = document.querySelector('#popup-cards__form');
const cardsContainer = document.querySelector('.cards__container');
const cardTitleInput = document.querySelector('#card-title_input');
const cardImageLinkInput = document.querySelector('#card-link-input');
const imageCaptionZoom = document.querySelector('.popup__image-caption');
const zoomedPicture = document.querySelector('.popup__image');




/// ФУНКЦИИ 

//Открытие попапа
function openPopup(popup){
  popup.classList.add('popup_visible');
};

// Закрытие попапа
function closePopup(popup){
  popup.classList.remove('popup_visible')
};


// Передча данных инпутов на страницу
function formSubmitHandler(evt) {
  evt.preventDefault();
   profileName.textContent = nameInput.value;
   profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
};


// Функция создания карточки
function makeCard(name,link){
  const card = cardTemplate.querySelector('.cards__items').cloneNode(true);
  const cardDeleteButton = card.querySelector('.cards__delete-button');
  const likeButton = card.querySelector('.cards__like-button');
  const cardImage = card.querySelector('.cards__image');

  card.querySelector('.cards__title').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
 
  cardImage.addEventListener('click', () => zoomImage(name, link));
  likeButton.addEventListener('click',() => clickLikeButton(likeButton));
  cardDeleteButton.addEventListener('click', () => deleteCard(card));

  return card;
};

// Функция лайка
function clickLikeButton (likeButton){
  likeButton.classList.toggle('cards__like-button_active')
}

// Функция удаления карточки
function deleteCard (card){
  card.remove();
}

// Функция зума фото
function zoomImage (name, link){
  imageCaptionZoom.textContent = name;
    zoomedPicture.alt = name;
    zoomedPicture.src = link;
    openPopup(popupImageZoom);
}

// Функция передачи данных инпутов
function addNewCard(evt){
  evt.preventDefault();
  cardsContainer.prepend(makeCard(cardTitleInput.value, cardImageLinkInput.value));
  cardsForm.reset();
  closePopup(placePopup);
  
};

initialCards.forEach((item) => cardsContainer.append(makeCard(item.name,item.link)));
/// СЛУШАТЕЛИ КЛИКОВ

// Слушатель открытия попапа профиля
profilePopupButton.addEventListener('click', function(){
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

imageZoomCloseButton.addEventListener('click', ()=> closePopup(popupImageZoom));

// Слушатели отправки форм
formElement.addEventListener('submit', formSubmitHandler);
cardsForm.addEventListener('submit', addNewCard);




