import { UserDetailedInfo } from '../../../../models/UserDetailedInfo';
import avatar from '../../../../assets/avatar.png';
import './UserPersonalInfo.css';

export const UserPersonalInfo = ({
  user,
}: {
  user: UserDetailedInfo | undefined;
}): JSX.Element => {
  return (
    <div className='user-personal-info-container'>
      <div className='user-personal-info-text'>
        {!user?.name ? (
          <div style={{ color: '#bcbeca' }}>
            Ups, can't reach user's username 😔
          </div>
        ) : (
          user?.name
        )}
      </div>
      <div className='user-personal-info-text'>
        {!user?.email ? (
          <div style={{ color: '#bcbeca' }}>
            Ups, can't reach user's email 😔
          </div>
        ) : (
          user?.email
        )}
      </div>
      <div className='user-personal-followers-container'>
        <img
          src={avatar}
          className='user-personal-icon-avatar'
          alt='icon avatar'
        />
        <div>
          <b>{user?.followers}</b> Followers
        </div>
      </div>
    </div>
  );
};
