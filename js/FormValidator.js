class FormValidator {
    constructor(config, formName) {
        this._config = config;
        this._formName = formName;
    }

    // Включение валидации
    enableValidation() {
        const forms = [...document.querySelectorAll(this._config.formSelector)];
        forms.forEach((form) =>  this._setFormListener(form, this._config));
    }

    // Работа поля валидации
    _setFormListener(form, config) {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);
        form.addEventListener('submit', (evt) => this._handleSubmit(evt));
        form.addEventListener('input', () => this.disableSubmitButton(form, config, button));
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => this._handleFieldValidation(inputElement, form, config));
        });
        this.disableSubmitButton(form, config, button);
    }

    // Проверка submit, если input валидны или нет.
    disableSubmitButton(form, config, button) {
        button.disabled = !form.checkValidity();
        button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
    }

    // Отмена действия события по умолчанию
    _handleSubmit(evt) {
        evt.preventDefault();
    }

    // Проверка input на корректность введённых данных и вызывает _hideInputError и _showInputError.
    _handleFieldValidation(input, form, config) {
        if (!input.validity.valid) {
            this._showInputError(input, form, config);
        } else {
            this._hideInputError(input, form, config);
        }
    }

    // Функция покажет ошибку под полем.
    _showInputError(input, form, config) {
        const errorElement = form.querySelector(`#${input.id}-error`);
        input.classList.add(config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
    }

    _hideInputError(input, form, config) {
        const errorElement = form.querySelector(`#${input.id}-error`);
        input.classList.remove(config.inputErrorClass);
        errorElement.textContent = '';
    }

    hideErrors(parent) {
        const inputs = parent.querySelectorAll('form__input');
        const form = parent.querySelector('form');
        inputs.forEach(input => {
            this._hideError(input, form, config);
        });
    }
}

export default FormValidator;