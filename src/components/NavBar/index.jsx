import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
        <Link to="/" className={styles.link}>Início</Link>
        <Link to="/sobre-mim" className={styles.link}>Sobre Mim</Link>
      </nav>
    </header>
  )
}

export default NavBar
