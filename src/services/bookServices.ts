import axios from "axios";
import { IBook } from "./bookServices.interface";

const sayHello = () => {
  return axios.get("api/books").then((r) => r.data as IBook[]);
};

export { sayHello };
