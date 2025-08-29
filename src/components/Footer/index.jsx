import styles from './Footer.module.css'
import trademark from "@/assets/trademark.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={trademark} alt="Marca Registrada" />
      <p>Desenvolvido por Alura.</p>
    </footer>
  )
}

export default Footer