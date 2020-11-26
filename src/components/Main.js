import React from "react";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src="#" alt="Аватар" className="profile__avatar"/>
            <div className="profile__overlay" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__personal-data">
            <div className="profile__edit">
              <p className="profile__name"></p>
              <button
                className="edit-button"
                aria-label="Кнопка редактирования"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__activity"></p>
          </div>
        </div>
        <button className="add-button" aria-label="Кнопка добавления" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements"></section>
      <template id="template-cards">
        <div className="element">
          <img
            src="./images/Delite.svg"
            alt="Иконка"
            className="element__del-button"
          />
          <img src="#" alt="Картинка" className="element__image" />
          <div className="element__content">
            <h2 className="element__title"></h2>
            <div className="grope-container">
              <button
                className="grope-button"
                aria-label="Кнопка отметки"
              ></button>
              <span className="grope-counter"></span>
            </div>
          </div>
        </div>
      </template>
      <section className="popup popup_edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__exit-button popup__exit-button_edit"
          ></button>
          <form
            className="popup__form popup__form_edit"
            name="form-edit"
            noValidate
          >
            <h2 className="popup__header">Редактировать профиль</h2>
            <fieldset className="popup__input-container">
              <input
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="40"
                defaultValue=""
                placeholder="Имя"
                className="popup__input popup__input_type_name"
                id="name-input"
              />
              <span id="name-input-error" className="popup__input-error"></span>
              <input
                name="about"
                type="text"
                required
                minLength="2"
                maxLength="200"
                defaultValue=""
                placeholder="О себе"
                className="popup__input popup__input_type_description"
                id="description-input"
              />
              <span
                id="description-input-error"
                className="popup__input-error"
              ></span>
            </fieldset>
            <button
              type="submit"
              className="popup__button popup__button_edit"
              aria-label="Кнопка сохранения"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_add">
        <div className="popup__container">
          <button
            type="button"
            className="popup__exit-button popup__exit-button_add"
          ></button>
          <form
            className="popup__form popup__form_add"
            name="form-add"
            noValidate
          >
            <h2 className="popup__header">Новое место</h2>
            <fieldset className="popup__input-container">
              <input
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="30"
                defaultValue=""
                placeholder="Название"
                className="popup__input popup__input_type_card-name"
                id="card-name-input"
              />
              <span
                id="card-name-input-error"
                className="popup__input-error"
              ></span>
              <input
                name="link"
                type="url"
                required
                defaultValue=""
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_url"
                id="url-input"
              />
              <span id="url-input-error" className="popup__input-error"></span>
            </fieldset>
            <button
              type="submit"
              className="popup__button popup__button_add"
              ria-label="Кнопка создания"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <h2 className="popup__header popup__header_type_delete">
            Вы уверены?
          </h2>
          <button
            type="button"
            className="popup__exit-button popup__exit-button_type_delete"
          ></button>
          <button
            type="submit"
            className="popup__button popup__button_type_delete"
            ria-label="Кнопка подтверждения"
          >
            Да
          </button>
        </div>
      </section>
      <section className="popup popup_edit-avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__exit-button popup__exit-button_edit-avatar"
          ></button>
          <form
            className="popup__form popup__form_edit-avatar"
            name="form-edit-avatar"
            noValidate
          >
            <h2 className="popup__header">Обновить аватар</h2>
            <fieldset className="popup__input-container">
              <input
                name="avatar"
                type="url"
                required
                defaultValue=""
                placeholder="Ссылка на автар"
                className="popup__input popup__input_edit-avatar"
                id="url-input"
              />
              <span id="url-input-error" className="popup__input-error"></span>
            </fieldset>
            <button
              type="submit"
              className="popup__button popup__button_edit-avatar"
              ria-label="Кнопка сохранения"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Main;
