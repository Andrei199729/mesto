class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._name = document.querySelector(nameSelector),
            this._about = document.querySelector(aboutSelector)
    }

    getUserInfo() {
        const data = { name: this._name.textContent, about: this._about.textContent };
        return data;
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
}

export default UserInfo;