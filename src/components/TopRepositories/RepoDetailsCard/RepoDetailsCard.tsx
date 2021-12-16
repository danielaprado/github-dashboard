import { RepoInfoModel } from "../../../models/RepoInfoModel";
import "./RepoDetailsCard.css";
import start from "../../../assets/star.png";

export const RepoDetailsCard = ({
  repo,
  borderColor,
}: {
  repo: RepoInfoModel;
  borderColor: string;
}): JSX.Element => {
  return (
    <div
      className="repo-card repo-text"
      style={{ borderTop: `7px solid ${borderColor}` }}
    >
      <div className="repo-language">
        {!repo.language ? "Language X" : repo.language}
      </div>
      <div className="repo-star-container">
        <img src={start} className="repo-star-icon" alt="star icon" />
        <div className="repo-start-count">
          {!repo.stargazers_count ? "0" : repo.stargazers_count}
        </div>
      </div>
      <div className="repo-description">
        {!repo.description
          ? "This is my hello project! This is my hello project! Tis is my hello project"
          : repo.description.length > 150
          ? repo.description.substring(0, 150) + "..."
          : repo.description}
      </div>
    </div>
  );
};
