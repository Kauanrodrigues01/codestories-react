import styles from "./ModelPost.module.css";
import PostsList from "../../components/PostsList";

const ModelPost = ({ children, coverPhoto, title, recommendPosts }) => {
  return (
    <article className={styles.modelPostContainer}>
      <div
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.postContentContainer}>{children}</div>

      <div className={styles.recommendPosts}>
        <h4 className={styles.recommendPostsTitle}>
          Outros Posts que você pode gostar:
        </h4>
        <PostsList posts={recommendPosts} />
      </div>
    </article>
  );
};

export default ModelPost;
