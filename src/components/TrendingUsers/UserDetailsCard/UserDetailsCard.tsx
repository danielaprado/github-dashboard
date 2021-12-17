import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser, fetchUserStarredRepo } from '../../../api/Services';
import { RepoInfoModel } from '../../../models/RepoInfoModel';
import { UserDetailedInfo } from '../../../models/UserDetailedInfo';
import { UserInfoModel } from '../../../models/UserInfoModel';
import { UserPersonalInfo } from './UserPersonalInfo/UserPersonalInfo';
import { RepositoryCard } from './RepositoryCard/RepositoryCard';
import './UserDetailsCard.css';

export const UserDetailsCard = ({
  user,
}: {
  user: UserInfoModel;
}): JSX.Element => {
  const [userDetails, setUserDetails] = useState<UserDetailedInfo>();
  const [userStarredRepo, setUserStarredRepo] =
    useState<Omit<RepoInfoModel, 'score'>[]>();

  const getUserDetails = async () => {
    const userInfo = await fetchUser(user.login);
    setUserDetails(userInfo);
  };
  const getStarredRepoOfUser = async () => {
    const userRepo = await fetchUserStarredRepo(user.login, 1);
    setUserStarredRepo(userRepo);
  };

  useEffect(() => {
    getUserDetails();
    getStarredRepoOfUser();
  }, []);

  return (
    <div className='user-card'>
      <div className='user-card-inner'>
        <div className='user-card-front'>
          <div className='user-thumbnail-container'>
            <div className='user-thumbnail-mask'></div>
            <img
              className='user-thumbnail'
              src={user.avatar_url}
              alt="User's cover"
            />
          </div>

          <div className='user-avatar-img-container'>
            <img
              className='user-avatar'
              src={user.avatar_url}
              alt="User's avatar"
            />
          </div>
          <UserPersonalInfo user={userDetails} />
          <hr className='divider' />
          <RepositoryCard userStarredRepo={userStarredRepo} />
        </div>
        <div className='user-card-back'>
          <div className='user-img-back-container'>
            <img
              className='user-img-back'
              src={user.avatar_url}
              alt="User's cover"
            />
          </div>
          <div className='user-back-avatar-container'>
            <img
              className='user-back-avatar'
              src={user.avatar_url}
              alt="User's avatar"
            />
            <UserPersonalInfo user={userDetails} />
            <Link to={`/${user.login}`} className='user-link'>
              <div className='user-button'>Open Profile</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
