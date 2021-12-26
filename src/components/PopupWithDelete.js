import Popup from "./Popup";

class PopupWithDelete extends Popup {
    constructor(popupSelector, handleConfirm) {
        super(popupSelector),
            this._confirmForm = document.forms.formcarddelete,
            this._handleConfirm = handleConfirm,
            this._submitButton = document.querySelector('.popup__delete-btn-close'),
            this._data = null
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._setSave();
        this._handleConfirm(this._data);
    }

    _setSave() {
        this._submitButton.textContent = 'Удаление...';
    }

    _resetSave() {
        this._submitButton.textContent = 'Да';
    }

    open(data) {
        this._data = data;
        this._resetSave();
        super.open();
    }

    close() {
        this._data = null;
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmForm.addEventListener('submit', this._handleSubmit);
    }
}

export default PopupWithDelete;
// И кстати ты сейчас очень легко можешь сделать UXфикацию этого попапа - тебе надо дописать два простых приватных метода: _setSave() { this._submitButton.textContent = 'Удаляю…'; } и _resetSave() { this._submitButton.textContent = 'Да'; },   и добавить их вызовы: _setSave() в _handlesubmit(evt) перед вызовом  _handleConfirm(data), а _resetSave() - в open() перед вызовом super.open()