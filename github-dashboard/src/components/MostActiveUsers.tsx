import React, { useEffect, useState } from "react";
import { fetchTopActiveUsers } from "../api/Services";
import { UsersModel } from "../models/TopUserModel";
import { generateGuid } from "../utils/generateGuid";
import { Loader } from "./Loader/Loader";
import { UserDetailsCard } from "./TrendingUsers/UserDetailsCard/UserDetailsCard";

export const MostActiveUsers = (): JSX.Element => {
  const [topActiveUsers, setTopActiveUsers] = useState<UsersModel>();

  const getTopActiveUsers = async () => {
    const users = await fetchTopActiveUsers();
    setTopActiveUsers(users);
  };

  useEffect(() => {
    getTopActiveUsers();
  }, []);

  return (
    <>
      <div className="trending-user-title">Most Active Users</div>
      <div className="user-grid">
        {topActiveUsers ? (
          topActiveUsers.items.map((user) => (
            <UserDetailsCard key={generateGuid()} user={user} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
