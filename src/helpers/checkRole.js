export const checkRole = (user, role) => {
  const { roles = [] } = user;

  return roles.includes(`aft.${role}`);
};
