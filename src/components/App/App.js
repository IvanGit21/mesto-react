import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";
import EditAvatarForm from "../EditAvatarForm/EditAvatarForm";
import ImagePopup from "../ImagePopup/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    card: {},
  });

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, card: card });
  }

  function closeAllPopups(evt) {
    if (
      evt.target.classList.contains("popup__exit-button") ||
      evt.target === evt.currentTarget
    ) {
      setisAddPlacePopupOpen(false);
      setisEditProfilePopupOpen(false);
      setisEditAvatarPopupOpen(false);
      setSelectedCard({ isOpen: false, card: {} });
    }
  }
  return (
    <div className="page">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        isClose={closeAllPopups}
        children={<AddForm />}
      />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
        children={<EditForm />}
      />
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
        children={<EditAvatarForm />}
      />
      <ImagePopup data={selectedCard} isClose={closeAllPopups} />
    </div>
  );
}

export default App;
