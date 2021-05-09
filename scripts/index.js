/// создаем переменные
const popup = document.querySelector('.popup');
const nameInput = document.getElementById('name_input');
const jobInput = document.getElementById('job_input');
const openPopupButton = document.getElementById('open_popup');

/// пишем функцию добавления класса и достаем данные инпута 
function openPopup(){
  popup.classList.add('popup_visible');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;// что с чем когда
}

// добавляем слушателя чтобы по клику попап открылся 
openPopupButton.addEventListener('click', openPopup);



// закрытие попапа
// создать переменную 
const closePopupButton = document.querySelector('.popup__close-button');

// написать функцию снятия класса при закрытия попапа 
function closePopup(){
  popup.classList.remove('popup_visible')
}

// добавляем слушателя клика на кнопку закрытия
closePopupButton.addEventListener('click', closePopup);



// создаем функцию чтобы данные введеные в инпут отображались на странице
// создаем переменные 
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.getElementById('popup_form');

// создаем функцию передечи данных инпута на страницу 
function formSubmitHandler(evt) {
   evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
     closePopup();
     }

// вызываем функцию
formElement.addEventListener('submit', formSubmitHandler);

// создаем функцию открытия второго попапа 
// создаем переменные 
const placePopup = document.getElementById('place-popup');
const placeNameInput = document.getElementById('popup__input_name_title-card');
const placeLinkInput = document.getElementById('popup__input_name_link-card');
const placeOpenPopupButton = document.getElementById('place-open-popup_button');

// пишем функцию открытия второго попапа

function placeOpenPopup(){
  placePopup.classList.add('popup_visible')
}

// добавляем слушателя клика 
placeOpenPopupButton.addEventListener('click', placeOpenPopup);

// пишем функцию закрытия второго попапа
// создаем переменные 

const placeCloseButton = document.getElementById('place_close-button');
// пишем функцию закрытия попапа
function placeClosePopup(){
  placePopup.classList.remove('popup_visible')
}

// вешаем слушатель клика
placeCloseButton.addEventListener('click',placeClosePopup);
const popupImageZoom = document.getElementById('image-zoom');
const imageZoomCloseButton = document.querySelector('.popup__image-close-button');
function imageZoomClose(){
  popupImageZoom.classList.remove('popup_visible');
}
imageZoomCloseButton.addEventListener('click',imageZoomClose);
/// Создаем карточки
//const cardsTemplate = document.getElementById('cards-template');

const initialCards = [
  {
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// создадим переменную для контейнера
const cardsContainer = document.querySelector('.cards__container');

function makeCard(name,link){
  const cardTemplate = document.getElementById('card-template').content;
  const card = cardTemplate.querySelector('.cards__items').cloneNode(true);
  const cardLink = document.querySelector('.cards__image');
  const cardDeleteButton = card.querySelector('.cards__delete-button');
  card.querySelector('.cards__title').textContent = name;
  card.querySelector('.cards__image').src = link;
  cardDeleteButton.addEventListener('click', function(e) {
    e.target.closest('.cards__items').remove()
  })
  
  // ЗУМ ФОТО
  const popupImageZoom = document.getElementById('image-zoom');
  const zoomedPicture = document.querySelector('.popup__image');
  const imageCaptionZoom = document.querySelector('.popup__image-caption');
  const imageZoomCloseButton = document.querySelector('.popup__image-close-button');
  card.querySelector('.cards__image').addEventListener('click', function(e){
    imageCaptionZoom.textContent = name;
    zoomedPicture.src = link;
    popupImageZoom.classList.add('popup_visible');
  });
  
  
/// лайк карточки 
 const likeButton = card.querySelector('.cards__like-button');
 likeButton.addEventListener('click', function(e){
  e.target.classList.toggle('cards__like-button_active');
 }) 
  return card;

}

makeCard();
initialCards.forEach(function(item){
  cardsContainer.append(makeCard(item.name,item.link))
});


/// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
// создаем переменные - контейнеры

const cardSaveButton = document.getElementById('card_submit');
const cards = document.querySelector('.cards');
const cardsForm = document.getElementById('popup-cards__form');
// ПИШЕМ ФУНКЦИЮ ПРИЯТИЯ ЗНАЧЕНИЙ ИНПУТОВ 
function addNewCard(evt){
  evt.preventDefault();
  const cardTitleInput = document.getElementById('card-title_input');
  const cardImageLinkInput = document.getElementById('card-link-input');
  cardsContainer.prepend(makeCard(cardTitleInput.value, cardImageLinkInput.value));
  placeClosePopup();

}
cardsForm.addEventListener('submit', addNewCard);

//ЗУМ КАРТОЧКИ
// функция открытия попапа по клику



