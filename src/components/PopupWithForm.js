import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(config, popupSelector, { formSubmit }, retreiveData = null) {
        super(popupSelector),
            this._config = config,
            this._formSubmit = formSubmit,
            this._form = this._popup.querySelector(this._config.formSelector),
            this._inputList = [...this._form.querySelectorAll(this._config.inputSelector)],
            this._submitForm = this._submitForm.bind(this),
            this._handleRetreive = retreiveData
    }

    open = () => {
        if (this._handleRetreive) {
            const data = this._handleRetreive();
            this._inputList.forEach((input) => {
                input.value = data[input.name];
            });
        }
        super.open();
    }

    close() {
        super.close()
        this._form.reset();
    }

    _getInputValues() {
        const dataInputsValue = {};
        this._inputList.forEach((input) => {
            dataInputsValue[input.name] = input.value;
        });
        return dataInputsValue;
    }

    _submitForm(evt) {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => this._submitForm(evt));
    }
}

export default PopupWithForm;