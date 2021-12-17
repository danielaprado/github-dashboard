import { useSelector } from 'react-redux';
import { UsersModel } from '../../models/UsersModel';
import { AppState } from '../../store/rootReducer';
import { Loader } from '../Loader/Loader';
import { NotFound } from '../NotFound/NotFound';
import { UserDetailsCard } from './UserDetailsCard/UserDetailsCard';
import './TrendingUsers.css';
import { generateGuid } from '../../utils/generateGuid';

export const TrendingUsers = (): JSX.Element => {
  const trendingUsers: UsersModel = useSelector(
    (state: AppState): UsersModel => state.app.trendingUsers.users
  );

  const hasError = useSelector(
    (state: AppState): boolean => state.app.trendingUsers.hasError
  );

  return (
    <>
      <div className='trending-user-title'>Trending Users</div>
      <div className='trending-user-grid'>
        {!hasError ? (
          trendingUsers?.items?.length > 0 ? (
            trendingUsers.items.map((user) => (
              <UserDetailsCard key={generateGuid()} user={user} />
            ))
          ) : (
            <NotFound />
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
