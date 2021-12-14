import { useSelector } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import { RepoDetailsCard } from "./RepoDetailsCard/RepoDetailsCard";
import "./TopRepositories.css";

export const TopRepositories = (): JSX.Element => {
  const topRepos = useSelector((state: AppState) => state.app.topRepos);

  return (
    <>
      <div className="repos-title">Top Repositories</div>
      <div className="repos-grid">
        {topRepos ? (
          topRepos.items.map((repo) => (
            <RepoDetailsCard key={generateGuid()} repo={repo} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
