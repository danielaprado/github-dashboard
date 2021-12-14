import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/rootReducer";
import { generateGuid } from "../utils/generateGuid";
import { Loader } from "./Loader/Loader";
import { UserDetailsCard } from "./TrendingUsers/UserDetailsCard/UserDetailsCard";

export const MostActiveUsers = (): JSX.Element => {
  const topActiveUsers = useSelector(
    (state: AppState) => state.app.topActiveUsers
  );

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
