import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card } from "../../../../src/Components/common/card/Card";
import mockActions from "../../../fixtures/mockActions";
import mockWorks from "../../../fixtures/mockWorks";
import mockBooks from "../../../fixtures/mockBooks";

describe("Card Component", () => {
  it("should render a book card", () => {
    const { container } = render(
      <>
        <Router>
          <Card
            type="book"
            data={mockBooks[0]}
            actions={mockActions}
            isEditor={false}
            token="token"
          />
        </Router>
      </>
    );

    const title = screen.getByTestId("Obra");
    expect(title.innerHTML).toBe(mockBooks[0].name);

    const author = screen.getByTestId("Autor");
    expect(author.innerHTML).toBe(mockBooks[0].author);

    expect(container).toMatchSnapshot();
  });

  it("should render a work card", () => {
    render(
      <>
        <Router>
          <Card
            actions={mockActions}
            data={mockWorks[0]}
            isEditor={false}
            token="token"
            type="work"
            w
          />
        </Router>
      </>
    );

    const student = screen.getByTestId("interprete");
    expect(student.innerHTML).toBe("by: user");

    const book = screen.getByTestId("obra");
    expect(book.innerHTML).toBe("Obra: Obra");

    const character = screen.getByTestId("personaje");
    expect(character.innerHTML).toBe("Personaje: Personaje");

    const scene = screen.getByTestId("escena");
    expect(scene.innerHTML).toBe("Escena: Escena");

    const description = screen.getByTestId("descripcion");
    expect(description.innerHTML).toBe("Descripción: Descripción");
  });
});
