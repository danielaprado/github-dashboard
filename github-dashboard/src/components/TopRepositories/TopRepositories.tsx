import { useSelector } from "react-redux";
import { ReposModel } from "../../models/ReposModel";
import { AppState } from "../../store/rootReducer";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import { RepoDetailsCard } from "./RepoDetailsCard/RepoDetailsCard";
import "./TopRepositories.css";

export const TopRepositories = (): JSX.Element => {
  const repos = useSelector(
    (state: AppState): ReposModel => state.app.repos.repos
  );

  const hasError = useSelector(
    (state: AppState): boolean => state.app.repos.hasError
  );

  return (
    <>
      <div className="repos-title">Top Repositories</div>
      <div className="repos-grid">
        {!hasError ? (
          repos.items.length > 0 ? (
            repos.items.map((repo) => (
              <RepoDetailsCard key={generateGuid()} repo={repo} />
            ))
          ) : (
            <Loader />
          )
        ) : (
          <div>No results</div>
        )}
      </div>
    </>
  );
};
