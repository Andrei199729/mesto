const popups = [...document.querySelectorAll('.popup')];
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupViewImage = document.querySelector('.popup_view-image');
const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
const popupCloseBtnEdit = document.querySelector('.popup__close-btn-edit');
const popupCloseAddCard = document.querySelector('.popup__close-btn-add');
const popupCloseViewImageBtn = document.querySelector('.popup__close-btn_view-image');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
const viewImage = document.querySelector('.view-image__picture');
const viewCaption = document.querySelector('.view-image__caption');
const formEdit = document.forms.formprofile;
const nameInput = formEdit.elements.nametype;
const jobInput = formEdit.elements.job;
const formCard = document.forms.formcard;
const cardNameInput = formCard.elements.card;
const linkInput = formCard.elements.link;

// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'));
});

// Закрытие оверлей
function closeWindowPopup(evt) {
    popups.forEach((popup) => {
        if (evt.target == popup) {
            closePopup(popup);
        }
    });
}
window.addEventListener('click', closeWindowPopup);

// Закрытие нажатием на Esc
function closeEscPopup(evt) {
    if (evt.keyCode == 27) {
        popups.forEach((popup) => {
            closePopup(popup);
        });
    }
}
window.addEventListener('keydown', closeEscPopup);

// Закрытие popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Закрытие popup увеличенных изображений
function closePopupViewImage() {
    closePopup(popupViewImage);
}
popupCloseViewImageBtn.addEventListener('click', closePopupViewImage);

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


// Открытие popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// Открытие popup редактирования профиля
function openEditprofile() {
    openPopup(popupEditProfile);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}
popupEditProfileBtn.addEventListener('click', openEditprofile);

// Открытие popup добаавления карточек
function openPopupAddCard() {
    openPopup(popupAddCard);
}
popupAddCardBtn.addEventListener('click', openPopupAddCard);

// Открытие popup увеличенных изображений
function openViewImage(src, alt) {
    openPopup(popupViewImage);
    viewImage.src = src;
    viewImage.alt = alt;
    viewCaption.textContent = alt;
}

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
    appendCard(card);
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

// Добавление карточек, удаление, лайк, открытие карточек
function createCard(item) {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = element.querySelector('.element__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    element.querySelector('.element__title').textContent = item.name;
    element.querySelector('.element__delete').addEventListener('click', function() {
        element.remove();
    });
    element.querySelector('.element__btn').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__btn_like_active');
    });
    cardImage.addEventListener('click', function(evt) {
        evt.preventDefault();
        openViewImage(item.link, item.name);
    });
    return element;
}

function appendCard(item) {
    const element = createCard(item);
    elements.prepend(element);
}
initialCards.forEach(appendCard);

// Валидация

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible'
};

enableValidation(config);
formEdit.addEventListener('submit', validInput(config));