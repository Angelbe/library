import React, { useEffect, useState } from "react";
import { getUsers } from "src/services/userServices";
import { IUser } from "src/services/userServices.interfaces";
import Loader from "src/components/Spinner";
import Input from "src/components/Input";
import { UserItemStyled, UserListStyled } from "./UserList.styles";
import { filterUserList } from "./UserList.helpers";

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [userSelected, setUserSelected] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((result) => {
        setUserList(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFilterText(event.target.value);
        }}
        placeholder="Filter here..."
      />
      <UserListStyled>
        {userList
          .filter((user) => filterUserList({ user, filterText }))
          .map((user) => {
            return (
              <UserItemStyled
                key={user.id}
                isSelected={userSelected === user.id}
                onClick={() => {
                  setUserSelected(user.id);
                }}
              >
                {user.name}
              </UserItemStyled>
            );
          })}
      </UserListStyled>
    </div>
  );
};

export default UserList;
