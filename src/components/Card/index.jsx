import PropTypes from "prop-types";
import LinkButton from "../LinkButton";
import styles from "./Card.module.css";

const Card = ({ image, title, description, link, linkLabel }) => {
  return (
    <div className={styles.card}>
      {image && (
        <img className={styles.cover} src={image} alt={title || "Card image"} />
      )}

      {title && <h2 className={styles.title}>{title}</h2>}

      {description && <p className={styles.description}>{description}</p>}

      {link && (
        <LinkButton as="link" to={link} size="small" className={styles.button}>
          {linkLabel || "Ver mais"}
        </LinkButton>
      )}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

export default Card;
