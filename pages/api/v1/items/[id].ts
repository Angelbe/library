import { IBookDetails } from "src/services/bookServices.interface";

const bookDetailsList: IBookDetails[] = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/912+lFcOMxL._AC_UL320_.jpg",
    title: "Harry Poter",
    author: "J.K. Rowling",
    price: 10,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/71dY7Hc8VVL._AC_UL320_.jpg",
    title: "Lord of the rings",
    author: "J.R.R Tolkien",
    price: 10,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/91gptViUokL._AC_UL320_.jpg",
    title: "Idhun",
    author: "Laura Gallego",
    price: 10,
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/814gP+Af6OL._AC_UL320_.jpg",
    title: "Eragon",
    author: "Cristopher Paulini",
    price: 10,
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/71CB+Uv+bPL._AC_UL320_.jpg",
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 10,
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDDUp0aHqOxedYAnTfgwv97oYP-rVC1bLSxDtZNSCkZxOGLUDBsdrpoKOph2JKyaJyBM&usqp=CAU",
    title: "Umineko",
    author: "7th expansion",
    price: 10,
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/81dFY6Y6d+L._AC_UL320_.jpg",
    title: "Song of ice and fire",
    author: "G.R.R Martin",
    price: 10,
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/51PHfpH0ogL._AC_UL320_.jpg",
    title: "City of the beasts",
    author: "Laura Gallego",
    price: 10,
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/A1VFTY8aDCL._AC_UL320_.jpg",
    title: "Where is waldo",
    author: "Martin Handford",
    price: 10,
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/61mRMfWzgLL._AC_UL320_.jpg",
    title: "Asterix and Obelix",
    author: " Albert Uderzo, René Goscinny",
    price: 10,
  },
];

export default function handler(req, res) {
  const { id } = req.query;
  const result = bookDetailsList.find(
    (element) => element.id === JSON.parse(id)
  );
  res.status(200).json(result);
}
