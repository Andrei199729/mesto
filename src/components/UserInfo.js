class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._name = document.querySelector(nameSelector),
            this._about = document.querySelector(aboutSelector)
    }

    getUserInfo() {
        const data = { name: this._name.textContent, about: this._about.textContent };
        return data;
    }

    get ID() {
        return this.id;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this.id = data._id;
    }
}

export default UserInfo;