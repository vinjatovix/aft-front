export const checkAdminRole = (auth) => {
  const { roles = [] } = auth.user || [];

  return roles.includes("aft.admin");
};
