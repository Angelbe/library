import axios from "axios";
import {
  getItemDetailsType,
  getItemListType,
  IBook,
  IBookDetails,
} from "./bookServices.interface";

const getItemList: getItemListType = ({ offset, count,page }) => {
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

const getBody = () => {
  axios
    .get("/api/body", {
      params: {
        ID: 12345,
      },
      data: {
        data: "DATA",
      },
    })
    .then(function (response) {
      console.log({ Respuesta: response.data });
    });
};

export { getItemList, getItemDetails, getBody };
