const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupViewImage = document.querySelector('.popup_view-image');
const popupEditProfileBtn = document.querySelector('.profile__edit-btn');
const popupAddCardBtn = document.querySelector('.profile__add-card-btn');
const popupCloseBtnEdit = document.querySelector('.popup__close-btn-edit');
const popupCloseAddCard = document.querySelector('.popup__close-btn-add');
const popupCloseViewImageBtn = document.querySelector('.view-image__close-btn');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const formEdit = document.querySelector('.form_edit-profile');
const formCard = document.querySelector('.form_card-add');
const cardNameInput = document.querySelector('.form__input_card_name');
const linkInput = document.querySelector('.form__input_link_picture');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
// При загрузке плавное открытие и закрытие
window.addEventListener('load', () => {
    document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'));
});

// Закрытие popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Закрытие popup увеличенных изображений
function closePopupViewImage() {
    popupViewImage.classList.remove('popup_view-image_opened');
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
    popupViewImage.classList.add('popup_view-image_opened');
    const viewImage = document.querySelector('.view-image__picture');
    const viewCaption = document.querySelector('.view-image__caption');
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
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__title').textContent = item.name;
    element.querySelector('.element__delete').addEventListener('click', function() {
        element.remove();
    });
    element.querySelector('.element__btn').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__btn_like_active');
    });
    element.querySelector('.element__image').addEventListener('click', function(evt) {
        evt.preventDefault();
        const elementCard = evt.target.closest('.element');
        const elementImageSrc = elementCard.querySelector('.element__image').src;
        const elementmageAlt = elementCard.querySelector('.element__image').alt;
        openViewImage(elementImageSrc, elementmageAlt);
    });
    return element;
}

function appendCard(item) {
    const element = createCard(item);
    elements.prepend(element);
}

initialCards.forEach(appendCard);