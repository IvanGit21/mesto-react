import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  function handleAddPlaceClick(){
    setisAddPlacePopupOpen(true);
}

function handleEditProfileClick(){
  setisEditProfilePopupOpen(true);
}

function handleEditAvatarClick(){
  setisEditAvatarPopupOpen(true);
}
function closeAllPopups(){
  setisAddPlacePopupOpen(false);
  setisEditProfilePopupOpen(false);
  setisEditAvatarPopupOpen(false);
}
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} isClose={closeAllPopups}/>
      <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} isClose={closeAllPopups}/>
      <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups}/>
    </div>
  );
}

export default App;
