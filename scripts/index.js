const popup = document.querySelector('.popup');
const OpenPopupButton = document.getElementById('open_popup');
const ClosePopupButton = document.getElementById('close_popup');
let SaveButton = document.getElementById ('save-button');
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

OpenPopupButton.addEventListener ('click', function() {
    openPopup();
});

function closePopup (){
    popup.classList.remove('popup_visible');
    console.log(popup)
}

ClosePopupButton.addEventListener ('click', function() {
    closePopup();
});


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
  }

formElement.addEventListener('submit', formSubmitHandler);



