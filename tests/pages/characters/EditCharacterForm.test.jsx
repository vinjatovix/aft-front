import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchUpdateCharacter } from "../../../src/http";
import EditCharacterForm from "../../../src/pages/characters/EditCharacterForm";

jest.mock("../../../src/http", () => ({
  fetchUpdateCharacter: jest.fn().mockReturnValue({ ok: true }),
}));

const _id = "5e9f8f8f8f8f8f8f8f8f8f8";

const data = {
  _id,
  name: "Personaje",
  gender: "male",
  center: "instintive",
  description: "some description",
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

describe("EditCharacterForm Component", () => {
  it("should render the form with no values", () => {
    render(
      <Router>
        <EditCharacterForm auth={auth} />
      </Router>
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
    expect(inputs[0].value).toBe("");
    expect(inputs[0].name).toBe("name");
    expect(inputs[1].value).toBe("");
    expect(inputs[1].name).toBe("description");

    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBe(2);
    expect(selects[0].name).toBe("gender");
    expect(selects[1].name).toBe("center");

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1);
    expect(buttons[0].innerHTML).toBe("Enviar");
  });

  it("should update form values", () => {
    //? SETUP

    const newName = "Nuevo nombre";
    const newGender = "female";
    const newCenter = "mental";
    const newDescription = "some new description";

    render(
      <Router>
        <EditCharacterForm auth={auth} data={data} actions={actions} />
      </Router>
    );
    const inputs = screen.getAllByRole("textbox");
    const selects = screen.getAllByRole("combobox");
    const inputName = screen.getAllByTestId("name");
    const selectGender = screen.getAllByTestId("gender");
    const selectCenter = screen.getAllByTestId("center");
    const inputDescription = screen.getAllByTestId("description");
    const buttons = screen.getAllByRole("button");

    //? SETUP ASSERTIONS
    expect(inputs).toHaveLength(2);
    expect(selects).toHaveLength(2);
    expect(inputName).toHaveLength(1);
    expect(inputName[0].value).toContain(data.name);
    expect(inputDescription).toHaveLength(1);
    expect(inputDescription[0].value).toContain(data.description);
    expect(selectGender).toHaveLength(1);
    expect(selectGender[0].value).toBe(data.gender);
    expect(selectCenter).toHaveLength(1);
    expect(selectCenter[0].value).toBe(data.center);
    expect(buttons).toHaveLength(1);
    expect(buttons[0].innerHTML).toBe("Enviar");

    //? EVENTS
    fireEvent.change(inputName[0], { target: { value: newName } });
    fireEvent.change(selectGender[0], { target: { value: newGender } });
    fireEvent.change(selectCenter[0], { target: { value: newCenter } });
    fireEvent.change(inputDescription[0], {
      target: { value: newDescription },
    });
    fireEvent.click(buttons[0]);

    //? ASSERTIONS
    expect(fetchUpdateCharacter).toBeCalledTimes(1);
    expect(fetchUpdateCharacter).toBeCalledWith(auth.token, _id, {
      _id,
      name: newName,
      gender: newGender,
      center: newCenter,
      description: newDescription,
    });
  });
});
