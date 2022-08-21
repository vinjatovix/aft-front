import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserCard } from "../../../../src/Components/common/card/UserCard";
import actions from "../../../fixtures/actions";

describe("UserCard Component", () => {
  const data = {
    username: "user",
    roles: ["aft.admin", "aft.user", "aft.editor"],
  };

  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <UserCard data={data} isAdmin={true} actions={actions} token="token" />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show ADMIN", async () => {
    render(
      <Router>
        <UserCard data={data} isAdmin={false} actions={actions} token="token" />
      </Router>
    );
    const li = screen.getByTestId("username");

    expect(li.innerHTML).toContain(data.username);
    expect(screen.getByTestId("role").innerHTML).toContain("ADMIN");
  });

  it("should show EDITOR", async () => {
    render(
      <Router>
        <UserCard
          data={{
            username: "user",
            roles: ["aft.user", "aft.editor"],
          }}
          isAdmin={false}
          actions={actions}
          token="token"
        />
      </Router>
    );
    const li = screen.getByTestId("username");

    expect(li.innerHTML).toContain(data.username);
    expect(screen.getByTestId("role").innerHTML).toContain("EDITOR");
  });

  it("should show USER", async () => {
    render(
      <Router>
        <UserCard
          data={{
            username: "user",
            roles: ["aft.user"],
          }}
          isAdmin={false}
          actions={actions}
          token="token"
        />
      </Router>
    );

    expect(screen.getByTestId("username").innerHTML).toContain(data.username);
    expect(screen.getByTestId("role").innerHTML).toContain("USER");
  });
});
