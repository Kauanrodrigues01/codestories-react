import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  // Evita duplicação de código
  const getLinkClassName = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
        <NavLink to="/" className={getLinkClassName}>
          Início
        </NavLink>
        <NavLink to="/sobre-mim" className={getLinkClassName}>
          Sobre Mim
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
