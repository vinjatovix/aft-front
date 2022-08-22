import { checkRole } from "../../src/helpers/checkRole";

describe("checkRole", () => {
  it("returns true if the user has the aft.admin role", () => {
    const auth = {
      user: {
        roles: ["aft.admin"],
      },
    };

    expect(checkRole(auth, "admin")).toBe(true);
  });

  it("returns false if the user does not have the aft.admin role", () => {
    const auth = {
      user: {
        roles: ["aft.user"],
      },
    };

    expect(checkRole(auth, "editor")).toBe(false);
  });
});
