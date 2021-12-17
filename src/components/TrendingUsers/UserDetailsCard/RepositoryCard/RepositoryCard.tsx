import { RepoInfoModel } from '../../../../models/RepoInfoModel';
import star from '../../../../assets/star.png';
import './RepositoryCard.css';

export const RepositoryCard = ({
  userStarredRepo,
}: {
  userStarredRepo: Omit<RepoInfoModel, 'score'>[] | undefined;
}): JSX.Element => {
  const getUsersRepoDescription = () => {
    if (
      userStarredRepo &&
      userStarredRepo[0] &&
      userStarredRepo[0].description
    ) {
      if (userStarredRepo[0].description.length > 40)
        return userStarredRepo[0].description.substring(0, 40) + '...';
      else return userStarredRepo[0].description;
    } else return 'This is my hello project!';
  };

  return (
    <div className='repository-card-container'>
      <div className='repository-card'>
        <div className='repository-card-organization'>
          <div className='repository-card-name'>
            {userStarredRepo ? userStarredRepo[0].name : 'Hello world'}
          </div>
          <div className='repository-card-name-star'>
            <img
              src={star}
              className='repository-card-star-avatar'
              alt='star avatar'
            />
            <div className='repository-card-user-follower-count'>
              {userStarredRepo ? userStarredRepo[0].stargazers_count : '56'}
            </div>
          </div>
        </div>
        <div className='repository-card-description'>
          {getUsersRepoDescription()}
        </div>
      </div>
    </div>
  );
};
