import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    open(card) {
        super.open();
        this._selectorPopup.querySelector('.view-image__picture').src = card.link;
        this._selectorPopup.querySelector('.view-image__picture').alt = card.name;
        this._selectorPopup.querySelector('.view-image__caption').textContent = card.name;
    }
}

export default PopupWithImage;