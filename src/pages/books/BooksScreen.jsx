import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Modal } from "../../Components/common/modals/Modal";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";

import { BookDetail } from "../../Components/books/BookDetail";
import { deleteBook } from "../../helpers/deleteBook";
import { getBooks } from "../../helpers/getBooks";
import { EditBookForm } from "../../Components/books/EditBookForm";
import { Content } from "../../Components/common/content/Content";
import { ContentHeader } from "../../Components/common/content/ContentHeader";
import { CardGrid } from "../../Components/common/card/CardGrid";

export const BooksScreen = ({
  auth,
  dispatchEntity,
  modalActions,
  modals,
  Entity,
  isAdmin,
}) => {
  const _getBooks = getBooks(auth, dispatchEntity);

  const _deleteInstance = deleteBook(modalActions, dispatchEntity);

  useEffect(() => {
    auth.token && _getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token, Entity.updatedAt]);

  return (
    <>
      <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
        <ContentHeader title="Obras:" count={Entity.data.length} />
        <CardGrid
          type="book"
          data={Entity.data}
          isAdmin={isAdmin}
          actions={modalActions}
          token={auth.token}
        />
      </Content>

      {modals.blur && (
        <Modal actions={{ close: modalActions.close }}>
          {modals.detail && <BookDetail auth={auth} data={modals.data} />}
          {modals.edit && (
            <EditBookForm
              auth={auth}
              data={modals.data}
              actions={modalActions}
            />
          )}
          {modals.add && <EditBookForm auth={auth} actions={modalActions} />}
          {modals.delete && (
            <ConfirmModal
              auth={auth}
              data={modals.data}
              modalActions={modalActions}
              callback={_deleteInstance}
              message="¿Estás seguro de que quieres eliminar esta obra?"
            />
          )}
        </Modal>
      )}
    </>
  );
};

BooksScreen.propTypes = {
  auth: PropTypes.object.isRequired,
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
  modals: PropTypes.object.isRequired,
  Entity: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
};

BooksScreen.defaultProps = {
  isAdmin: false,
};
