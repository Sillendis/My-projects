import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Dialogues">Dialogues</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Friends">Friends</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Users">Users</NavLink>
        <div className={s.item}>
          <NavLink to="/Music">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Settings">Settings</NavLink>
        </div>
      </div>
      <div className={s.item}>
        <img src="https://cdn.myrotvorets.center/m/criminals/0e/f4/66/Zhukov11.jpg" />
        <img src="https://miro.medium.com/v2/resize:fit:698/1*0jjdu52m0MO4SjLWiCVOlg.jpeg" />
        <img src="https://cs4.pikabu.ru/post_img/big/2015/08/28/3/1440731077_931947487.jpg" />
      </div>
    </nav>
  );
};

export default Navbar;
