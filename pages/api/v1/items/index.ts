/* eslint-disable no-case-declarations */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IBook } from "src/services/bookServices.interface";
import { bookDetailsList } from "./[id]";

const listItems: IBook[] = [
  { id: 1, link: "/api/v1/items/1", title: "Harry Poter" },
  { id: 2, link: "/api/v1/items/2", title: "Lord of the rings" },
  { id: 3, link: "/api/v1/items/3", title: "Idhun" },
  { id: 4, link: "/api/v1/items/4", title: "Eragon" },
  { id: 5, link: "/api/v1/items/5", title: "Sherlock Holmes" },
  { id: 6, link: "/api/v1/items/6", title: "Umineko" },
  { id: 7, link: "/api/v1/items/7", title: "Song of ice and fire" },
  { id: 8, link: "/api/v1/items/8", title: "City of the beasts" },
  { id: 9, link: "/api/v1/items/9", title: "Where is waldo" },
  { id: 10, link: "/api/v1/items/10", title: "Asterix and Obelix" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBook[] | string>
) {
  let result = [...listItems];

  switch (req.method) {
    case "PUT":
      const { author, image, price, title } = req.body;
      const newId = listItems[listItems.length - 1].id + 1;
      const newBook = {
        id: newId,
        link: `/api/v1/items/${newId}`,
        title,
      };
      const newBookDetailed = {
        id: newId,
        image,
        title,
        author,
        price,
      };
      bookDetailsList.push(newBookDetailed);
      result.push(newBook);
      res.status(200).json("OK");
      break;
    case "GET":
    default:
      const { count, offset, page } = req.query;
      const offsetNum = JSON.parse(offset as string);
      const countNum = JSON.parse(count as string);
      const pageNum = JSON.parse(page as string);
      
      if (offsetNum > 0) {
        result = result.slice(offsetNum);
      }

      if (countNum > 0) {
        let endCount = pageNum * countNum;
        let startCount = endCount - countNum;
        if (endCount > result.length + countNum) {
          endCount = result.length;
          startCount = result.length;
        } else if (pageNum > result.length / countNum) {
          endCount = result.length;
          startCount = result.length - (result.length % countNum);
        }
        result = result.slice(startCount, endCount);
      }

      res.status(200).json(result);
      break;
  }
}
