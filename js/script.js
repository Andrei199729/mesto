const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__btn_edit');
const popupCloseBtn = document.querySelector('.popup__btn_close');
const inputName = document.querySelector('.form__input_name');
const inputDoer = document.querySelector('.form__input_doer');
const form = document.querySelector('.form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// Model close
function closePopup() {
    popup.classList.remove('popup__opened');
}
popupCloseBtn.addEventListener('click', closePopup);

// Popup open

function openPopup() {
    popup.classList.add('popup__opened');
}
popupOpenBtn.addEventListener('click', openPopup);

// Form submit

function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputDoer.value;
}
form.addEventListener('submit', closePopup);
form.addEventListener('submit', submitForm);