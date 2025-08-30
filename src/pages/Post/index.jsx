import ModelPost from "@/components/ModelPost";
import styles from "./Post.module.css";
import aboutMeCover from "@/assets/aboutMeCover.png";
import posts from "@/data/posts.json";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const Post = () => {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <h2 className={styles.notFound}>Post não encontrado!</h2>;
  }

  return (
    <ModelPost coverPhoto={aboutMeCover} title={post.titulo}>
      <div className={styles.postMarkdownContainer}>
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </ModelPost>
  );
};

export default Post;
