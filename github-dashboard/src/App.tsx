import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { MostActiveUsers } from "./components/MostActiveUsers";
import { NavBar } from "./components/NavBar/NavBar";
import { TopRepositories } from "./components/TopRepositories/TopRepositories";
import { TrendingUsers } from "./components/TrendingUsers/TrendingUsers";
import { AppActions } from "./store/app/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AppActions.fetchTrendingUsers.request());
    dispatch(AppActions.fetchActiveUsers.request());
    dispatch(AppActions.fetchTopRepos.request());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <TrendingUsers />
      <MostActiveUsers />
      <TopRepositories />
    </div>
  );
}

export default App;
