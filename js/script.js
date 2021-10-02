let popupOpened = document.querySelector('.popup_opened');
let btnEdit = document.querySelector('.btn_edit');
let btnAdd = document.querySelector('.btn_add');

let btnClose = document.querySelector('.btn_close');
let save = document.querySelector('.btn_save');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

btnEdit.addEventListener('click', function() {
    popupOpened.style.display = "flex";
});

btnClose.addEventListener('click', function() {
    popupOpened.style.display = "none";
});

save.addEventListener('click', function(e) {
    e.preventDefault();
    let inputName = document.querySelector('.form__input_name');
    let inputDoer = document.querySelector('.form__input_doer');
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputDoer.value;
    popupOpened.style.display = "none";
});