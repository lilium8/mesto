export default class UserInfo {
    constructor(userNameSelector, userInfoSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo(){
        const user = {
        name: this._userName.textContent,
        job: this._userInfo.textContent
        }
        return user;
    }

    setUserInfo( data ) {

        console.log(data)
        console.log({
            name: data.name,
            profession: data.profession
        })
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.job;
    }
}




// export default class UserInfo {
//     constructor({ name, about, avatar }) {
//       this._nameSelector = name;
//       this._aboutSelector = about;
//       this._avatarSelector = avatar;
//       this._name = document.querySelector(this._nameSelector);
//       this._about = document.querySelector(this._aboutSelector);
//       this._avatar = document.querySelector(this._avatarSelector);
//     }
  
//     getUserInfo() {
//       this._userInfo = {};
//       this._userInfo.name = this._name.textContent;
//       this._userInfo.about = this._about.textContent;
//       return this._userInfo;
//     }
  
//     setUserInfo(data) {
//       this._name.textContent = data.name;
//       this._about.textContent = data.about;
//       this._avatar.src = data.avatar;
//     }
//   }



// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится 
// когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.