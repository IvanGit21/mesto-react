import React from "react";
import delButton from "../../images/Delite.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Card({ data, onCardClick, onCardLike }) {

  function handleOnClick() {
    onCardClick({ name: data.name, link: data.link });
  }
  function handleLikeClick(){
    onCardLike(data)
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = data._id === currentUser._id;
  const isLiked = data.likes.some((el) => el._id === currentUser._id);
  return (
    <div className="element">
      <img
        src={delButton}
        alt="Иконка"
        className={`element__del-button ${
          isOwner ? "element__del-button_active" : ""
        }`}
      />
      <img
        src={data.link}
        alt="Картинка"
        className="element__image"
        onClick={handleOnClick}
      />
      <div className="element__content">
        <h2 className="element__title">{data.name}</h2>
        <div className="grope-container">
          <button
            className={`grope-button ${isLiked ? "grope-button_active" : ""}`}
            aria-label="Кнопка отметки"
            onClick={handleLikeClick}
          ></button>
          <span className="grope-counter">{data.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
