import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentHeader } from "../../../../src/Components/common/content/ContentHeader";

describe("ContentHeader Component", () => {
  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <ContentHeader
          title="Escenas:"
          count={3}
          book={{
            name: "Obra",
            author: "Autor",
            description: "Descripción",
          }}
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
  it("should show title Escenas: 3", async () => {
    render(
      <Router>
        <ContentHeader title="Escenas:" count={3} />
      </Router>
    );
    const h1 = screen.getByTestId("Escenas:");

    expect(h1.innerHTML).toContain("Escenas: 3");
  });
});
