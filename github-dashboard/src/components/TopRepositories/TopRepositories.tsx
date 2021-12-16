import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReposModel } from "../../models/ReposModel";
import { AppState } from "../../store/rootReducer";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import { RepoDetailsCard } from "./RepoDetailsCard/RepoDetailsCard";
import "./TopRepositories.css";

export const mapIdColor: {
  [id: number]: {
    color: string;
  };
} = {
  0: {
    color: "#122195",
  },
  1: {
    color: "#2179e5",
  },
  2: {
    color: "#3195d3",
  },
  3: {
    color: "#69c8ed",
  },
};

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
          repos?.items?.length > 0 ? (
            repos.items.map((repo, index) => (
              <RepoDetailsCard
                key={generateGuid()}
                repo={repo}
                borderColor={mapIdColor[index].color}
              />
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
