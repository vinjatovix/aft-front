import { checkRole } from "../../src/helpers/checkRole";

describe("checkRole", () => {
  it("returns true if the user has the aft.admin role", () => {
    const user = {
      roles: ["aft.admin"],
    };

    expect(checkRole(user, "admin")).toBe(true);
  });

  it("returns false if the user does not have the aft.admin role", () => {
    const user = {
      roles: ["aft.user"],
    };

    expect(checkRole(user, "editor")).toBe(false);
  });
});
