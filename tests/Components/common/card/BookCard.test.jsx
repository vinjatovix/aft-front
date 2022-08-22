import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter as Router,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { BookCard } from "../../../../src/Components/books/BookCard";
import { UserContext } from "../../../../src/contexts/UserContext";
import getUserContext from "../../../fixtures/getUserContext";
import mockActions from "../../../fixtures/mockActions";
import { arrayElement } from "../../../fixtures/random";

describe("BookCard Component", () => {
  const data = {
    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
    name: "Obra",
    author: "Autor",
    img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
    description: "Descripción",
  };

  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <BookCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show author inside li class small", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={false}
          actions={mockActions}
          token="token"
        />
      </Router>
    );
    const li = screen.getByTestId(data.author);

    expect(li.classList.contains("small")).toBeTruthy();
    expect(li.innerHTML).toContain(data.author);
  });

  it("should show only characters and scenes buttons (non admin card)", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={false}
          actions={mockActions}
          token="token"
        />
      </Router>
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });

  it("should navigate to characters when character button is clicked", async () => {
    render(
      <UserContext.Provider
        value={{
          auth: getUserContext(
            arrayElement(["aft-admin", "aft-user", "aft-editor"])
          ),
        }}
      >
        <MemoryRouter initialEntries={["/books"]}>
          <Routes>
            <Route
              path="/books"
              element={
                <BookCard
                  data={data}
                  isEditor={true}
                  actions={mockActions}
                  token="token"
                />
              }
            />
            <Route
              path="/book/:bookId/characters/"
              element={<h1>CharactersScreen</h1>}
            />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    const button = screen.getAllByTestId("navigate-button");
    fireEvent.click(button[0]);

    expect(screen.getByText("CharactersScreen")).toBeTruthy();
  });

  it("should show characters, scenes, edit and delete buttons (admin card)", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );
    const buttons = screen.getAllByTestId("action-button");
    const editButton = buttons[0];
    const deleteButton = buttons[1];
    const navigateButtons = screen.getAllByTestId("navigate-button");

    expect(buttons.length).toBe(2);
    expect(editButton).toBeTruthy();
    expect(editButton.innerHTML).toBe("📝 Editar");
    expect(deleteButton).toBeTruthy();
    expect(deleteButton.innerHTML).toBe("🗑️ Eliminar");
    expect(navigateButtons[0]).toBeTruthy();
    expect(navigateButtons[0].innerHTML).toBe("🎭 Personajes");
    expect(navigateButtons[1]).toBeTruthy();
    expect(navigateButtons[1].innerHTML).toBe("🎬 Escenas");
  });

  it("should call actions.edit when button is clicked", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );
    const buttons = screen.getAllByTestId("action-button");

    fireEvent.click(buttons[0]);

    expect(mockActions.edit).toHaveBeenCalled();
  });

  it("should call actions.delete when button is clicked", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );

    const buttons = screen.getAllByTestId("action-button");
    fireEvent.click(buttons[1]);

    expect(mockActions.delete).toHaveBeenCalledWith(
      "token",
      "5e9f8f8f8f8f8f8f8f8f8f8"
    );
  });

  it("should call actions.detail when book ul is clicked", async () => {
    render(
      <Router>
        <BookCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );

    const ul = screen.getByTestId("book-detail");
    fireEvent.click(ul);

    expect(mockActions.detail).toHaveBeenCalled();
  });
});
