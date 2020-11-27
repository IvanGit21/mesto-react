import React from "react";
import api from "../../utils/Api";
import Card from "../Card/Card";

function Main(props) {
  const [userName, setuserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((res) => {
        setuserName(res.name);
        setuserDescription(res.about);
        setuserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      const list = res.map((item) => {
        return item;
      });
      setCards(list);
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
        {cards.map((elem, id) => {
          return (
            <Card
              key={id}
              name={elem.name}
              link={elem.link}
              likes={elem.likes}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
