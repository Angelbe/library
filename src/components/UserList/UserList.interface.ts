import { IUser } from "../../services/userServices.interfaces";

export interface IFilterUserList {
  user: IUser;
  filterText: string;
}

export interface IUserItemStyled {
  isSelected: boolean;
}
