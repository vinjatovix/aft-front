import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import mockActions from "../../../fixtures/mockActions";
import { UserCard } from "../../../../src/Components/user/UserCard";

describe("UserCard Component", () => {
  const data = {
    username: "user",
    roles: ["aft.admin", "aft.user", "aft.editor"],
  };

  it("should match snapshot", async () => {
    const { container } = render(
      <Router>
        <UserCard
          data={data}
          isEditor={true}
          actions={mockActions}
          token="token"
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show ADMIN", async () => {
    render(
      <Router>
        <UserCard
          data={data}
          isEditor={false}
          actions={mockActions}
          token="token"
        />
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
          isEditor={false}
          actions={mockActions}
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
          isEditor={false}
          actions={mockActions}
          token="token"
        />
      </Router>
    );

    expect(screen.getByTestId("username").innerHTML).toContain(data.username);
    expect(screen.getByTestId("role").innerHTML).toContain("USER");
  });
});
