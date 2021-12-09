// Добавление карточек, удаление, лайк, открытие карточек
class Card {
    constructor(config, item, template, openViewPopup) {
        this._item = item,
            this._config = config,
            this._view = template.querySelector('.element').cloneNode(true),
            this._cardImage = this._view.querySelector('.element__image'),
            this._openPopup = openViewPopup,
            this._handleCardClick = this._handleCardClick.bind(this);
    }

    generateCard() {
        this._cardImage.src = this._item.link;
        this._cardImage.alt = this._item.name;
        this._view.querySelector('.element__title').textContent = this._item.name;
        this._setEventListeners();
        return this._view;
    }

    _handleCardClick() {
        this._openPopup(this._item.name, this._item.link);
    }

    _like(evt) {
        evt.target.classList.toggle('element__btn_like_active');
    }

    _remove() {
        this._view.remove();
    }

    _setEventListeners() {
        this._view.querySelector('.element__delete').addEventListener('click', () => {
            this._remove();
        });
        this._view.querySelector('.element__btn').addEventListener('click', (evt) => {
            this._like(evt);
        });
        this._cardImage.addEventListener('click', this._handleCardClick);
    }
}

export default Card;