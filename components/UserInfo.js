export default class UserInfo {
    constructor(userNameSelector, userInfoSelector) {
        this._userName = userNameSelector;
        this._userInfo = userInfoSelector;
    }

    getUserInfo(){
        this._user = {
        name: this._userName.textContent,
        about: this._userInfo.textContent
        }
        return user;
    }

    setUserInfo(name, profession) {
        this._userName.textContent = name;
        this._userInfo.textContent = profession
    }
}








// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится 
// когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.