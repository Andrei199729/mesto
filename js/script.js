const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__btn_form_edit');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const form = document.querySelector('.form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// Model close
function closePopup() {
    popup.classList.remove('popup_opened');
}
popupCloseBtn.addEventListener('click', closePopup);

// Popup open

function openPopup() {
    popup.classList.add('popup_opened');
}
popupOpenBtn.addEventListener('click', openPopup);

// Form submit

function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = document.formprofile.name.value;
    profileSubtitle.textContent = document.formprofile.doer.value;
    closePopup()
}
form.addEventListener('submit', submitForm);