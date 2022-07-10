import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BookCard } from "../../../../src/Components/common/card/BookCard";

const data = {
  _id: "5e9f8f8f8f8f8f8f8f8f8f8",
  name: "Obra",
  author: "Autor",
  img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
  description: "Descripción",
};

const actions = {
  detail: jest.fn(),
  edit: jest.fn(),
  delete: jest.fn(),
};
describe("BookCard Component", () => {
  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <BookCard data={data} isAdmin={true} actions={actions} token="token" />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show author inside li class small", async () => {
    render(
      <Router>
        <BookCard data={data} isAdmin={false} actions={actions} token="token" />
      </Router>
    );

    const li = screen.getByTestId("Autor");
    expect(li.classList.contains("small")).toBeTruthy();
    expect(li.innerHTML).toContain("Autor");
  });

  it("should show not show edit nor delete buttons (non admin card)", async () => {
    render(
      <Router>
        <BookCard data={data} isAdmin={false} actions={actions} token="token" />
      </Router>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  it("should show characters, edit and delete buttons (admin card)", async () => {
    render(
      <Router>
        <BookCard data={data} isAdmin={true} actions={actions} token="token" />
      </Router>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);

    const editButton = screen.getByTestId("edit-button");
    expect(editButton).toBeTruthy();
    expect(editButton.innerHTML).toBe("📝 editar");

    const deleteButton = screen.getByTestId("delete-button");
    expect(deleteButton).toBeTruthy();
    expect(deleteButton.innerHTML).toBe("🗑️ eliminar");

    const charactersButton = screen.getByTestId("char-button");
    expect(charactersButton).toBeTruthy();
    expect(charactersButton.innerHTML).toBe("🎭 Personajes");
  });

  it("should show two characters button (admin and non admin cards)", async () => {
    render(
      <Router>
        <BookCard data={data} isAdmin={true} actions={actions} token="token" />
        <BookCard data={data} isAdmin={false} actions={actions} token="token" />
      </Router>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4);

    const charactersButton = screen.getAllByTestId("char-button");
    expect(charactersButton.length).toBe(2);
    expect(charactersButton[0].innerHTML).toBe("🎭 Personajes");
  });
});
