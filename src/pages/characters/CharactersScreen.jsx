import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../Components/common/Content";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { Modal } from "../../Components/common/modals/Modal";
import { UserContext } from "../../contexts/UserContext";
import { useModals } from "../../hooks/useModals";
import {
  fetchBookById,
  fetchCharactersByBookId,
  fetchDeleteCharacter,
} from "../../http";
import { CharacterDetail } from "./CharacterDetail";
import { CharactersContent } from "./CharactersContent";
import EditCharacterForm from "./EditCharacterForm";

import { useCanvas } from "../../hooks/useCanvas";

export const CharactersScreen = () => {
  const { auth } = useContext(UserContext);
  const { roles = [] } = auth.user || [];
  const isAdmin = roles.includes("aft.admin");

  const [charactersList, dispatchCharactersList] = useCanvas();

  const [book, setBook] = useState(null);
  const params = useParams();

  const [modals, modalActionsDispatch] = useModals();

  const modalActions = {
    ...modalActionsDispatch,
    refresh: () => dispatchCharactersList.setUpdate(),
  };

  const getBook = async () => {
    const res = await fetchBookById(auth.token, params.bookId);
    const data = await res.json();
    setBook(data);
  };

  const getCharacters = async () => {
    const res = await fetchCharactersByBookId(auth.token, params.bookId);
    if (res.ok) {
      const data = await res.json();
      dispatchCharactersList.setCanvas(data);
    }
  };

  const deleteCharacter = async (token, _id) => {
    const res = await fetchDeleteCharacter(token, _id);
    if (res.ok) {
      modalActions.close();
      dispatchCharactersList.setUpdate();
    }
  };

  useEffect(() => {
    auth.token && getCharacters() && getBook();
  }, [auth.token, charactersList.updatedAt]);

  return book ? (
    <>
      <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
        <h1>Personajes: {dispatchCharactersList.count}</h1>
        <CharactersContent
          data={{ book, charactersList: charactersList.data }}
          actions={modalActions}
          token={auth.token}
          isAdmin={isAdmin}
        />
      </Content>

      {modals.blur && (
        <Modal actions={{ close: modalActions.close }}>
          {modals.detail && <CharacterDetail auth={auth} data={modals.data} />}
          {modals.edit && (
            <EditCharacterForm
              auth={auth}
              data={modals.data}
              actions={modalActions}
            />
          )}
          {modals.add && (
            <EditCharacterForm
              auth={auth}
              actions={modalActions}
              data={{ book: book._id }}
            />
          )}
          {modals.delete && (
            <ConfirmModal
              auth={auth}
              data={modals.data}
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
