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
import { config } from '../utils/constants.js';

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    popups.forEach((popup) => popup.classList.add('popup_transition'));
});

const popupWithImage = new PopupWithImage('.popup_view-image');

const section = new Section({
    items: initialCards, renderer: (input) => section.addItem(createCard(input.name, input.link))
}, '.elements');

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

// Валидация
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorCard = new FormValidator(config, formCard);
formValidatorCard.enableValidation();
section.rendererItem();


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
        submitHandlerCard(input);
    }
});
addCardSubmit.setEventListeners();

function submitHandler(input) {
    userInfo.setUserInfo(input.nametype, input.job);
}

function submitHandlerCard(input) {
    section.addItem(createCard(input.card, input.link));
}

function createCard(name, link) {
    const cardCreate = new Card(config, { name, link }, templateCard, popupWithImage.open);
    const cardElement = cardCreate.generateCard();
    return cardElement;
}