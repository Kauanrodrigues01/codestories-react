import LinkButton from "@/components/LinkButton";
import erro404 from '@/assets/erro_404.png'
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>

        <h1 className={styles.title}>Ops! Página não encontrada.</h1>

        <p className={styles.description}>
          Tem certeza que era isso que você estava procurando? Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className={styles.actions}>
          <LinkButton as="link" to="/" size="large">
            Voltar
          </LinkButton>
        </div>

        <img
          className={styles.imageDog}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className={styles.blank}></div>
    </>
  );
};

export default NotFound;
