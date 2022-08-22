import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { authType, modalActionsType, modalsStateType } from "../../PropTypes";
import { api } from "../../http/api";
import { fetchDeleteCharacter, fetchDeleteScene } from "../../http";

import { Blur } from "../../Components/ui/Blur";
import { Content } from "../../Components/common/content/Content";
import { ConfirmModal } from "../../Components/common/modals/ConfirmModal";
import { ContentBody } from "../../Components/common/content/ContentBody";
import { ContentHeader } from "../../Components/common/content/ContentHeader";
import { EditCharacterForm } from "../../Components/characters/EditCharacterForm";
import { EditSceneForm } from "../../Components/scenes/EditSceneForm";
import { NavigateButton } from "../../Components/ui/buttons/NavigateButton";

import useFetch from "../../hooks/useFetch";

import { getBook } from "../../helpers/getBook";
import { getComponentConfig } from "../../helpers/getComponentConfig";
import { resetMessage } from "../../helpers/resetMessage";

const FEEDBACK_INITIAL = {
  type: "",
  text: "",
};

const _deleteInstanceByType =
  (type, actions, reFetch, setFeedBack) => async (token, _id) => {
    const res =
      type === "scene"
        ? await fetchDeleteScene(token, _id)
        : await fetchDeleteCharacter(token, "_id");
    if (res.ok) {
      actions.close();
      reFetch();
    } else {
      const err = await res.json();
      setFeedBack({ type: "error", text: err.errors[0] || err.message });
      resetMessage(setFeedBack, FEEDBACK_INITIAL);
    }
  };

export const ScreenFetch = ({
  auth,
  params,
  actions,
  modals,
  isEditor,
  type,
}) => {
  const [book, setBook] = useState(null);
  const [feedBack, setFeedBack] = useState(FEEDBACK_INITIAL);

  const [{ data, loading, error }, reFetch] = useFetch(
    api[type].getByBookId.path.replace(":id", params.bookId),
    api[type].getByBookId.method,
    { token: auth.token }
  );

  const _getBook = getBook(auth.token, params.bookId, setBook);

  const {
    confirmationQuestion,
    navigateButtonPath,
    navigateButtonText,
    title,
  } = getComponentConfig(type, params);

  const deleteInstance = _deleteInstanceByType(
    type,
    actions,
    reFetch,
    setFeedBack
  );

  useEffect(() => {
    auth.token && _getBook() && reFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  const formData = modals.edit ? modals.data : { book: params.bookId };

  const edit =
    modals.blur &&
    (type === "scene" ? (
      <EditSceneForm actions={actions} auth={auth} data={formData} />
    ) : (
      <EditCharacterForm actions={actions} auth={auth} data={formData} />
    ));

  const confirmDelete = modals.blur && (
    <ConfirmModal
      actions={actions}
      auth={auth}
      callback={deleteInstance}
      confirmationQuestion={confirmationQuestion}
      data={modals.data}
      feedbackMessage={feedBack}
    />
  );

  return book ? (
    <>
      <Content modals={modals} actions={actions} isEditor={isEditor}>
        <NavLink to={navigateButtonPath}>
          <NavigateButton text={navigateButtonText} />
        </NavLink>

        <ContentHeader book={book} count={data?.length || 0} title={title} />

        {error && <div>{error}</div>}
        {loading && <div>Cargando...</div>}
        <ContentBody
          actions={actions}
          content={data}
          isEditor={isEditor}
          token={auth.token}
          type={type}
        />
      </Content>

      {modals.blur && (
        <Blur
          actions={actions}
          confirmDelete={confirmDelete}
          edit={edit}
          modals={modals}
        />
      )}
    </>
  ) : (
    <></>
  );
};

ScreenFetch.propTypes = {
  actions: modalActionsType,
  auth: authType,
  isEditor: PropTypes.bool,
  modals: modalsStateType,
  params: PropTypes.object.isRequired,
};

ScreenFetch.defaultProps = {
  isEditor: false,
};
