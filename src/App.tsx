import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import TopResposOfUser from './pages/TopReposOfUser/TopReposOfUser';
import { AppActions } from './store/app/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AppActions.fetchTrendingUsers.request());
    dispatch(AppActions.fetchActiveUsers.request());
    dispatch(AppActions.fetchTopRepos.request());
  }, []);

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/:user' element={<TopResposOfUser />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
