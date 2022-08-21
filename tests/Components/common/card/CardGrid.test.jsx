import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CardGrid } from "../../../../src/Components/common/card/CardGrid";
import actions from "../../../fixtures/actions";

describe("CardGrid Component", () => {
  it("should render a book card grid with 3 cards", () => {
    const { container } = render(
      <Router>
        <CardGrid
          type="book"
          data={[
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f8",
              name: "Obra",
              author: "Autor",
              img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
              description: "Descripción",
            },
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f7",
              name: "Obra",
              author: "Autor",
              img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
              description: "Descripción",
            },
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f6",
              name: "Obra",
              author: "Autor",
              img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
              description: "Descripción",
            },
          ]}
          actions={actions}
          isAdmin={false}
          token="token"
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render a works card grid with 3 cards", () => {
    const { container } = render(
      <Router>
        <CardGrid
          type="works"
          data={[
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f8",
              book: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Obra" },
              student: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Alumno" },
              character: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Personaje" },
              scene: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Escena" },
              description: "Descripción",
            },
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f7",
              book: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Obra" },
              student: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Alumno" },
              character: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Personaje" },
              scene: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Escena" },
              description: "Descripción",
            },
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f6",
              book: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Obra" },
              student: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Alumno" },
              character: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Personaje" },
              scene: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Escena" },
              description: "Descripción",
            },
          ]}
          actions={actions}
          isAdmin={false}
          token="token"
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
