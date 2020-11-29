import React from "react";
import api from "../../utils/api";
import Card from "../Card/Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <div
              className="profile__overlay"
              onClick={props.onEditAvatar}
            ></div>
          </div>
          <div className="profile__personal-data">
            <div className="profile__edit">
              <p className="profile__name">{userName}</p>
              <button
                className="edit-button"
                aria-label="Кнопка редактирования"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__activity">{userDescription}</p>
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
            <Card key={elem._id} data={elem} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
