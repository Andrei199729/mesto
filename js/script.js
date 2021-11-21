import FormValidator from './FormValidator.js';
import Card from './Card.js';
const popups = [...document.querySelectorAll('.popup')];
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
const popupCloseBtnEdit = document.querySelector('.popup__close-btn-edit');
const popupCloseAddCard = document.querySelector('.popup__close-btn-add');
const popupCloseViewImageBtn = document.querySelector('.popup__close-btn_view-image');
const popupViewImage = document.querySelector('.popup_view-image');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const viewImagePicture = document.querySelector('.view-image__picture');
const viewCaption = document.querySelector('.view-image__caption');
const elements = document.querySelector('.elements');
const templateCard = document.querySelector('#card-template').content;
const formEdit = document.forms.formprofile;
const nameInput = formEdit.elements.nametype;
const jobInput = formEdit.elements.job;
const formCard = document.forms.formcard;
const cardNameInput = formCard.elements.card;
const linkInput = formCard.elements.link;

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    popups.forEach((popup) => popup.classList.add('popup_transition'));
});

// Закрытие оверлей

function closeWindowPopup(evt) {
    popups.forEach((popup) => {
        if (evt.target == popup) {
            closePopup(popup);
        }
    });
}

// Закрытие нажатием на Esc
function closeEscPopup(evt) {
    if (evt.key == 'Escape') {
        popups.filter((popup) => popup.classList.contains('popup_opened')).forEach(popup => {
            closePopup(popup);
        });
    };
}

// Закрытие popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    window.removeEventListener('click', closeWindowPopup);
    window.removeEventListener('keydown', closeEscPopup);
}

// Закрытие popup редактирования профиля
function closePopupEditBtn() {
    closePopup(popupEditProfile);
}
popupCloseBtnEdit.addEventListener('click', closePopupEditBtn);

// Закрытие popup добаавления карточек
function closePopupAddCard() {
    closePopup(popupAddCard);
}
popupCloseAddCard.addEventListener('click', closePopupAddCard);

// Закрытие popup увеличенных изображений 
function closePopupViewImage() { 
    closePopup(popupViewImage); 
} 
popupCloseViewImageBtn.addEventListener('click', closePopupViewImage); 

// Открытие popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    window.addEventListener('click', closeWindowPopup);
    window.addEventListener('keydown', closeEscPopup);
}

// Открытие popup редактирования профиля
function openEditprofile() {
    openPopup(popupEditProfile);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    formValidatorEdit.resetValidation(popupEditProfile);
}
popupEditProfileBtn.addEventListener('click', openEditprofile);

// Открытие popup добаавления карточек
function openPopupAddCard() {
    openPopup(popupAddCard);
    formValidatorCard.resetValidation(popupAddCard);
}
popupAddCardBtn.addEventListener('click', openPopupAddCard);

// Form submit отправляет форму
function editProfileSubmit(event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEditProfile);
}
formEdit.addEventListener('submit', editProfileSubmit);

function addCardSubmit(evt) {
    evt.preventDefault();
    const link = linkInput.value;
    const name = cardNameInput.value;
    const card = { name, link };
    const newCard = createCard(card);
    prependCard(newCard);
    closePopup(popupAddCard);
    evt.target.reset();
}
formCard.addEventListener('submit', addCardSubmit);

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    }, {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    }, {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    }, {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    }, {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Валидация

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible',
    viewImagePicture,
    viewCaption,
    popupViewImage,
};

function createCard(item) {
    const card = new Card(config, item, templateCard, openPopup, closePopup);
    const cardElement = card.generateCard();
    return cardElement;
}

function prependCard(card) {
    elements.prepend(card);
}

initialCards.forEach((item) => {
    const card = createCard(item);
    prependCard(card);
});

const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorCard = new FormValidator(config, formCard);
formValidatorCard.enableValidation();