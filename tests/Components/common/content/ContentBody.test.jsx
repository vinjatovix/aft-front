import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentBody } from "../../../../src/Components/common/content/ContentBody";
import mockActions from "../../../fixtures/mockActions";

describe("ContentBody Component", () => {
  it("should render scenes content with admin buttons", async () => {
    const { container } = render(
      <Router>
        <ContentBody
          type="scenes"
          actions={mockActions}
          token="token"
          isEditor={true}
          content={[
            {
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
            },
            {
              _id: "5e9f8f8f8f8f8f8f8f8f8f9",
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
            },
          ]}
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getAllByTestId("action-button")).toHaveLength(4);
  });

  it("should render characters content without admin buttons", async () => {
    const { container } = render(
      <Router>
        <ContentBody
          type="characters"
          actions={mockActions}
          token="token"
          isEditor={false}
          content={[
            {
              _id: "6301221d03b6fbb712bbde7f",
              name: "Agnes Kris",
              book: {
                _id: "6301216103b6fbb712bbde7c",
                name: "transmitter Refined",
                author: "Theresa Larkin",
                description:
                  "I'll index the auxiliary SAS program, that should interface the USB driver!",
                metadata: {
                  createdAt: "2022-08-20T18:01:05.244Z",
                  createdBy: "userdev",
                  updatedAt: "2022-08-20T18:01:05.244Z",
                  updatedBy: "userdev",
                },
              },
              center: "instintive",
              description: "encompassing",
              metadata: {
                createdAt: "2022-08-20T18:04:13.283Z",
                createdBy: "userdev",
                updatedAt: "2022-08-20T18:04:13.283Z",
                updatedBy: "userdev",
              },
            },
            {
              _id: "6301221d03b6fbb712bbde7s",
              name: "Agnes KROS",
              book: {
                _id: "6301216103b6fbb712bbde7c",
                name: "transmitter RefinedOASI",
                author: "Theresa Larkin",
                description:
                  "I'll index the auxiliary SAS program, that should interface the USB driver!",
                metadata: {
                  createdAt: "2022-08-20T18:01:05.244Z",
                  createdBy: "userdev",
                  updatedAt: "2022-08-20T18:01:05.244Z",
                  updatedBy: "userdev",
                },
              },
              center: "instintive",
              description: "encompassing",
              metadata: {
                createdAt: "2022-08-20T18:04:13.283Z",
                createdBy: "userdev",
                updatedAt: "2022-08-20T18:04:13.283Z",
                updatedBy: "userdev",
              },
            },
          ]}
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("action-button")).not.toBeInTheDocument();
  });
});
