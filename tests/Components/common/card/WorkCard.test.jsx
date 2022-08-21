import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { WorkCard } from "../../../../src/Components/common/card/WorkCard";
import actions from "../../../fixtures/actions";

describe("WorkCard Component", () => {
  const data = {
    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
    description: "Descripción",
    metadata: {
      createdBy: "user",
    },
    character: {
      book: {
        name: "Obra",
      },
      name: "Personaje",
    },
    scene: {
      name: "Escena",
    },
  };

  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <WorkCard data={data} isAdmin={true} actions={actions} token="token" />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
