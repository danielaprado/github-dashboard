import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { TrendingUsers as TrendingUsers } from "./components/TrendingUsers";
import { MostActiveUsers as MostActiveUsers } from "./components/MostActiveUsers";
import { TopRepositories } from "./components/TopRepositories";

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
