import PropTypes from "prop-types";

export const modalActionsType = PropTypes.shape({
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  detail: PropTypes.func.isRequired,
  setDataDetail: PropTypes.func.isRequired,
}).isRequired;

export const modalsStateType = PropTypes.shape({
  lastRefresh: PropTypes.instanceOf(Date).isRequired,
  blur: PropTypes.bool.isRequired,
  detail: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  add: PropTypes.bool.isRequired,
  delete: PropTypes.bool.isRequired,
}).isRequired;

export const authType = PropTypes.shape({
  token: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}).isRequired;
