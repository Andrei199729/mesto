export const popups = [...document.querySelectorAll('.popup')];
export const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
export const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
export const popupEditAvatar = document.querySelector('.profile__edit-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const templateCard = document.querySelector('#card-template').content;
export const formEdit = document.forms.formprofile;
export const formCard = document.forms.formcard;
export const formEditAvatar = document.forms.formavatar;
export const linkInputAvatar = formEditAvatar.elements.avatar;
export const nameInput = formEdit.elements.nametype;
export const jobInput = formEdit.elements.job;
export const cardNameInput = formCard.elements.card;
export const linkInput = formCard.elements.link;
export const initialCards = [{
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

export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible',
    save: 'Сохранить',
    create: 'Создать',
    preservation: 'Сохранение...',
    creation: 'Создание...',
};