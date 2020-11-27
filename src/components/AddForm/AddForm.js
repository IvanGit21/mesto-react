import React from "react";

function AddForm() {
  return (
    <>
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
      <span id="card-name-input-error" className="popup__input-error"></span>
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
    </>
  );
}

export default AddForm;
