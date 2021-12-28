class Api {
    constructor({ address, token }) {
        this.address = address,
            this.token = token
    }

    _getResponseData() {
        return (res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`)));
    }
    getInitialCards() {
        return fetch(`${this.address}/cards`, {
            headers: {
                authorization: this.token
            }
        })
            .then(this._getResponseData());
    }

    aboutUser() {
        return fetch(`${this.address}/users/me`, {
            headers: {
                authorization: this.token
            }
        })
            .then(this._getResponseData())
    }

    editProfile(data) {
        return fetch(`${this.address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._getResponseData())
    }

    addNewCards(data) {
        return fetch(`${this.address}/cards`, {
            method: 'POST',
            headers: {
                'authorization': `${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._getResponseData())
    }

    deleteCard(dataId) {
        return fetch(`${this.address}/cards/${dataId}`, {
            method: 'DELETE',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponseData())
    }

    addlike(dataId) {
        return fetch(`${this.address}/cards/${dataId}/likes`, {
            method: 'PUT',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponseData())
    }

    removeLike(dataId) {
        return fetch(`${this.address}/cards/${dataId}/likes`, {
            method: 'DELETE',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponseData())
    }
    updateAvatar(data) {
        return fetch(`${this.address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.link
            })
        })
            .then(this._getResponseData())
    }
}

export default Api;