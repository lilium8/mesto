/// ОБЪЯВЛЯЕМ ПЕРЕМЕННЫЕ
const profilePopup = document.querySelector('#profile-popup'); // попап профиля
const placePopup = document.querySelector('#place-popup'); //попап места
const popupImageZoom = document.querySelector('#image-zoom'); //попап увеличения картинки
const profilePopupButton = document.querySelector('#open_popup'); // кнопка открытия попапа профиля
const closePopupButton = document.querySelector('.popup__close-button'); // кнопка закрытия попапа профиля
const placeOpenPopupButton = document.querySelector('#place-open-popup_button'); // кнопка открытия попапа добавления карточки
const placeCloseButton = document.querySelector('#place_close-button'); // кнопка закрытия попапа добавления карточки 
const imageZoomCloseButton = document.querySelector('.popup__image-close-button'); // кнопка закрытия попапа зума фото
const nameInput = document.querySelector('#name_input'); 
const jobInput = document.querySelector('#job_input'); 
const cardTemplate = document.querySelector('#card-template').content;
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('#popup_form');
const placeNameInput = document.querySelector('#popup__input_name_title-card');
const placeLinkInput = document.querySelector('#popup__input_name_link-card');
const cardSaveButton = document.querySelector('#card_submit');
const cards = document.querySelector('.cards');
const cardsForm = document.querySelector('#popup-cards__form');
const cardsContainer = document.querySelector('.cards__container');




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
    closePopup();
};


// Огромная функция всего
function makeCard(name,link){
  
  const card = cardTemplate.querySelector('.cards__items').cloneNode(true);
  const cardDeleteButton = card.querySelector('.cards__delete-button');
  card.querySelector('.cards__title').textContent = name;
  card.querySelector('.cards__image').src = link;
  card.querySelector('.cards__image').alt = name;
  cardDeleteButton.addEventListener('click', function(e) {
    e.target.closest('.cards__items').remove()
  })
  
  // ЗУМ ФОТО
  const imageCaptionZoom = document.querySelector('.popup__image-caption');
  const imageZoomCloseButton = document.querySelector('.popup__image-close-button');
  const zoomedPicture = document.querySelector('.popup__image');
  card.querySelector('.cards__image').addEventListener('click', function(e){
    imageCaptionZoom.textContent = name;
    zoomedPicture.alt = name;
    zoomedPicture.src = link;
    popupImageZoom.classList.add('popup_visible');
  });
  
  
/// лайк карточки 
 const likeButton = card.querySelector('.cards__like-button');
 likeButton.addEventListener('click', function(e){
  e.target.classList.toggle('cards__like-button_active');
 }) 
  return card;

};

// Функция передачи данных инпутов
function addNewCard(evt){
  evt.preventDefault();
  const cardTitleInput = document.querySelector('#card-title_input');
  const cardImageLinkInput = document.querySelector('#card-link-input');
  cardsContainer.prepend(makeCard(cardTitleInput.value, cardImageLinkInput.value));
  cardsForm.reset();
  closePopup(placePopup);
  
};

/// СЛУШАТЕЛИ КЛИКОВ

// Слушатель открытия попапа профиля
profilePopupButton.addEventListener('click', function(){
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// Cлушатель закрытия попапа профиля
closePopupButton.addEventListener('click', function(){
  closePopup(profilePopup)
});

// Cлушатель открытия попапа добавления карточки на странницу
placeOpenPopupButton.addEventListener('click', function(){
  openPopup(placePopup)
});

// Слушатель закрытия попапа добавления карточки на страницу 
placeCloseButton.addEventListener('click', function(){
  closePopup(placePopup)
});

// Слушатель закрытия попапа зума фото

imageZoomCloseButton.addEventListener('click', function(){
  closePopup(popupImageZoom)
});

// Слушатели отправки форм
formElement.addEventListener('submit', formSubmitHandler);
cardsForm.addEventListener('submit', addNewCard);




