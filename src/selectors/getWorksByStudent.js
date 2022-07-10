export const getWorksByStudent = (data, username) =>
  data.filter((work) => work.student.name === username);
