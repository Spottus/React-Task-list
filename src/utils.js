export const isExpired = (date) => {
  return Date.now() > Date.parse(date);
};
