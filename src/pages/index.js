import '../pages/index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import {
    popups, initialCards, nameInput, jobInput, formEdit, formCard, templateCard, popupEditProfileBtn, popupAddCardBtn, popupEditAvatar, formEditAvatar,
} from '../utils/constants.js';
import { config } from '../utils/constants.js';
import Api from '../components/Api';
import AvatarEdit from '../components/AvatarEdit';

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    popups.forEach((popup) => popup.classList.add('popup_transition'));

});

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-32',
    token: 'f0863dcb-641a-48c7-ae1b-e19e122bd627'
});

const popupWithDelete = new PopupWithDelete('.popup_delete', deleteCardApi);
popupWithDelete.setEventListeners();

Promise.all([api.aboutUser(), api.getInitialCards()])
    .then(([user, cards]) => {
        userInfo.setUserInfo(user);
        avatarEdit.setAvatar(user.avatar);
        section.rendererItem(cards, user._id);
    })
const popupWithImage = new PopupWithImage('.popup_view-image');

const section = new Section({
    renderer: (input, userId) => section.addItem(createCard(input, userId))
}, '.elements');

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const avatarEdit = new AvatarEdit('.profile__avatar');

// Валидация
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorCard = new FormValidator(config, formCard);
formValidatorCard.enableValidation();
const formValidatorEditAvatar = new FormValidator(config, formEditAvatar);
formValidatorEditAvatar.enableValidation();

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

// Открытие popup Avatar
function openPopupEditAvatar() {
    editAvatarSubmit.open();
    formValidatorEditAvatar.resetValidation();
}
popupEditAvatar.addEventListener('click', openPopupEditAvatar);

// Редактирование данных пользователя
const editProfileSubmit = new PopupWithForm(config, '.popup_edit-profile', {
    formSubmit: (input) => {
        submitHandler(input);
        api.editProfile({
            name: userInfo.getUserInfo().name,
            about: userInfo.getUserInfo().about
        })
            .then(result => userInfo.setUserInfo(result))
            .catch(err => console.log(err))
            .finally(() => {
                editProfileSubmit.close();
            })
    }
});
editProfileSubmit.setEventListeners();

// Добавление карточек
const addCardSubmit = new PopupWithForm(config, '.popup_add-card', {
    formSubmit: (input) => {
        api.addNewCards({
            name: input.card,
            link: input.link
        })
            .then(result => submitHandlerCard(result, userInfo.ID))
            .catch(err => console.log(err))
            .finally(() => {
                addCardSubmit.close()
            })
    }
});
addCardSubmit.setEventListeners();

function submitHandlerCard(data, userID) {
    section.addItem(createCard(data, userID));
}

// Добавление avatar
const editAvatarSubmit = new PopupWithForm(config, '.popup_avatar', {
    formSubmit: (input) => {
        api.updateAvatar({
            link: input.avatar
        })
            .then(result => submitHandlerAvatar(result))
            .catch(err => console.log(err))
            .finally(() => {
                editAvatarSubmit.close()
            })
    }
});
editAvatarSubmit.setEventListeners();

function submitHandler(input) {
    const data = { name: input.nametype, about: input.job }
    userInfo.setUserInfo(data);
}

function submitHandlerAvatar(input) {
    avatarEdit.setAvatar(input.avatar);
}

function createCard(card, userID) {
    const cardCreate = new Card(config, card, templateCard, popupWithImage.open, userID, { openPopupDelete }, handleLikeClick);
    const cardElement = cardCreate.generateCard();
    return cardElement;
}

// Удаление карточек
function deleteCardApi(data) {
    const { id, cleanup } = data;
    api.deleteCard(id)
        .then(() => cleanup())
        .catch(err => console.log(err))
        .finally(() => {
            popupWithDelete.close()
        })
}

// Открытие попапа
function openPopupDelete(data) {
    popupWithDelete.open(data);
}
// Лайк карточек
function handleLikeClick(card) {
    if (card.isLiked()) {
        api.removeLike(card._item._id)
            .then((result) => card.setLikes(result.likes))
            .catch(err => console.log(err))
    } else {
        api.addlike(card._item._id)
            .then((result) => card.setLikes(result.likes))
            .catch(err => console.log(err))
    }
}