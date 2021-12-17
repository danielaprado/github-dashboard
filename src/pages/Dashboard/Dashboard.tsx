import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MostActiveUsers } from '../../components/MostActiveUsers/MostActiveUsers';
import { TopRepositories } from '../../components/TopRepositories/TopRepositories';
import { TrendingUsers } from '../../components/TrendingUsers/TrendingUsers';
import { AppActions } from '../../store/app/actions';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AppActions.fetchTrendingUsers.request());
    dispatch(AppActions.fetchActiveUsers.request());
    dispatch(AppActions.fetchTopRepos.request());
  }, []);

  return (
    <div className='dashboard-container'>
      <TrendingUsers />
      <MostActiveUsers />
      <TopRepositories />
    </div>
  );
};

export default Dashboard;
