import posts from "@/data/posts.json";
import PostsList from "@/components/PostsList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <PostsList posts={posts} className={styles.posts} />
  );
};

export default Home;
