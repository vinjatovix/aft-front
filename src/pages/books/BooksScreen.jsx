import React, { useContext, useEffect } from "react";
import { Content } from "../../Components/common/Content";
import { CardGrid } from "../../Components/common/CardGrid";
import { Modal } from "../../Components/common/modals/Modal";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { useModals } from "../../hooks/useModals";

import { useCanvas } from "../../hooks/useCanvas";
import { fetchBooks, fetchDeleteBook } from "../../http";
import { UserContext } from "../../contexts/UserContext";
import { BookDetail } from "./BookDetail";
import EditBookForm from "./EditBookForm";

export const BooksScreen = () => {
  const { auth } = useContext(UserContext);
  const { roles = [] } = auth.user || [];
  const isAdmin = roles.includes("aft.admin");

  const [modals, dispatchModals] = useModals();
  const [bookList, dispatchBookList] = useCanvas();

  const modalActions = {
    ...dispatchModals,
    refresh: () => dispatchBookList.setUpdate(),
  };

  const getBooks = async () => {
    const res = await fetchBooks(auth.token);
    if (res.ok) {
      const data = await res.json();
      dispatchBookList.setCanvas(data);
    }
  };

  const deleteBook = async (token, _id) => {
    const res = await fetchDeleteBook(token, _id);
    if (res.ok) {
      modalActions.close();
      dispatchBookList.setUpdate();
    }
  };

  useEffect(() => {
    auth.token && getBooks();
  }, [auth.token, bookList.updatedAt]);

  return (
    <>
      <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
        <h1>Obras: {dispatchBookList.count}</h1>
        {/* <input type="text" placeholder="Buscar..." /> */}

        <CardGrid
          type="book"
          data={bookList.data}
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
              callback={deleteBook}
              message="¿Estás seguro de que quieres eliminar esta obra?"
            />
          )}
        </Modal>
      )}
    </>
  );
};
