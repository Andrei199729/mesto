// Включение валидации
function enableValidation(validationConfig) {
    const forms = [...document.querySelectorAll(validationConfig.formSelector)];
    forms.forEach((form) => setFormListener(form, validationConfig));
};

// Работа поля валидации
function setFormListener(form, config) {
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', () => setSubmitButtonState(form, config));
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => handleFieldValidation(inputElement, form, config));
    });
    setSubmitButtonState(form, config);
}

// Проверка submit, если input валидны или нет.
function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}

// Отмена действия события по умолчанию
function handleSubmit(evt) {
    evt.preventDefault();
}

// Проверка input на корректность введённых данных и вызывает hideError и showError.
function handleFieldValidation(input, form, config) {
    if (!input.validity.valid) {
        showError(input, form, config);
    } else {
        hideError(input, form, config);
    }
}

// Функция покажет ошибку под полем.
function showError(input, form, config) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
}

// Функция скроет ошибку под полем.
function hideError(input, form, config) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
}

// Валидация input при открытии попуп, если заранее внесенныe данные.
function validInput(config) {
    const inputs = [...document.querySelectorAll('.form__input')];
    const btn = document.querySelector('.form__btn-close');
    inputs.forEach((input) => {
        if (input = '') {
            btn.disabled = true;
            btn.classList.add(config.inactiveButtonClass);
        } else {
            btn.disabled = false;
            btn.classList.remove(config.inactiveButtonClass);
        }
    });
}