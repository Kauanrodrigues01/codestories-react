import aboutMeCover from "@/assets/aboutMeCover.png";
import ModelPost from "@/components/ModelPost";
import posts from "@/data/posts.json";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { useEffect } from "react";

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(params.id));

  useEffect(() => {
    // replace faz com que a rota errada não fique no histórico, se o usuário tentar acessar /posts/umIdQueNãoExiste vai ser redirecionado para /404, mas se ele clicar em voltar não vai voltar para o /posts/umIdQueNãoExiste
    if (!post) navigate("/404", { replace: true });
  }, [post, navigate]);


  if (!post) return null;

  return (
    <ModelPost coverPhoto={aboutMeCover} title={post.titulo}>
      <div className={styles.postMarkdownContainer}>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </ModelPost>
  );
};

export default Post;
