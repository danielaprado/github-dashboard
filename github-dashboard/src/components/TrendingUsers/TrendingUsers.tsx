import { useEffect, useState } from "react";
import { fetchTopUsers } from "../../api/Services";
import { UsersModel } from "../../models/TopUserModel";
import { generateGuid } from "../../utils/generateGuid";
import { UserDetailsCard } from "./UserDetailsCard/UserDetailsCard";
import "./TrendingUsers.css";
import { Loader } from "../Loader/Loader";

export const TrendingUsers = (): JSX.Element => {
  const [topUsers, setTopUsers] = useState<UsersModel>();

  const getTopUsers = async () => {
    const users = await fetchTopUsers();
    setTopUsers(users);
  };

  useEffect(() => {
    getTopUsers();
  }, []);

  useEffect(() => {
    console.log(topUsers);
  }, [topUsers]);

  return (
    <>
      <div className="trending-user-title">Trending Users</div>
      <div className="user-grid">
        {topUsers ? (
          topUsers.items.map((user) => (
            <UserDetailsCard key={generateGuid()} user={user} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
