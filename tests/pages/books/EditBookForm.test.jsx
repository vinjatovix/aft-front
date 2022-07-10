import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchUpdateBook } from "../../../src/http";
import EditBookForm from "../../../src/pages/books/EditBookForm";

jest.mock("../../../src/http", () => ({
  fetchUpdateBook: jest.fn().mockReturnValue({ ok: true }),
}));

const data = {
  _id: "5e9f8f8f8f8f8f8f8f8f8f8",
  name: "Obra",
  author: "Autor",
  img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
  description: "Descripción",
};

const actions = {
  edit: jest.fn(),
  delete: jest.fn(),
  detail: jest.fn(),
  refresh: jest.fn(),
};

const auth = {
  token: "token",
};

const _id = "5e9f8f8f8f8f8f8f8f8f8f8";

describe("EditBookForm Component", () => {
  it("should render the form with no values", () => {
    render(
      <Router>
        <EditBookForm auth={auth} />
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

  it("should update form values", () => {
    //? SETUP

    const newName = "Nuevo nombre";
    const newAuthor = "Nuevo autor";
    const newImg = "https://new.com/img.jpg";
    const newDescription = "Nueva descripción";

    render(
      <Router>
        <EditBookForm auth={auth} data={data} actions={actions} />
      </Router>
    );
    const inputs = screen.getAllByRole("textbox");
    const inputName = screen.getAllByTestId("name");
    const inputAuthor = screen.getAllByTestId("author");
    const inputImg = screen.getAllByTestId("img");
    const inputDescription = screen.getAllByTestId("description");
    const buttons = screen.getAllByRole("button");

    //? SETUP ASSERTIONS
    expect(inputs).toHaveLength(4);
    expect(inputName).toHaveLength(1);
    expect(inputName[0].value).toContain(data.name);
    expect(inputAuthor).toHaveLength(1);
    expect(inputAuthor[0].value).toContain(data.author);
    expect(inputImg).toHaveLength(1);
    expect(inputImg[0].value).toContain(data.img);
    expect(inputDescription).toHaveLength(1);
    expect(inputDescription[0].value).toContain(data.description);
    expect(buttons).toHaveLength(1);
    expect(buttons[0].innerHTML).toContain("Enviar");

    //? EVENTS
    fireEvent.change(inputName[0], { target: { value: newName } });
    fireEvent.change(inputAuthor[0], { target: { value: newAuthor } });
    fireEvent.change(inputImg[0], { target: { value: newImg } });
    fireEvent.change(inputDescription[0], {
      target: { value: newDescription },
    });
    fireEvent.click(buttons[0]);

    //? ASSERTIONS
    expect(fetchUpdateBook).toBeCalledTimes(1);
    expect(fetchUpdateBook).toBeCalledWith(auth.token, _id, {
      _id,
      name: newName,
      author: newAuthor,
      description: newDescription,
      img: newImg,
    });
  });
});
