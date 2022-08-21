import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { Content } from "../../../../src/Components/common/content/Content";
import { NavigateButton } from "../../../../src/Components/ui/buttons/NavigateButton";
import { ContentHeader } from "../../../../src/Components/common/content/ContentHeader";
import { ContentBody } from "../../../../src/Components/common/content/ContentBody";
import actions from "../../../fixtures/actions";
import books from "../../../fixtures/books";
import scenes from "../../../fixtures/scenes";
import characters from "../../../fixtures/characters";

describe("Content Component", () => {
  it("should render scenes content", async () => {
    const Entity = { data: scenes };

    const dispatchEntity = { count: 3 };
    const isAdmin = true;
    const auth = { token: "token" };
    const modals = {
      add: false,
      blur: false,
      delete: false,
      detail: false,
      edit: false,
      data: {},
    };

    const { container } = render(
      <Router>
        <Content modals={modals} modalActions={actions} isAdmin={isAdmin}>
          <NavLink to={`/characters/book/${books[0]._id}`}>
            <NavigateButton text="🎭 Personajes" />
          </NavLink>

          <ContentHeader
            book={books[0]}
            title="Escenas:"
            count={Entity.data.length}
          />

          <ContentBody
            type="scene"
            content={Entity.data}
            isAdmin={isAdmin}
            actions={actions}
            token={auth.token}
          />
        </Content>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render characters content", async () => {
    const Entity = { data: characters };

    const isAdmin = true;
    const auth = { token: "token" };
    const modals = {
      add: false,
      blur: false,
      delete: false,
      detail: false,
      edit: false,
      data: {},
    };

    const { container } = render(
      <Router>
        <Content modals={modals} modalActions={actions} isAdmin={isAdmin}>
          <NavLink to={`/characters/book/${books[0]._id}`}>
            <NavigateButton text="🎭 Personajes" />
          </NavLink>

          <ContentHeader
            book={books[0]}
            title="Personajes:"
            count={Entity.data.length}
          />

          <ContentBody
            type="character"
            content={Entity.data}
            isAdmin={isAdmin}
            actions={actions}
            token={auth.token}
          />
        </Content>
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
