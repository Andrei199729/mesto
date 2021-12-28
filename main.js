(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function n(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._config=e,this._formName=r,this._inputList=function(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.querySelectorAll(e.inputSelector)),this._submitButton=r.querySelector(e.submitButtonSelector)}var r,o;return r=n,(o=[{key:"enableValidation",value:function(){this._setFormListener()}},{key:"_setFormListener",value:function(){var t=this;this._formName.addEventListener("submit",(function(e){return t._handleSubmit(e)})),this._formName.addEventListener("input",(function(){return t.toggleSubmitButton()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){return t._handleFieldValidation(e)}))})),this.toggleSubmitButton()}},{key:"toggleSubmitButton",value:function(){this._submitButton.disabled=!this._formName.checkValidity(),this._submitButton.classList.toggle(this._config.inactiveButtonClass,!this._formName.checkValidity())}},{key:"_handleSubmit",value:function(t){t.preventDefault()}},{key:"_handleFieldValidation",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=this._formName.querySelector("#".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formName.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.textContent=""}},{key:"addSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._config.inactiveButtonClass)}},{key:"resetValidation",value:function(){var t=this;this.toggleSubmitButton(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&e(r.prototype,o),n}();const r=n;function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r,o,i,a,u){var c,s,l=this,f=a.openPopupDelete;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s=function(){l._view.remove(),l._view=null},(c="removeCard")in this?Object.defineProperty(this,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):this[c]=s,this._item=n,this._likes=this._item.likes,this._config=e,this._userID=i,this._view=r.querySelector(".element").cloneNode(!0),this._cardImage=this._view.querySelector(".element__image"),this._cardTitle=this._view.querySelector(".element__title"),this._delButton=this._view.querySelector(".element__delete"),this._elementLikeBtn=this._view.querySelector(".element__btn"),this._elementCheck=this._view.querySelector(".element__check"),this._openPopup=o,this._openPopupDelete=f,this._handleClickLikes=u,this._popupDeleteBtn=document.querySelector(".popup__delete-btn-close"),this._handleCardClick=this._handleCardClick.bind(this)}var e,n;return e=t,(n=[{key:"generateCard",value:function(){return this._cardImage.src=this._item.link,this._cardImage.alt=this._item.name,this._cardTitle.textContent=this._item.name,this._elementCheck.textContent=this._likes.length,this._delButton.classList.add(this._userID===this._item.owner._id?"element__delete-button_visible":"element__delete-button_hidden"),this._updateLikes(),this._setEventListeners(),this._view}},{key:"_handleCardClick",value:function(){this._openPopup(this._item.name,this._item.link)}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userID}))}},{key:"setLikes",value:function(t){this._likes=t,this._elementCheck.textContent=this._likes.length,this._updateLikes()}},{key:"_updateLikes",value:function(){this.isLiked()?this._elementLikeBtn.classList.add("element__btn_like_active"):this._elementLikeBtn.classList.remove("element__btn_like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._delButton.addEventListener("click",(function(){t._openPopupDelete({id:t._item._id,cleanup:t.removeCard})})),this._elementLikeBtn.addEventListener("click",(function(){t._handleClickLikes(t)})),this._cardImage.addEventListener("click",this._handleCardClick)}}])&&o(e.prototype,n),t}();const a=i;function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"rendererItem",value:function(t,e){var n=this;t.forEach((function(t){n._renderer(t,e)}))}}])&&u(e.prototype,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"==t.key&&this.close()}},{key:"_closeWindowPopup",value:function(t){t.target==this._popup&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-btn").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){return t._closeWindowPopup(e)}))}}])&&s(e.prototype,n),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function h(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}const v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=_(e);if(n){var o=_(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return h(this,t)});function o(t){var e,n,i,a,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),u=function(t,r){y((e=d(n),_(o.prototype)),"open",e).call(e),n._cardImage.src=r,n._cardImage.alt=t,n._cardCaption.textContent=t},(a="open")in(i=d(n=r.call(this,t)))?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i.open=u,n._cardImage=n._popup.querySelector(".view-image__picture"),n._cardCaption=n._popup.querySelector(".view-image__caption"),n}return o}(l);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},C(t,e)}function E(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=j(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function j(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(t,e,n){var r,o,u=n.formSubmit,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(this,a),I(O(o=i.call(this,e)),"open",(function(){o._resetSave(),L((r=O(o),P(a.prototype)),"open",r).call(r)})),o._config=t,o._formSubmit=u,o._form=o._popup.querySelector(o._config.formSelector),o._inputList=g(o._form.querySelectorAll(o._config.inputSelector)),o._submitForm=o._submitForm.bind(O(o)),o._submitButtonEdit=document.querySelector(".form__btn-close-edit"),o._submitButtonAvatar=document.querySelector(".form__btn-close-avatar"),o._submitButtonCard=document.querySelector(".form__btn-close-card"),o._handleRetreive=c,o}return e=a,(n=[{key:"_setSave",value:function(){this._submitButtonEdit.textContent=this._config.preservation,this._submitButtonAvatar.textContent=this._config.preservation,this._submitButtonCard.textContent=this._config.creation}},{key:"_resetSave",value:function(){this._submitButtonEdit.textContent=this._config.save,this._submitButtonAvatar.textContent=this._config.save,this._submitButtonCard.textContent=this._config.create}},{key:"close",value:function(){L(P(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"_submitForm",value:function(t){t.preventDefault(),this._setSave(),this._formSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){var t=this;L(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){return t._submitForm(e)}))}}])&&S(e.prototype,n),a}(l);const A=B;function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=D(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function D(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function U(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}const F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function a(t,e){var n,r,o,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(t){t.preventDefault(),n._setSave(),n._handleConfirm(n._data)},(o="_handleSubmit")in(r=V(n=i.call(this,t)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._confirmForm=document.forms.formcarddelete,n._handleConfirm=e,n._submitButton=document.querySelector(".popup__delete-btn-close"),n._data=null,n}return e=a,(n=[{key:"_setSave",value:function(){this._submitButton.textContent="Удаление..."}},{key:"_resetSave",value:function(){this._submitButton.textContent="Да"}},{key:"open",value:function(t){this._data=t,this._resetSave(),q(N(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._data=null,q(N(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){q(N(a.prototype),"setEventListeners",this).call(this),this._confirmForm.addEventListener("submit",this._handleSubmit)}}])&&T(e.prototype,n),a}(l);function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const M=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"ID",get:function(){return this.id}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about,this.id=t._id}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&z(e.prototype,n),t}();function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J,H=function(t){if(Array.isArray(t))return $(t)}(J=document.querySelectorAll(".popup"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(J)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(J)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),W=document.querySelector(".profile__edit-btn"),G=document.querySelector(".profile__add-card-btn"),K=document.querySelector(".profile__edit-avatar"),Q=(document.querySelector(".profile__avatar"),document.querySelector("#card-template").content),X=document.forms.formprofile,Y=document.forms.formcard,Z=document.forms.formavatar,tt=(Z.elements.avatar,X.elements.nametype),et=X.elements.job,nt=(Y.elements.card,Y.elements.link,{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible",save:"Сохранить",create:"Создать",preservation:"Сохранение...",creation:"Создание..."});function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const ot=function(){function t(e){var n=e.address,r=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.address=n,this.token=r}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(){return function(t){return t.ok?t.json():Promise.reject(new Error("Ошибка: ".concat(t.status)))}}},{key:"getInitialCards",value:function(){return fetch("".concat(this.address,"/cards"),{headers:{authorization:this.token}}).then(this._getResponseData())}},{key:"aboutUser",value:function(){return fetch("".concat(this.address,"/users/me"),{headers:{authorization:this.token}}).then(this._getResponseData())}},{key:"editProfile",value:function(t){return fetch("".concat(this.address,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then(this._getResponseData())}},{key:"addNewCards",value:function(t){return fetch("".concat(this.address,"/cards"),{method:"POST",headers:{authorization:"".concat(this.token),"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then(this._getResponseData())}},{key:"deleteCard",value:function(t){return fetch("".concat(this.address,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._getResponseData())}},{key:"addlike",value:function(t){return fetch("".concat(this.address,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._getResponseData())}},{key:"removeLike",value:function(t){return fetch("".concat(this.address,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._getResponseData())}},{key:"updateAvatar",value:function(t){return fetch("".concat(this.address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then(this._getResponseData())}}])&&rt(e.prototype,n),t}();function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.addEventListener("load",(function(){H.forEach((function(t){return t.classList.add("popup_transition")}))}));var at=new ot({address:"https://mesto.nomoreparties.co/v1/cohort-32",token:"f0863dcb-641a-48c7-ae1b-e19e122bd627"}),ut=new F(".popup_delete",(function(t){var e=t.id,n=t.cleanup;at.deleteCard(e).then((function(){return n()}),ut.close()).catch((function(t){return console.log(t)}))}));ut.setEventListeners(),Promise.all([at.aboutUser(),at.getInitialCards()]).then((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return it(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?it(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),n=e[0],r=e[1];lt.setUserInfo(n),lt.setUserAvatar(n.avatar),st.rendererItem(r,n._id)})).catch((function(t){return console.log(t)}));var ct=new v(".popup_view-image"),st=new c({renderer:function(t,e){return st.addItem(_t(t,e))}},".elements"),lt=new M(".profile__title",".profile__subtitle",".profile__avatar"),ft=new r(nt,X);ft.enableValidation();var pt=new r(nt,Y);pt.enableValidation();var ht=new r(nt,Z);ht.enableValidation(),ct.setEventListeners(),W.addEventListener("click",(function(){dt.open(),ft.resetValidation(),ft.addSubmitButton();var t=lt.getUserInfo();tt.value=t.name,et.value=t.about})),G.addEventListener("click",(function(){yt.open(),pt.resetValidation()})),K.addEventListener("click",(function(){mt.open(),ht.resetValidation()}));var dt=new A(nt,".popup_edit-profile",{formSubmit:function(t){!function(t){var e={name:t.nametype,about:t.job};lt.setUserInfo(e)}(t),at.editProfile({name:lt.getUserInfo().name,about:lt.getUserInfo().about}).then((function(t){return lt.setUserInfo(t)}),dt.close()).catch((function(t){return console.log(t)}))}});dt.setEventListeners();var yt=new A(nt,".popup_add-card",{formSubmit:function(t){at.addNewCards({name:t.card,link:t.link}).then((function(t){return e=t,n=lt.ID,void st.addItem(_t(e,n));var e,n}),yt.close()).catch((function(t){return console.log(t)}))}});yt.setEventListeners();var mt=new A(nt,".popup_avatar",{formSubmit:function(t){at.updateAvatar({link:t.avatar}).then((function(t){return function(t){lt.setUserAvatar(t.avatar)}(t)}),mt.close()).catch((function(t){return console.log(t)}))}});function _t(t,e){return new a(nt,t,Q,ct.open,e,{openPopupDelete:vt},bt).generateCard()}function vt(t){ut.open(t)}function bt(t){t.isLiked()?at.removeLike(t._item._id).then((function(e){return t.setLikes(e.likes)})).catch((function(t){return console.log(t)})):at.addlike(t._item._id).then((function(e){return t.setLikes(e.likes)})).catch((function(t){return console.log(t)}))}mt.setEventListeners()})();