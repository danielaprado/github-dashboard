import React from "react";
import "./App.css";
import { MostActiveUsers as MostActiveUsers } from "./components/MostActiveUsers";
import { NavBar } from "./components/NavBar/NavBar";
import { TopRepositories } from "./components/TopRepositories/TopRepositories";
import { TrendingUsers } from "./components/TrendingUsers/TrendingUsers";

function App() {
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
