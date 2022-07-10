import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EditBookForm from "../../../src/pages/books/EditBookForm";

describe("EditBookForm Component", () => {
  it("should render the form with no values", () => {
    render(
      <Router>
        <EditBookForm
          auth={{
            token: "token",
          }}
        />
      </Router>
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(4);
    expect(inputs[0].value).toBe("");
    expect(inputs[1].value).toBe("");
    expect(inputs[2].value).toBe("");
    expect(inputs[3].value).toBe("");

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1);
    expect(buttons[0].innerHTML).toBe("Enviar");
  });

  it("should render the form with detail values correctly", () => {
    render(
      <Router>
        <EditBookForm
          auth={{
            token: "token",
          }}
          data={{
            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
            name: "Obra",
            author: "Autor",
            img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
            description: "Descripción",
          }}
          actions={{
            edit: jest.fn(),
            delete: jest.fn(),
            detail: jest.fn(),
            refresh: jest.fn(),
          }}
        />
      </Router>
    );
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(buttons[0].innerHTML).toContain("Enviar");

    const inputName = screen.getAllByTestId("name");
    expect(inputName).toHaveLength(1);
    expect(inputName[0].value).toContain("Obra");

    const inputAuthor = screen.getAllByTestId("author");
    expect(inputAuthor).toHaveLength(1);
    expect(inputAuthor[0].value).toContain("Autor");

    const inputImg = screen.getAllByTestId("img");
    expect(inputImg).toHaveLength(1);
    expect(inputImg[0].value).toContain(
      "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg"
    );

    const inputDescription = screen.getAllByTestId("description");
    expect(inputDescription).toHaveLength(1);
    expect(inputDescription[0].value).toContain("Descripción");
  });
});
