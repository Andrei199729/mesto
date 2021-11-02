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
    const button = form.querySelector(config.submitButtonSelector);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => handleFieldValidation(inputElement, form, config));
    });
    setSubmitButtonState(form, config, button);
}

// Проверка submit, если input валидны или нет.
function setSubmitButtonState(form, config, button) {
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

function hideError(input, form, config) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
}

function hideErrors(parent) {
    const inputs = parent.querySelectorAll('form__input');
    const form = parent.querySelector('form');
    inputs.forEach(input => {
        hideError(input, form, config);
    });
}