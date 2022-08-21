export const isAuthenticated = (auth) =>
  auth && auth.user && auth.user.roles.length;
