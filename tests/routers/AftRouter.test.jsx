import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/contexts/UserContext";
import { UserProvider } from "../../src/providers/UserProvider";
import { AftRouter } from "../../src/routers/AftRouter";
import getUserContext from "../fixtures/getUserContext";

jest.mock("../../src/helpers/getApiHost", () => ({
  getApiHost: jest.fn().mockReturnValue("host"),
}));

describe("AftRouter Component", () => {
  it("should show 2 links on navBar if no authenticated", async () => {
    render(
      <UserProvider>
        <AftRouter />
      </UserProvider>
    );

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(2);
    expect(links[0].innerHTML).toBe("🏠 Inicio");
    expect(links[1].innerHTML).toBe("🔐 Login");
  });

  it("should show 4 links on navBar is authenticated", async () => {
    render(
      <UserContext.Provider
        value={{
          auth: getUserContext("admin"),
        }}
      >
        <AftRouter />
      </UserContext.Provider>
    );
    localStorage.setItem("token", "token");

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(4);
    expect(links[0].innerHTML).toBe("🏠 Inicio");
    expect(links[1].innerHTML).toBe("📚 Obras");
    expect(links[2].innerHTML).toBe("📝Trabajos");
    expect(links[3].innerHTML).toBe("🔐 Login");
  });
});
