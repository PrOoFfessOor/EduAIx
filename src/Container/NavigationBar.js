import { Link } from 'react-router-dom';
import style from "./App.module.css";

const NavigationBar = ({ handleOnClick, active }) => {
  return (
    <>
      <div className={style.Header}>
        <button className={style.button} onClick={handleOnClick}>&#9776;</button>♾️🔥 Infernity 🔥♾️
      </div>
      
      <div className={`${style.Footer} ${active ? style.Active : ''}`}>
        <ul>          
          <li ><Link to="/" >Chat</Link></li>
          <li><Link to="/classroom">Class</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;