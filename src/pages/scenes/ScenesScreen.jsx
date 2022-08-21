import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Content } from "../../Components/common/content/Content";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { Modal } from "../../Components/common/modals/Modal";
import EditSceneForm from "../../Components/scenes/EditSceneForm";

import { getBook } from "../../helpers/getBook";
import { getScenes } from "../../helpers/getScenes";
import { deleteScene } from "../../helpers/deleteScene";
import { ContentHeader } from "../../Components/common/content/ContentHeader";
import { NavigateButton } from "../../Components/ui/buttons/NavigateButton";
import { ContentBody } from "../../Components/common/content/ContentBody";
import { SceneDetail } from "../../Components/scenes/SceneDetail";

export const ScenesScreen = ({
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

  const _getData = getScenes(auth, params, dispatchEntity.setCanvas);

  const _deleteInstance = deleteScene(
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
        <NavLink to={`/characters/book/${book._id}`}>
          <NavigateButton text="🎭 Personajes" />
        </NavLink>

        <ContentHeader
          book={book}
          title="Escenas:"
          count={Entity.data.length}
        />

        <ContentBody
          type="scene"
          content={Entity.data}
          isAdmin={isAdmin}
          actions={modalActions}
          token={auth.token}
        />
      </Content>

      {modals.blur && (
        <Modal actions={{ close: modalActions.close }}>
          {modals.detail && <SceneDetail auth={auth} data={modals.data} />}
          {modals.edit && (
            <EditSceneForm
              auth={auth}
              data={modals.data}
              actions={modalActions}
            />
          )}
          {modals.add && (
            <EditSceneForm
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

ScenesScreen.propTypes = {
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

ScenesScreen.defaultProps = {
  isAdmin: false,
};

/*   actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired, */
