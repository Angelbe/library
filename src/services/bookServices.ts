import axios from "axios";
import {
  IBook,
  IBookDetails,
  getItemDetailsParams,
} from "./bookServices.interface";

const getItemList = () => {
  return axios({
    method: "get",
    url: "api/v1/items",
    headers: { "content-type": "application/json" },
  }).then((r) => r.data as IBook[]);
};

const getItemDetails = ({ itemID }: any) => {
  console.log(itemID);
  return axios({
    method: "get",
    url: `/api/v1/items/${itemID}`,
    headers: { "content-type": "application/json" },
  }).then((r) => r.data as IBookDetails);
};

export { getItemList, getItemDetails };
