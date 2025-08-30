import styles from "./PostsList.module.css";
import Card from "@/components/Card";

const PostsList = ({ posts, className }) => {
  return (
    <section className={styles.wrapPosts}>
      <ul className={`${styles.posts} ${className}`}>
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
  )
}

export default PostsList;