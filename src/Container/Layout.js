import style from './App.module.css';
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout = ({ active, handleOnClick }) => {
  return (
    <>
      <NavigationBar active={active} handleOnClick={handleOnClick} />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;