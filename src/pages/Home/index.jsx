import Banner from "@/components/Banner";
import styles from "./Home.module.css";

import posts from "@/data/posts.json";
import Card from "../../components/Card";

const Home = () => {
  return (
    <main>
      <Banner />

      <section className={styles.wrapPosts}>
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Card image={`/assets/posts/${post.id}/capa.png`} title={post.titulo} linkLabel="Ler" link={`/posts/${post.id}`} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
