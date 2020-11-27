import React from "react";

function AddForm() {
  return (
    <>
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
      <span id="description-input-error" className="popup__input-error"></span>
    </>
  );
}

export default AddForm;
