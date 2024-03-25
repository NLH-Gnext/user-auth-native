import axios from "axios";
const API_KEY = "AIzaSyBYLNKRJMNMDy7-GAdNu8jDcVrLudydwfM";

const authenticate = async (mode, email, password) => {
  const baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(baseUrl, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
};

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function loginUser(email, password) {
  await authenticate("signInWithPassword", email, password);
}
