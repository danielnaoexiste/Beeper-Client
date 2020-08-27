import axios from "axios";
import { BASE_URL } from "../../env.json";

export default axios.create({
  baseURL: BASE_URL,
});
