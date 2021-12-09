import { useEffect, useState } from "react";
import { fetchTopUsers } from "../api/Services";
import { UsersModel } from "../models/TopUserModel";
import { generateGuid } from "../utils/generateGuid";
import "./TrendingUsers.css";
import { UserDetailsCard } from "./UserDetailsCard";

export const TrendingUsers = (): JSX.Element => {
  const [topUsers, setTopUsers] = useState<UsersModel>({
    incomplete_results: false,
    total_count: -1,
    items: [],
  });

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
    <div className="user-grid">
      {topUsers.items.map((user) => (
        <div key={generateGuid()}>
          <UserDetailsCard user={user} />
        </div>
      ))}
    </div>
  );
};
