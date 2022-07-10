import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../Components/common/Content";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { Modal } from "../../Components/common/modals/Modal";
import { UserContext } from "../../contexts/UserContext";
import { useModals } from "../../hooks/useModals";
import { fetchBookById, fetchCharactersByBookId } from "../../http";
import { CharacterDetail } from "./CharacterDetail";
import { CharactersContent } from "./CharactersContent";

export const CharactersScreen = () => {
  const { auth } = useContext(UserContext);
  const { roles = [] } = auth.user || [];
  const isAdmin = roles.includes("aft.admin");

  const [bookCharacters, setBookCharacters] = useState([]);
  const [book, setBook] = useState(null);
  const params = useParams();

  const [modals, modalActionsDispatch] = useModals();

  const modalActions = {
    ...modalActionsDispatch,
  };

  const getBook = async () => {
    const res = await fetchBookById(auth.token, params.bookId);
    const data = await res.json();
    setBook(data);
  };

  const getCharacters = async () => {
    const res = await fetchCharactersByBookId(auth.token, params.bookId);
    const data = await res.json();
    setBookCharacters(data);
  };

  const deleteCharacter = async (token, _id) => {
    const res = { ok: true }; // TODO: delete character
    if (res.ok) {
      modalActions.close();
    }
  };

  useEffect(() => {
    auth.token && getCharacters() && getBook();
  }, [auth.token]);

  return book ? (
    <>
      <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
        <h1>Personajes: {bookCharacters.length}</h1>
        <CharactersContent
          data={{ book, bookCharacters }}
          actions={modalActions}
          token={auth.token}
          isAdmin={isAdmin}
        />
      </Content>

      {modals.blur && (
        <Modal actions={{ close: modalActions.close }}>
          {modals.detail && <CharacterDetail auth={auth} data={{}} />}
          {modals.edit && <CharacterDetail auth={auth} data={{}} />}
          {modals.add && <CharacterDetail auth={auth} data={{}} />}
          {modals.delete && (
            <ConfirmModal
              auth={auth}
              data={{}}
              modalActions={modalActions}
              callback={deleteCharacter}
              message="¿Quieres eliminar este personaje?"
            />
          )}
        </Modal>
      )}
    </>
  ) : (
    <></>
  );
};
