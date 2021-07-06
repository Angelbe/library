import axios from "axios";
import {
  getItemDetailsType,
  getItemListType,
  putNewBookType,
  IBook,
  IBookDetails,
} from "./bookServices.interface";

const getItemList: getItemListType = ({ offset, count, page }) => {
  return axios({
    method: "get",
    url: "api/v1/items",
    params: {
      offset,
      count,
      page,
    },

    headers: { "content-type": "application/json" },
  }).then((r) => r.data as IBook[]);
};

const getItemDetails: getItemDetailsType = ({ itemID }) => {
  return axios({
    method: "get",
    url: `/api/v1/items/${itemID}`,
    headers: { "content-type": "application/json" },
  }).then((r) => r.data as IBookDetails);
};

const putNewBook: putNewBookType = ({ title, author, price, image }) => {
  console.log("Enviando...")
  return axios({
    method: "put",
    url: `/api/v1/items`,
    data: { title, author, price, image },
    headers: { "content-type": "application/json" },
  }).then((r) => {
    console.log("LOGRADO", r.data);
    return r.data;
  });
};

export { getItemList, getItemDetails, putNewBook };
