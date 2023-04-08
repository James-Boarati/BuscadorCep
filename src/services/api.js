import axios from "axios";

//03615030/json/

const api = axios.create({
  baseURL: "http://viacep.com.br/ws/"
});

export default api;