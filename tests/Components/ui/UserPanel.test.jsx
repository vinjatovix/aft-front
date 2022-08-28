import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { combineReducers, legacy_createStore } from "redux";
import { Provider } from "react-redux";

import { UserPanel } from "../../../src/Components/ui/UserPanel";

jest.mock("../../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));

const authReducer = (state) => state;

const createTestStore = (auth) => legacy_createStore(combineReducers({ auth }));

let store;

describe("UserPanel Component", () => {
  it("should render user panel if authenticated", () => {
    const initialState = {
      token: "token",
      user: {
        username: "userTest",
        roles: ["aft.admin", "aft.editor", "aft.user"],
      },
    };

    store = createTestStore(() => authReducer(initialState));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<UserPanel />} />
          </Routes>
        </MemoryRouter>
        w
      </Provider>
    );

    const userPanel = screen.getByTestId("user-panel");
    expect(userPanel).toBeInTheDocument();

    const userName = screen.getByTestId("username");
    expect(userName.innerHTML).toBe("userTest");

    const userRole = screen.getByTestId("user-role");
    expect(userRole.innerHTML).toBe("ADMIN");

    const actionButtons = screen.getAllByTestId("action-button");
    expect(actionButtons.length).toBe(2);
    expect(actionButtons[0].innerHTML).toBe("Logout");
    expect(actionButtons[1].innerHTML).toBe("Cambiar contraseña");

    const navigateButtons = screen.getByTestId("navigate-button");
    expect(navigateButtons.innerHTML).toBe("Usuarios");
  });
});
