import '../pages/index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    popups, initialCards, nameInput, jobInput, formEdit, formCard, templateCard, popupEditProfileBtn, popupAddCardBtn
} from '../utils/constants.js';

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible'
};

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    popups.forEach((popup) => popup.classList.add('popup_transition'));
});

const popupWithImage = new PopupWithImage('.popup_view-image');

const section = new Section({
    items: initialCards, renderer: createCard
}, '.elements');

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

// Валидация
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorCard = new FormValidator(config, formCard);
formValidatorCard.enableValidation();
section.rendererItem();

function createCard(item) {
    const card = new Card(config, item, templateCard, popupWithImage.open);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    return section;
}
popupWithImage.setEventListeners();

// Открытие popup редактирования профиля
function openEditprofile() {
    editProfileSubmit.open();
    formValidatorEdit.resetValidation();
    formValidatorEdit.addSubmitButton();
    const getUserInfo = userInfo.getUserInfo();
    nameInput.value = getUserInfo.name;
    jobInput.value = getUserInfo.about;
}
popupEditProfileBtn.addEventListener('click', openEditprofile);

// Открытие popup добавления карточек
function openPopupAddCard() {
    addCardSubmit.open();
    formValidatorCard.resetValidation();
}
popupAddCardBtn.addEventListener('click', openPopupAddCard);

// Редактирование данных пользователя
const editProfileSubmit = new PopupWithForm(config, '.popup_edit-profile', {
    formSubmit: (input) => {
        submitHandler(input);
    }
});
editProfileSubmit.setEventListeners();

// Добавление карточек
const addCardSubmit = new PopupWithForm(config, '.popup_add-card', {
    formSubmit: (input) => {
        createCard({ name: input.card, link: input.link });
    }
});
addCardSubmit.setEventListeners();

function submitHandler(input) {
    userInfo.setUserInfo(input.nametype, input.job);
}