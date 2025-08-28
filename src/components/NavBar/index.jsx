import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre-mim"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Sobre Mim
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
