import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(config, selectorPopup, { formSubmit }) {
        super(selectorPopup),
            this._config = config,
            this._formSubmit = formSubmit,
            this._form = selectorPopup.querySelector(this._config.formSelector)
    }

    reset() {
        this._form.reset();
    }

    _getInputValues(event) {
        event.preventDefault();
        const allInput = [...this._form.querySelectorAll(this._config.inputSelector)];
        allInput.reduce((accum, input) => {
            accum[input.name] = input.value;
            return accum;
        }, {});
        super.close();
    }

    _submitForm() {
        this._formSubmit();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => this._getInputValues(event));
        this._form.addEventListener('submit', () => this._submitForm());
    }
}

export default PopupWithForm;