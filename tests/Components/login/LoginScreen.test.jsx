import { render, screen } from "@testing-library/react";
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
});
