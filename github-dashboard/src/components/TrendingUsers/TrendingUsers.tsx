import { useSelector } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import "./TrendingUsers.css";
import { UserDetailsCard } from "./UserDetailsCard/UserDetailsCard";

export const TrendingUsers = (): JSX.Element => {
  const trendingUsers = useSelector(
    (state: AppState) => state.app.topTrendingUsers
  );

  return (
    <>
      <div className="trending-user-title">Trending Users</div>
      <div className="user-grid">
        {trendingUsers ? (
          trendingUsers.items.map((user) => (
            <UserDetailsCard key={generateGuid()} user={user} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
