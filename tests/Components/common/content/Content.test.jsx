import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { Content } from "../../../../src/Components/common/content/Content";
import { NavigateButton } from "../../../../src/Components/ui/buttons/NavigateButton";
import { ContentHeader } from "../../../../src/Components/common/content/ContentHeader";
import { ContentBody } from "../../../../src/Components/common/content/ContentBody";
import mockActions from "../../../fixtures/mockActions";
import mockBooks from "../../../fixtures/mockBooks.json";
import mockScenes from "../../../fixtures/mockScenes.json";
import mockCharacters from "../../../fixtures/mockCharacters.json";
import { mockAuthAdmin } from "../../../fixtures/auth";

const modals = {
  add: false,
  blur: false,
  delete: false,
  detail: false,
  edit: false,
  data: {},
  lastRefresh: +new Date(),
};

describe("Content Component", () => {
  it("should render scenes content", async () => {
    const Entity = { data: mockScenes };

    const isEditor = true;
    const auth = mockAuthAdmin;

    const { container } = render(
      <Router>
        <Content modals={modals} actions={mockActions} isEditor={isEditor}>
          <NavLink to={`/characters/book/${mockBooks[0]._id}`}>
            <NavigateButton text="🎭 Personajes" />
          </NavLink>

          <ContentHeader
            book={mockBooks[0]}
            title="Escenas:"
            count={Entity.data.length}
          />

          <ContentBody
            type="scene"
            content={Entity.data}
            isEditor={isEditor}
            actions={mockActions}
            token={auth.token}
          />
        </Content>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render characters content", async () => {
    const Entity = { data: mockCharacters };

    const isEditor = true;
    const auth = { token: "token" };

    const { container } = render(
      <Router>
        <Content modals={modals} actions={mockActions} isEditor={isEditor}>
          <NavLink to={`/characters/book/${mockBooks[0]._id}`}>
            <NavigateButton text="🎭 Personajes" />
          </NavLink>

          <ContentHeader
            book={mockBooks[0]}
            title="Personajes:"
            count={Entity.data.length}
          />

          <ContentBody
            type="character"
            content={Entity.data}
            isEditor={isEditor}
            actions={mockActions}
            token={auth.token}
          />
        </Content>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
