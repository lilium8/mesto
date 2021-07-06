export default class Card {
    constructor(data,cardContainer, cardTemplate){
        this.name = data.name;
        this.link = data.link;
        this._cardContainer = document.querySelector(cardContainer);
        this._cardImage = cardTemplate.cardImage;
        this._cardTitle = cardTemplate.cardTitle;
        this._cardLikeBtn = cardTemplate.cardLikeBtn;
        this._cardDeleteBtn = cardTemplate.cardDeleteBtn;
    }
    _getTemplate(){
        const cardElement = this._cardContainer.document
        .querySelector('.card-template')
        .content 
        .querySelector('.cards__items')
        .cloneNode('true')
        return cardElement
    }

    _likeCardHandler(){
        this._card.querySelector(this._cardLikeBtn).сlassList.toggle('cards__like-button_active"');
    }
 
    _deleteCardHandler(){
        this._card.remove();
    }
    _setEventListeners(){
        this._cardLikeBtn.addEventListener('click',() => this._likeCardHandler);
        this._cardDeleteBtn.addEventListener('click',() => this._deleteCardHandler);
    }

   generateCard(){
       this._card = this._getTemplate;
       this._setEventListeners();
       this._card.querySelector('.cards__image').scr = this._link;
       this._card.querySelector('cards__title').textContent = this._name;
       return this._element
   }
  
}

  
 