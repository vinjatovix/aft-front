const { checkAdminRole } = require("../../src/helpers/checkAdminRole");

describe("checkAdminRole", () => {
  it("returns true if the user has the aft.admin role", () => {
    const auth = {
      user: {
        roles: ["aft.admin"],
      },
    };

    expect(checkAdminRole(auth)).toBe(true);
  });

  it("returns false if the user does not have the aft.admin role", () => {
    const auth = {
      user: {
        roles: ["aft.user"],
      },
    };

    expect(checkAdminRole(auth)).toBe(false);
  });
});
