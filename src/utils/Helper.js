export const getUserInfo = () =>
  localStorage.getItem("userInfo.token") &&
  JSON.parse(localStorage.getItem("userInfo.token"))["token"];
