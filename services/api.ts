import axios from "axios";

const api = axios.create({
  baseURL:
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com",
});

export default api;
