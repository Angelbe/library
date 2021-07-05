import { IFilterUserList } from "./UserList.interface";

const filterUserList: (param: IFilterUserList) => boolean = ({
  user,
  filterText,
}) => {
  if (!filterText) {
    return true;
  }
  return user?.name.toLowerCase().includes(filterText.toLowerCase());
};
export { filterUserList };
