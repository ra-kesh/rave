import axios from "axios";
import API_URL from "../../api/config";

export const loginUser = async (userCredentials) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/users/login`,
      userCredentials,
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const registerUser = async (userCredentials) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/users/signup`,
      userCredentials,
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    response = error.message;
  }
  return response;
};

// export const updateUser = async (data, token) => {
//   console.log(token);
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   let response = null;
//   try {
//     response = await axios.post(`${API_URL}/users/profile`, data, config);
//     console.log(response);
//     // localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
//     // return response.data;
//   } catch (err) {
//     response = err.message;
//   }
//   return response;
// };
