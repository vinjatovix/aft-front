import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../actions/auth";
import { fetchLogin } from "../http";

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequestAction());
  try {
    const resp = await fetchLogin({ username, password });
    const body = await resp.json();

    if (resp.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", String(new Date().getTime()));
      dispatch(
        loginSuccessAction({
          token: body.token,
          user: body.user,
        })
      );
    } else {
      dispatch(
        loginFailureAction({
          error: body.error,
          loginValues: { username, password },
        })
      );
    }
  } catch (err) {
    dispatch(
      loginFailureAction({
        error: "There was an error",
        loginValues: { username, password },
      })
    );
  }
};
