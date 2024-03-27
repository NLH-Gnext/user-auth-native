import axios from "axios";
const API_KEY = "AIzaSyBYLNKRJMNMDy7-GAdNu8jDcVrLudydwfM";

const authenticate = async (mode, email, password) => {
  const baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(baseUrl, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
};

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}
