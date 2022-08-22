import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card } from "../../../../src/Components/common/card/Card";
import mockActions from "../../../fixtures/mockActions";

describe("Card Component", () => {
  it("should render a book card", () => {
    const { container } = render(
      <>
        <Router>
          <Card
            type="book"
            data={{
              _id: "5e9f8f8f8f8f8f8f8f8f8f8",
              name: "Obra",
              author: "Autor",
              img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
              description: "Descripción",
            }}
            actions={mockActions}
            isEditor={false}
            token="token"
          />
        </Router>
      </>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render a works card", () => {
    const { container } = render(
      <>
        <Router>
          <Card
            actions={mockActions}
            data={{
              _id: "5e9f8f8f8f8f8f8f8f8f8f8",
              book: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Obra" },
              student: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Alumno" },
              character: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Personaje" },
              scene: { _id: "5e9f8f8f8f8f8f8f8f8f8f8", name: "Escena" },
              description: "Descripción",
            }}
            isEditor={false}
            token="token"
            type="works"
            w
          />
        </Router>
      </>
    );

    expect(container).toMatchSnapshot();
  });
});
