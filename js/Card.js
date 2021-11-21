// Добавление карточек, удаление, лайк, открытие карточек
class Card {
    constructor(config, item, template, openPopup, closePopup) {
        this._item = item,
        this._config = config,
        this._view = template.querySelector('.element').cloneNode(true),
        this._cardImage = this._view.querySelector('.element__image'),
        this._openPopup = openPopup,
        this._closePopup = closePopup
    }

    generateCard() {
        this._cardImage.src = this._item.link;
        this._cardImage.alt = this._item.name;
        this._view.querySelector('.element__title').textContent = this._item.name;
        this._setEventListeners();
        return this._view;
    }

    _like(evt) {
        evt.target.classList.toggle('element__btn_like_active');
    }

    _remove() {
        this._view.remove();
    }

    _handleOpenPopup() {
        this._config.viewImagePicture.src = this._item.link;
        this._config.viewImagePicture.alt = this._item.name;
        this._config.viewCaption.textContent = this._item.name;
        this._openPopup(this._config.popupViewImage);
    }

    _setEventListeners() {
        this._view.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        this._view.querySelector('.element__delete').addEventListener('click', () => {
            this._remove();
        });
        this._view.querySelector('.element__btn').addEventListener('click', (evt) => {
            this._like(evt);
        });
    }
}

export default Card;