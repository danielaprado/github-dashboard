import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser, fetchUserStarredRepo } from '../../api/Services';
import { RepoInfoModel } from '../../models/RepoInfoModel';
import { UserDetailedInfo } from '../../models/UserDetailedInfo';
import start from '../../assets/star.png';
import './TopReposOfUser.css';
import { mapIdColor } from '../../utils/mapIdColor';
import avatar from '../../assets/avatar.png';

const TopResposOfUser = () => {
  const { user } = useParams();
  const [userDetails, setUserDetails] = useState<UserDetailedInfo>();
  const [repos, setRepos] = useState<Omit<RepoInfoModel, 'score'>[]>();

  const getUserDetails = async () => {
    const userInfo = await fetchUser(user as string);
    setUserDetails(userInfo);
  };
  const getStarredRepoOfUser = async () => {
    const userRepo = await fetchUserStarredRepo(user as string, 3);
    setRepos(userRepo);
  };

  useEffect(() => {
    getUserDetails();
    getStarredRepoOfUser();
  }, []);

  return (
    <div
      style={{
        height: '73.5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        className='repo-user-avatar'
        src={userDetails?.avatar_url}
        alt="User's avatar"
      />
      <div className='repo-user-main-title'>{user}</div>
      <div>{userDetails?.email}</div>
      <div className='repo-user-followers-container'>
        <img src={avatar} className='repo-user-icon-avatar' alt='icon avatar' />
        <div>
          <b>{userDetails?.followers}</b> Followers
        </div>
      </div>
      <div className='repo-user-title'>Top Repositories</div>
      <div className='repo-user-grid'>
        {repos?.map((repo, index) => (
          <div
            className='repo-user-card repo-user-text'
            style={{ borderTop: `7px solid ${mapIdColor[index].color}` }}
            onClick={() =>
              window.open(`https://github.com/${user}/${repo.name}`)
            }
          >
            <div className='repo-user-language'>
              {repo.language ? repo.language : 'Language ?'}
            </div>
            <div className='repo-user-star-container'>
              <img
                src={start}
                className='repo-user-star-icon'
                alt='star icon'
              />
              <div className='repo-user-start-count'>
                {repo.stargazers_count}
              </div>
            </div>
            <div className='repo-user-description'>
              {repo.description
                ? repo.description.length > 40
                  ? repo.description.substring(0, 40) + '...'
                  : repo.description
                : "Repo's description"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopResposOfUser;
