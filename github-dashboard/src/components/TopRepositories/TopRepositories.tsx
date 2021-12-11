import { useEffect, useState } from "react";
import { fetchTopRepos } from "../../api/Services";
import { ReposModel } from "../../models/ReposModel";
import { generateGuid } from "../../utils/generateGuid";
import { Loader } from "../Loader/Loader";
import { RepoDetailsCard } from "./RepoDetailsCard/RepoDetailsCard";

export const TopRepositories = (): JSX.Element => {
  const [topRepos, setTopRepos] = useState<ReposModel>();

  const getTopRepos = async () => {
    const topRepos = await fetchTopRepos();
    setTopRepos(topRepos);
  };

  useEffect(() => {
    getTopRepos();
  }, []);
  return (
    <>
      <div className="trending-user-title">Top Repositories</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
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
