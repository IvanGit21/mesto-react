import React from "react";
import delButton from "../../images/Delite.svg";

function Card({ name, link, likes, onCardClick }) {
  function handleOnClick() {
    onCardClick({ name, link });
  }
  return (
    <div className="element">
      <img src={delButton} alt="Иконка" className="element__del-button" />
      <img
        src={link}
        alt="Картинка"
        className="element__image"
        onClick={handleOnClick}
      />
      <div className="element__content">
        <h2 className="element__title">{name}</h2>
        <div className="grope-container">
          <button className="grope-button" aria-label="Кнопка отметки"></button>
          <span className="grope-counter">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
