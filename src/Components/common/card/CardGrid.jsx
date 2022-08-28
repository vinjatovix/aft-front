import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { modalActionsType, modalsStateType } from "../../../PropTypes";
import { api } from "../../../http/api";

import { Card } from "./Card";
import { ContentHeader } from "../content/ContentHeader";

import { useFetch } from "../../../hooks/useFetch";

export const CardGrid = ({
  actions,
  auth: { token },
  isEditor,
  modals,
  type,
}) => {
  const [{ data, loading, error }, reFetch] = useFetch(
    api[type].getAll.path,
    api[type].getAll.method,
    { token }
  );

  const title = type === "work" ? "Trabajos:" : "Obras:";
  const count = data ? data.length : 0;

  useEffect(() => {
    token && reFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modals.lastRefresh, token]);

  return (
    <>
      <ContentHeader count={count} title={title} />
      <div className="card-grid">
        {data &&
          data.map((item) => (
            <Card
              actions={actions}
              data={item}
              isEditor={isEditor}
              key={item._id}
              token={token}
              type={type}
            />
          ))}
        {error && <div>{error}</div>}
        {loading && <div>Cargando...</div>}
      </div>
    </>
  );
};

CardGrid.propTypes = {
  actions: modalActionsType,
  auth: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }),
  isEditor: PropTypes.bool,
  modals: modalsStateType,
  type: PropTypes.string.isRequired,
};

CardGrid.defaultProps = {
  isEditor: false,
};
