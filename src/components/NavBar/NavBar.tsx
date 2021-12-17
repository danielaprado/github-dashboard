import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchedTrendingUsers } from '../../api/Services';
import logo from '../../assets/logo.png';
import { AppActions } from '../../store/app/actions';
import './NavBar.css';
import 'font-awesome/css/font-awesome.min.css';

export const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(AppActions.updateTrendingUsers.request({ search: searchValue }));
      dispatch(AppActions.updateActiveUsers.request({ search: searchValue }));
      dispatch(AppActions.updateTopRepos.request({ search: searchValue }));
    } else {
      dispatch(AppActions.fetchTrendingUsers.request());
      dispatch(AppActions.fetchActiveUsers.request());
      dispatch(AppActions.fetchTopRepos.request());
    }
  }, [searchValue]);

  useEffect(() => {
    return setSearchValue('');
  }, []);

  return (
    <div className='navbar-container'>
      <img className='navbar-image' src={logo} alt='Uphill logo' />

      <input
        className='navbar-search'
        type='text'
        placeholder='&#xF002; Search'
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};
