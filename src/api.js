import axios from "axios";

const api = axios.create({
    baseURL: "https://irias.com.br/tutorials/react-native/api.php",
  });
  
  export default api;