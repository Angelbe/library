// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IBook } from "src/services/bookServices.interface";

const listItems: IBook[] = [
  { id: 1, link: "https://www.amazon.com/-/es/dp/B017V4IMVQ", title: "Harry Poter" },
  { id: 2, link: "https://www.amazon.com/-/es/dp/B0099SNQYG", title: "Lord of the rings" },
  { id: 3, link: "https://www.amazon.com/-/es/dp/B08R6F3XTZ", title: "Idhun" },
  { id: 4, link: "https://www.amazon.com/-/es/dp/B0000U7N4G", title: "Eragon" },
  { id: 5, link: "https://www.amazon.com/-/es/dp/B00H99ZRH6", title: "Sherlock Holmes" },
  { id: 6, link: "https://www.amazon.com/-/es/dp/B005QBKWC4", title: "Umineko" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBook[]>
) {
  res.status(200).json(listItems);
}
