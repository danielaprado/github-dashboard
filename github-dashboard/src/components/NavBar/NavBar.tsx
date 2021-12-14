import { useEffect, useState } from "react";
import { fetchSearchedTrendingUsers } from "../../api/Services";
import logo from "../../assets/logo.png";
import "./NavBar.css";

export const NavBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const getSearchedTopUsers = async () => {
    const userInfo = await fetchSearchedTrendingUsers(searchValue);
  };

  useEffect(() => {
    if (searchValue !== "") getSearchedTopUsers();
  }, [searchValue]);

  return (
    <div className="navbar-container">
      <img className="navbar-image" src={logo} alt="Uphill logo" />
      <input
        className="navbar-search"
        placeholder="Search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};
