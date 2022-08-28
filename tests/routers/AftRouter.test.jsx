import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, legacy_createStore } from "redux";
import { AftRouter } from "../../src/routers/AftRouter";

jest.mock("../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));

const authReducer = (state) => state;

const createTestStore = (auth) => legacy_createStore(combineReducers({ auth }));

let store;

describe("AftRouter Component", () => {
  it("should show 2 links on navBar if no authenticated", async () => {
    const initialState = {}; //! must be sent as named const or test will crash in infinite loop

    store = createTestStore(() => authReducer(initialState));

    store.auth = {
      token: "token",
      user: {
        username: "username",
        roles: ["aft.user"],
      },
    };
    render(
      <Provider store={store}>
        <AftRouter />
      </Provider>
    );

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(1);
    expect(links[0].innerHTML).toBe("🔐 Login");
  });

  it("should show 3 links on navBar is authenticated", async () => {
    store = createTestStore(() =>
      authReducer({
        loading: false,
        renewLoading: true,
        token: "token",
        user: {
          username: "username",
          roles: ["aft.user"],
        },
      })
    );

    render(
      <Provider store={store}>
        <AftRouter />
      </Provider>
    );
    localStorage.setItem("token", "token");

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(3);
    expect(links[0].innerHTML).toBe("🏠 Inicio");
    expect(links[1].innerHTML).toBe("📚 Obras");
    expect(links[2].innerHTML).toBe("📝Trabajos");
  });
});
