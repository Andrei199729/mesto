class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector),
            this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', (evt) => this._closeWindowPopup(evt));
    }

    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        };
    }

    _closeWindowPopup(evt) {
        if (evt.target == this._popup) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-btn').addEventListener('click', () => this.close());
        this._popup.addEventListener('click', (evt) => this._closeWindowPopup(evt));
    }
}

export default Popup;