import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UsersModel } from "../models/UsersModel";
import { AppState } from "../store/rootReducer";
import { generateGuid } from "../utils/generateGuid";
import { Loader } from "./Loader/Loader";
import { UserDetailsCard } from "./TrendingUsers/UserDetailsCard/UserDetailsCard";

export const MostActiveUsers = (): JSX.Element => {
  const activeUsers: UsersModel = useSelector(
    (state: AppState): UsersModel => state.app.activeUsers.users
  );

  const hasError = useSelector(
    (state: AppState): boolean => state.app.activeUsers.hasError
  );

  return (
    <>
      <div className="trending-user-title">Most Active Users</div>
      <div className="user-grid">
        {!hasError ? (
          activeUsers?.items?.length > 0 ? (
            activeUsers.items.map((user) => (
              <UserDetailsCard key={generateGuid()} user={user} />
            ))
          ) : (
            <div>No results</div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
