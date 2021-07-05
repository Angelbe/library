export interface IBook {
  id: number;
  link: string;
  title: string;
}

export interface IBookDetails {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
}

export interface getItemDetailsParams {
  itemID:any
}
