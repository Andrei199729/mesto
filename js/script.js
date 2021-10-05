const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
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
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}
popupOpenBtn.addEventListener('click', openPopup);

// Form submit отправляет форму

function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup()
}
form.addEventListener('submit', submitForm);