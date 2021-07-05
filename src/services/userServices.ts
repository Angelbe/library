import axios from "axios";
import { IUser } from "./userServices.interfaces";

const getUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.data as IUser[]);
};

export { getUsers };
