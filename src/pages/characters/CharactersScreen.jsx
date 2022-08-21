import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { CharacterDetail } from "../../Components/characters/CharacterDetail";
import EditCharacterForm from "../../Components/characters/EditCharacterForm";
import { Content } from "../../Components/common/content/Content";
import { ContentBody } from "../../Components/common/content/ContentBody";
import { ContentHeader } from "../../Components/common/content/ContentHeader";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { Modal } from "../../Components/common/modals/Modal";
import { NavigateButton } from "../../Components/ui/buttons/NavigateButton";
import { deleteCharacter } from "../../helpers/deleteCharacter";
import { getBook } from "../../helpers/getBook";
import { getCharacters } from "../../helpers/getCharacters";

export const CharactersScreen = ({
  auth,
  params,
  dispatchEntity,
  modalActions,
  Entity,
  modals,
  isAdmin,
}) => {
  const [book, setBook] = useState(null);

  const _getBook = getBook(auth, params, setBook);

  const _getData = getCharacters(auth, params, dispatchEntity.setCanvas);

  const _deleteInstance = deleteCharacter(
    modalActions.close,
    dispatchEntity.setUpdate
  );

  useEffect(() => {
    auth.token && _getBook() && _getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token, Entity.updatedAt]);

  return book ? (
    <>
      <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
        <NavLink to={`/scenes/book/${book._id}`}>
          <NavigateButton text="🎬 Escenas" />
        </NavLink>

        <ContentHeader
          book={book}
          title="Personajes:"
          count={Entity.data.length}
        />

        <ContentBody
          type="character"
          content={Entity.data}
          isAdmin={isAdmin}
          actions={modalActions}
          token={auth.token}
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
              callback={_deleteInstance}
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

CharactersScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  dispatchEntity: PropTypes.object.isRequired,
  modalActions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
  Entity: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
};

CharactersScreen.defaultProps = {
  isAdmin: false,
};
