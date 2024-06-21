import "./main-app.scss";
import { Outlet } from "react-router-dom";
import logo from "../assets/logoo.png";

export function MainApp() {
  return (
    <div className="MainAppWrapper">
      <header className="app-header">
        <img src={logo} alt="Ghibli Film Shops Logo" className="app-logo" />
        <div>
          Welcome to Ghibli Film Shops
          <br></br>
      <small>The Best Film Ever</small>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default MainApp;
