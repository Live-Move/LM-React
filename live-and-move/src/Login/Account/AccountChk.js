export const isSessionExists = () => {
  let response = sessionStorage.getItem("userData");
  return response !== null ? JSON.parse(response) : null;
};
