import styles from "./Banner.module.css";
import coloredCircle from "@/assets/coloredCircle.png";
import myPhoto from "@/assets/myPhoto.png"

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Olá, Mundo!</h1>
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Kauan Rodrigues,
          Desenvolvedor FullStack. Aqui compartilho vários conhecimentos, espero
          que aprenda algo novo.
        </p>
      </div>

      <button className={styles.button}>Explorar</button>

      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
        />

        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Foto do Kauan Rodrigues"
        />
      </div>
    </section>
  );
};

export default Banner;
