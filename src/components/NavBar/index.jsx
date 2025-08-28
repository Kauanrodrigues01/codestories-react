import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
        <a href="/" className={styles.link}>Início</a>
        <a href="/sobre-mim" className={styles.link}>Sobre Mim</a>
      </nav>
    </header>
  )
}

export default NavBar
