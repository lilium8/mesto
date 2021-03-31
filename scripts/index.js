const popup = document.querySelector('.popup');
const openPopupButton = document.getElementById('open_popup');
const closePopupButton = document.getElementById('close_popup');
let saveButton = document.getElementById ('save-button');
let formElement = document.getElementById('popup_form');
let nameInput = document.getElementById('name_input');
let jobInput = document.getElementById('job_input');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function openPopup (){
    popup.classList.add('popup_visible');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent; 
}

openPopupButton.addEventListener ('click', openPopup);
function closePopup (){
    popup.classList.remove('popup_visible');
}

closePopupButton.addEventListener ('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
  }

formElement.addEventListener('submit', formSubmitHandler);



