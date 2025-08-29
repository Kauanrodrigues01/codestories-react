import posts from "@/data/posts.json";
import Card from "../../components/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.wrapPosts}>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Card
              image={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
              linkLabel="Ler"
              link={`/posts/${post.id}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
