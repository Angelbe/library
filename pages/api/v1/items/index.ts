// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IBook } from "src/services/bookServices.interface";

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
  res: NextApiResponse<IBook[]>
) {
  res.status(200).json(listItems);
}
