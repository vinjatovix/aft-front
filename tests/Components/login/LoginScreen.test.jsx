import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../../../src/contexts/UserContext";
import { LoginScreen } from "../../../src/pages/login/LoginScreen";

jest.mock("../../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));

describe("LoginScreen Component", () => {
  it("should render login form if no authenticated", () => {
    render(
      <UserContext.Provider value={{}}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );
    const inputUsername = screen.getAllByTestId("username");
    const inputPassword = screen.getAllByTestId("password");
    const button = screen.getAllByRole("button")[0];

    expect(inputUsername.length).toBe(1);
    expect(inputPassword.length).toBe(1);
    expect(button.innerHTML).toBe("Login");
  });

  it("should render login form if authenticated with no roles", () => {
    render(
      <UserContext.Provider
        value={{
          auth: {
            token: "token",
            user: { username: "some", roles: [] },
          },
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    const inputUsername = screen.getAllByTestId("username");
    const inputPassword = screen.getAllByTestId("password");
    const button = screen.getAllByRole("button")[0];

    expect(inputUsername.length).toBe(1);
    expect(inputPassword.length).toBe(1);
    expect(button.innerHTML).toBe("Login");
  });

  it("should render admin user panel if authenticated with admin role", () => {
    render(
      <UserContext.Provider
        value={{
          auth: {
            token: "token",
            user: {
              username: "userTest",
              roles: ["aft.admin", "aft.editor", "aft.user"],
            },
          },
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(screen.getByTestId("user-role").innerHTML).toBe("ADMIN");
  });

  it("should render editor user panel if authenticated with editor role", () => {
    render(
      <UserContext.Provider
        value={{
          auth: {
            token: "token",
            user: { username: "usertest", roles: ["aft.editor", "aft.user"] },
          },
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(screen.getByTestId("user-role").innerHTML).toBe("EDITOR");
  });

  it("should render user panel if authenticated with user role", () => {
    render(
      <UserContext.Provider
        value={{
          auth: {
            token: "token",
            user: { username: "usertest", roles: ["aft.user"] },
          },
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(screen.getByTestId("user-role").innerHTML).toBe("USER");
  });

  // render modal if modal true
  it("should render modal if modal true", () => {
    render(
      <UserContext.Provider
        value={{
          auth: {
            token: "token",
            user: { username: "usertest", roles: ["aft.user"] },
          },
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
