import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector),
            this._cardImage = this._popup.querySelector('.view-image__picture')
    }
    open = (name, link) => {
        super.open();
        this._cardImage.src = link;
        this._cardImage.alt = name;
        this._popup.querySelector('.view-image__caption').textContent = name;
    }
}

export default PopupWithImage;