import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { combineReducers, legacy_createStore } from "redux";
import { Provider } from "react-redux";

import { LoginScreen } from "../../../src/pages/login/LoginScreen";

jest.mock("../../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));
const authReducer = (state) => state;

const createTestStore = (auth) => legacy_createStore(combineReducers({ auth }));

let store;

describe("LoginScreen Component", () => {
  it("should render login form if no authenticated", () => {
    const initialState = {}; //! must be sent as named const or test will crash in infinite loop

    store = createTestStore(() => authReducer(initialState));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const inputUsername = screen.getAllByTestId("username");
    const inputPassword = screen.getAllByTestId("password");
    const button = screen.getAllByRole("button")[0];

    expect(inputUsername.length).toBe(1);
    expect(inputPassword.length).toBe(1);
    expect(button.innerHTML).toBe("Login");
  });

  it("should render login form if authenticated with no roles", () => {
    const initialState = {
      token: "token",
      user: { username: "some", roles: [] },
    };

    store = createTestStore(() => authReducer(initialState));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const inputUsername = screen.getAllByTestId("username");
    const inputPassword = screen.getAllByTestId("password");
    const button = screen.getAllByRole("button")[0];

    expect(inputUsername.length).toBe(1);
    expect(inputPassword.length).toBe(1);
    expect(button.innerHTML).toBe("Login");
  });
});
