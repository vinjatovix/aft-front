export const checkRole = (auth, role) => {
  const { roles = [] } = auth.user || {};

  return roles.includes(`aft.${role}`);
};
