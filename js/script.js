const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
const popupCloseBtnEdit = document.querySelector('.popup__close-btn-edit');
const popupCloseAddCard = document.querySelector('.popup__close-btn-add');
// 
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const formEdit = document.querySelector('.form__edit');
const formCard = document.querySelector('.form__card');
const cardNameInput = document.querySelector('.form__input_card_name');
const linkInput = document.querySelector('.form__input_link_picture');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements');

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function closePopupEditBtn() {
    closePopup(popupEditProfile);
}
popupCloseBtnEdit.addEventListener('click', closePopupEditBtn);

function closePopupAddCard() {
    closePopup(popupAddCard);
}
popupCloseAddCard.addEventListener('click', closePopupAddCard);


// Popup open profile
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openEditprofile() {
    openPopup(popupEditProfile);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}
popupEditProfileBtn.addEventListener('click', openEditprofile);

// Popup add card
function openPopupAddCard() {
    openPopup(popupAddCard);
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
const cardTemplate = document.querySelector('#element-template').content;

function createCard(item) {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__title').textContent = item.name;
    element.querySelector('.element__delete').addEventListener('click', function() {
        element.remove();
    });
    element.querySelector('.element__btn').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__btn_like_active');
    });
    return element;
}

function appendCard(item) {
    const element = createCard(item);
    elements.prepend(element);
}

initialCards.forEach(appendCard);