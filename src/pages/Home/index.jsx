import Banner from "@/components/Banner";
import styles from "./Home.module.css";

import posts from "@/data/posts.json";
import LinkButton from "@/components/LinkButton";

const Home = () => {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <div className={styles.post}>
              <img
                className={styles.cover}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
              />

              <h2 className={styles.title}>{post.titulo}</h2>

              <LinkButton as="link" to={`/posts/${post.id}/`} size="small" className={styles.button}>
                Ler
              </LinkButton>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
