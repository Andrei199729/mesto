class FormValidator {
    constructor(config, formName) {
        this._config = config;
        this._formName = formName;
        this._inputList = [...formName.querySelectorAll(config.inputSelector)];
        this._submitButton = formName.querySelector(config.submitButtonSelector);;
    }

    // Включение валидации
    enableValidation() {
        this._setFormListener();
    }

    // Работа поля валидации
    _setFormListener() {
        this._formName.addEventListener('submit', (evt) => this._handleSubmit(evt));
        this._formName.addEventListener('input', () => this.disableSubmitButton());
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => this._handleFieldValidation(inputElement));
        });
        this.disableSubmitButton();
    }

    // Проверка submit, если input валидны или нет.
    disableSubmitButton() {
        this._submitButton.disabled = !this._formName.checkValidity();
        this._submitButton.classList.toggle(this._config.inactiveButtonClass, !this._formName.checkValidity());
    }

    // Отмена действия события по умолчанию
    _handleSubmit(evt) {
        evt.preventDefault();
    }

    // Проверка input на корректность введённых данных и вызывает _hideInputError и _showInputError.
    _handleFieldValidation(input) {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    }

    // Функция покажет ошибку под полем.
    _showInputError(input) {
        const errorElement = this._formName.querySelector(`#${input.id}-error`);
        input.classList.add(this._config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
    }

    _hideInputError(input) {
        const errorElement = this._formName.querySelector(`#${input.id}-error`);
        input.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
    }

    resetValidation() {
        this.disableSubmitButton();
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
  
      }
}

export default FormValidator;