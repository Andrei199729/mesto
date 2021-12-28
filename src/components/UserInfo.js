class UserInfo {
    constructor(nameSelector, aboutSelector, avatar) {
        this._name = document.querySelector(nameSelector),
            this._about = document.querySelector(aboutSelector),
            this._avatar = document.querySelector(avatar)

    }

    getUserInfo() {
        return { name: this._name.textContent, about: this._about.textContent };
    }

    get ID() {
        return this.id;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this.id = data._id;
    }

    setUserAvatar(link) {
        this._avatar.src = link;
    }
}

export default UserInfo;