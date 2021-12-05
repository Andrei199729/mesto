class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = selectorPopup
    }

    open() {
        this._selectorPopup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._selectorPopup.classList.remove('popup_opened');
        window.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        window.removeEventListener('click', (evt) => this._closeWindowPopup(evt));
    }

    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        };
    }

    _closeWindowPopup(evt) {
        if (evt.target == this._selectorPopup) {
            this.close();
        }
    }

    setEventListeners() {
        this._selectorPopup.querySelector('.popup__close-btn').addEventListener('click', () => this.close());
        window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        window.addEventListener('click', (evt) => this._closeWindowPopup(evt));
    }
}

export default Popup;