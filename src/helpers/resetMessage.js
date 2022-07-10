export const resetMessage = (set, feedBackMessage, callback) => {
  setTimeout(() => {
    set(feedBackMessage);
  }, 2500);
  callback();
};
