import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BooksScreen } from "../../../src/pages/books/BooksScreen";
import actions from "../../fixtures/actions";
import books from "../../fixtures/books";

jest.mock("../../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));

const auth = {
  token: "algo",
  user: {
    username: "user",
    roles: ["aft.user"],
  },
};

const modals = {
  add: false,
  blur: false,
  delete: false,
  detail: false,
  edit: false,
  data: {},
};

const Entity = {
  data: [books[0]],
  updatedAt: "",
};

const dispatchEntity = {
  count: Entity.data.length,
  data: [],
  updatedAt: "",
};

describe("BookScreen - page", () => {
  it("should render as user", () => {
    render(
      <Router>
        <BooksScreen
          auth={auth}
          dispatchEntity={dispatchEntity}
          modalActions={actions}
          modals={modals}
          Entity={Entity}
          isAdmin={false}
        />
      </Router>
    );

    const actionButtons = screen.queryAllByTestId("action-button");
    const navigateButtons = screen.getAllByTestId("navigate-button");

    expect(actionButtons).toHaveLength(0);
    expect(navigateButtons).toHaveLength(2);
    expect(navigateButtons[0].textContent).toBe("🎭 Personajes");
    expect(navigateButtons[1].textContent).toBe("🎬 Escenas");
  });

  it("should render as admin", () => {
    render(
      <Router>
        <BooksScreen
          auth={auth}
          dispatchEntity={dispatchEntity}
          modalActions={actions}
          modals={modals}
          Entity={Entity}
          isAdmin={true}
        />
      </Router>
    );
    const actionButtons = screen.getAllByTestId("action-button");
    const navigateButtons = screen.getAllByTestId("navigate-button");

    expect(actionButtons).toHaveLength(3);
    expect(actionButtons[0].innerHTML).toBe("Añadir");
    expect(actionButtons[1].innerHTML).toBe("📝 Editar");
    expect(actionButtons[2].innerHTML).toBe("🗑️ Eliminar");
    expect(navigateButtons).toHaveLength(2);
    expect(navigateButtons[0].textContent).toBe("🎭 Personajes");
    expect(navigateButtons[1].textContent).toBe("🎬 Escenas");
  });

  it("should render as admin with no books and add button", () => {
    render(
      <Router>
        <BooksScreen
          auth={auth}
          dispatchEntity={dispatchEntity}
          modalActions={actions}
          modals={modals}
          Entity={{ ...Entity, data: [] }}
          isAdmin={true}
        />
      </Router>
    );
    const actionButtons = screen.getAllByTestId("action-button");
    const navigateButtons = screen.queryAllByTestId("navigate-button");

    expect(actionButtons).toHaveLength(1);
    expect(navigateButtons).toHaveLength(0);
  });

  it("should show the number of books in the title", () => {
    const data = [...books];

    const { container } = render(
      <Router>
        <BooksScreen
          auth={auth}
          dispatchEntity={dispatchEntity}
          modalActions={actions}
          modals={modals}
          Entity={{ ...Entity, data }}
          isAdmin={false}
        />
      </Router>
    );
    const actionButtons = screen.queryAllByTestId("action-button");
    const title = screen.getByTestId("Obras:");

    expect(container).toMatchSnapshot();
    expect(actionButtons).toHaveLength(0);
    expect(title.textContent).toBe(`Obras: ${data.length}`);
  });
});
