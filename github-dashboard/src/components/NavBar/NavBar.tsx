import logo from "../../assets/logo.png";
import "./NavBar.css";

export const NavBar = (): JSX.Element => {
  return (
    <div className="navbar-container">
      <img className="navbar-image" src={logo} alt="Uphill logo" />
      <input className="navbar-search" placeholder="Search" />
    </div>
  );
};
