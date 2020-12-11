import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import api from "../../utils/api";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "../AddPlacePopup/AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    card: {},
  });

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
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

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((result) => {
        const newCard = cards.filter((item) => {
          return item._id !== card._id;
        });
        setCards(newCard);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, card: card });
  }

  function closeAllPopups(evt) {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isOpen: false, card: {} });
  }

  function handleUpdateUser(data) {
    api
      .dispatchProfileInfo(data)
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(data) {
    api
      .updateAvatar(data)
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleAddPlaceSubmit(data) {
    api
      .createNewCard(data)
      .then((result) => {
        setCards([result, ...cards])
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <ImagePopup data={selectedCard} isClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
