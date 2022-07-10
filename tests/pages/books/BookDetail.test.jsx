import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const { BookDetail } = require("../../../src/pages/books/BookDetail");

describe("BookDetail Component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Router>
        <BookDetail
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
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
