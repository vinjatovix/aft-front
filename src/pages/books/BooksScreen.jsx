import React, { useState } from "react";
import PropTypes from "prop-types";
import { authType, modalActionsType, modalsStateType } from "../../PropTypes";
import { fetchDeleteBook } from "../../http";

import { Blur } from "../../Components/ui/Blur";
import { BookDetail } from "../../Components/books/BookDetail";
import { CardGrid } from "../../Components/common/card/CardGrid";
import { Content } from "../../Components/common/content/Content";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { EditBookForm } from "../../Components/books/EditBookForm";

import { resetMessage } from "../../helpers/resetMessage";

const FEEDBACK_INITIAL = { type: null, text: null };

export const BooksScreen = ({ auth, actions, modals, isEditor }) => {
  const [feedBack, setFeedBack] = useState(FEEDBACK_INITIAL);

  const deleteBook = async (token, _id) => {
    const res = await fetchDeleteBook(token, _id);
    if (res.ok) {
      actions.refresh();
      actions.close();
    } else {
      const error = await res.json();
      setFeedBack({ type: "error", text: error.message });
      resetMessage(setFeedBack, FEEDBACK_INITIAL);
    }
  };

  const detail = modals.data && <BookDetail auth={auth} data={modals.data} />;

  const edit = modals.blur && (
    <EditBookForm
      actions={actions}
      auth={auth}
      data={modals.edit ? modals.data : null}
    />
  );

  const confirmDelete = modals.blur && (
    <ConfirmModal
      actions={actions}
      auth={auth}
      callback={deleteBook}
      confirmationQuestion="¿Estás seguro de que quieres eliminar esta obra?"
      data={modals.data}
      feedbackMessage={feedBack}
    />
  );

  return (
    <>
      <Content modals={modals} actions={actions} isEditor={isEditor}>
        <CardGrid
          actions={actions}
          auth={auth}
          isEditor={isEditor}
          modals={modals}
          type="book"
        />
      </Content>

      {modals.blur && (
        <Blur
          actions={actions}
          confirmDelete={confirmDelete}
          detail={detail}
          edit={edit}
          modals={modals}
        />
      )}
    </>
  );
};

BooksScreen.propTypes = {
  auth: authType,
  actions: modalActionsType,
  modals: modalsStateType,
  isEditor: PropTypes.bool,
};

BooksScreen.defaultProps = {
  isEditor: false,
};
