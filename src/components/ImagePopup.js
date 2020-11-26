import React from "react";

function ImagePopup(props) {
  return (
    <section className="popup popup_activity-image">
        <div className="popup__container popup__container_activity-image">
          <button
            type="button"
            className="popup__exit-button popup__exit-button_activity-image"
          ></button>
          <img src="#" alt="Картинка" className="popup__image" />
          <h2 className="popup__header popup__header_activity-image"></h2>
        </div>
      </section>
  );
}

export default ImagePopup;
