import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentListDetail } from "../../../../src/Components/common/content/ContentListDetail";
import actions from "../../../fixtures/actions";

describe("ContentListDetail Component", () => {
  it("should render a scene as admin", async () => {
    const { container } = render(
      <Router>
        <ContentListDetail
          type="scene"
          actions={actions}
          item={{
            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
            name: "Escena",
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
          }}
          isAdmin={true}
          token="token"
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getAllByTestId("action-button")).toHaveLength(2);
  });

  it("should render a scene as Non admin", async () => {
    const { container } = render(
      <Router>
        <ContentListDetail
          type="scene"
          actions={actions}
          item={{
            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
            name: "Escena",
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
          }}
          isAdmin={false}
          token="token"
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("action-button")).not.toBeInTheDocument();
  });

  it("should render a character as admin", async () => {
    const { container } = render(
      <Router>
        <ContentListDetail
          type="character"
          actions={actions}
          item={{
            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
            name: "Personaje",
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
          }}
          isAdmin={true}
          token="token"
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getAllByTestId("action-button")).toHaveLength(2);
  });

  it("should render a character as Non admin", async () => {
    const { container } = render(
      <Router>
        <ContentListDetail
          type="character"
          actions={actions}
          item={{
            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
            name: "Personaje",
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
          }}
          isAdmin={false}
          token="token"
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("action-button")).not.toBeInTheDocument();
  });
});
