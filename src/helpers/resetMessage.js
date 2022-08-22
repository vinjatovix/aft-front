export const resetMessage = (set, initMessage, callback = () => ({})) => {
  setTimeout(() => {
    set(initMessage);
  }, 2500);

  callback();
};
