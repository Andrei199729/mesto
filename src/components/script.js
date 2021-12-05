import '../pages/index.css';
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const popups = [...document.querySelectorAll('.popup')];
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
const popupViewImage = document.querySelector('.popup_view-image');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const viewImagePicture = document.querySelector('.view-image__picture');
const viewCaption = document.querySelector('.view-image__caption');
const elements = document.querySelector('.elements');
const templateCard = document.querySelector('#card-template').content;
const formEdit = document.forms.formprofile;
const formCard = document.forms.formcard;
const nameInput = formEdit.elements.nametype;
const jobInput = formEdit.elements.job;
const cardNameInput = formCard.elements.card;
const linkInput = formCard.elements.link;
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
}];
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
    popupAddCard
};

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    popups.forEach((popup) => popup.classList.add('popup_transition'));
});

const section = new Section({
    items: initialCards, renderer: (item) => {
        const card = new Card(config, item, templateCard, handleCardClick);
        const cardElement = card.generateCard();
        section.addItem(cardElement);
    }
}, elements);

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
const userInfoTitle = new UserInfo(profileTitle, profileSubtitle);
const userInfoInput = new UserInfo(nameInput, jobInput);

// Валидация
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorCard = new FormValidator(config, formCard);
formValidatorCard.enableValidation();
section.rendererItem();

// Функция handleCardClick открывает изображение. 
function handleCardClick(item) {
    const popupWithImage = new PopupWithImage(popupViewImage);
    popupWithImage.open(item);
}

// Открытие popup редактирования профиля
function openEditprofile() {
    editProfileSubmit.open();
    userInfoInput.getUserInfo(profileTitle, profileSubtitle);
    formValidatorEdit.resetValidation();
}
popupEditProfileBtn.addEventListener('click', openEditprofile);

// Открытие popup добавления карточек
function openPopupAddCard() {
    addCardSubmit.open();
    formValidatorCard.resetValidation();
}
popupAddCardBtn.addEventListener('click', openPopupAddCard);

// Редактирование данных пользователя
const editProfileSubmit = new PopupWithForm(config, popupEditProfile, {
    formSubmit: () => {
        userInfoTitle.setUserInfo(nameInput, jobInput);
        editProfileSubmit.setEventListeners();
    }
});

// Добавление карточек
const addCardSubmit = new PopupWithForm(config, popupAddCard, {
    formSubmit: () => {
        const cardObj = {
            name: cardNameInput.value,
            link: linkInput.value
        };
        const card = new Card(config, cardObj, templateCard, handleCardClick);
        const cardElement = card.generateCard();
        section.addItem(cardElement);
        addCardSubmit.reset();
    }
});


