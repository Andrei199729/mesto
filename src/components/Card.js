// Добавление карточек, удаление, лайк, открытие карточек
class Card {
    constructor(config, item, template, openViewPopup, userID, { openPopupDelete }, handleClickLikes) {
        this._item = item,
            this._likes = this._item.likes,
            this._config = config,
            this._userID = userID,
            this._view = template.querySelector('.element').cloneNode(true),
            this._cardImage = this._view.querySelector('.element__image'),
            this._cardTitle = this._view.querySelector('.element__title'),
            this._delButton = this._view.querySelector('.element__delete'),
            this._elementLikeBtn = this._view.querySelector('.element__btn'),
            this._elementCheck = this._view.querySelector('.element__check'),
            this._openPopup = openViewPopup,
            this._openPopupDelete = openPopupDelete,
            this._handleClickLikes = handleClickLikes,
            this._popupDeleteBtn = document.querySelector('.popup__delete-btn-close'),
            this._handleCardClick = this._handleCardClick.bind(this)
    }

    generateCard() {
        this._cardImage.src = this._item.link;
        this._cardImage.alt = this._item.name;
        this._cardTitle.textContent = this._item.name;
        this._elementCheck.textContent = this._likes.length;
        if (this._userID === this._item.owner._id) {
            this._delButton;
        } else {
            this._delButton.remove();
        }
        this._updateLikes();
        this._setEventListeners();
        return this._view;
    }

    _handleCardClick() {
        this._openPopup(this._item.name, this._item.link);
    }

    isLiked() {
        return this._likes.some(user => user._id === this._userID);
    }

    setLikes(data) {
        this._likes = data;
        this._elementCheck.textContent = this._likes.length;
        this._updateLikes();
    }

    _updateLikes() {
        if (!this.isLiked()) {
            this._elementLikeBtn.classList.remove('element__btn_like_active');
        } else {
            this._elementLikeBtn.classList.add('element__btn_like_active');
        }
    }

    removeCard = () => {
        this._view.remove();
    }

    _setEventListeners() {
        this._delButton.addEventListener('click', () => {
            this._openPopupDelete({ id: this._item._id, cleanup: this.removeCard });
        });
        this._elementLikeBtn.addEventListener('click', () => {
            this._handleClickLikes(this);
        });
        this._cardImage.addEventListener('click', this._handleCardClick);
    }
}

export default Card;