import React from "react";

function AddForm() {
  return (
    <>
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
    </>
  );
}

export default AddForm;
