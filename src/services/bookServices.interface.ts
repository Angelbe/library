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

export interface getItemListParams {
  offset?: number;
  count?: number;
  page: number;
}

export interface getItemDetailsParams {
  itemID: number;
}

export type getItemListType = (params: getItemListParams) => Promise<IBook[]>;

export type getItemDetailsType = (
  params: getItemDetailsParams
) => Promise<IBookDetails>;
