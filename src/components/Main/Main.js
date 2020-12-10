import React from "react";
import api from "../../utils/api";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((el) => el._id === currentUser._id);
    if (isLiked) {
      api
        .removeLike(card._id)
        .then((result) => {
          const newCards = cards.map((item) => {
            return item._id === card._id ? result : item;
          });
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .setLike(card._id)
        .then((result) => {
          const newCards = cards.map((item) => {
            return item._id === card._id ? result : item;
          });
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__avatar"
            />
            <div
              className="profile__overlay"
              onClick={props.onEditAvatar}
            ></div>
          </div>
          <div className="profile__personal-data">
            <div className="profile__edit">
              <p className="profile__name">{currentUser.name}</p>
              <button
                className="edit-button"
                aria-label="Кнопка редактирования"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__activity">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="add-button"
          aria-label="Кнопка добавления"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((elem) => {
          return (
            <Card
              key={elem._id}
              data={elem}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
