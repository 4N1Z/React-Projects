import axios from "axios"
import {base_url} from "./constants/constants"

const instance = axios.create({
    baseURL : base_url
  });

  //this is to export the instance to other files.

  export default instance
