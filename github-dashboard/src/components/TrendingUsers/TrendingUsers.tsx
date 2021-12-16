import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UsersModel } from "../../models/UsersModel";
import { AppState } from "../../store/rootReducer";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import "./TrendingUsers.css";
import { UserDetailsCard } from "./UserDetailsCard/UserDetailsCard";

export const TrendingUsers = (): JSX.Element => {
  const trendingUsers: UsersModel = useSelector(
    (state: AppState): UsersModel => state.app.trendingUsers.users
  );

  const hasError = useSelector(
    (state: AppState): boolean => state.app.trendingUsers.hasError
  );

  return (
    <>
      <div className="trending-user-title">Trending Users</div>
      <div className="user-grid">
        {!hasError ? (
          trendingUsers?.items?.length > 0 ? (
            trendingUsers.items.map((user) => (
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
