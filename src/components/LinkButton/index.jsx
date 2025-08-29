import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = ({
  as: Component = "button",
  size = "large",
  children,
  to,
  className = "",
  ...props
}) => {
  const sizeClass =
    size === "small" ? styles.linkButtonSmall : styles.linkButtonLarge;
  const classes = `${styles.linkButtonBase} ${sizeClass} ${className}`.trim();

  // Escolhe o componente final
  const FinalComponent = Component === "link" ? Link : Component;

  // Props para Link ou Button
  const finalProps = Component === "link" ? { to, ...props } : props;

  return (
    <FinalComponent className={classes} {...finalProps}>
      {children}
    </FinalComponent>
  );
};

LinkButton.propTypes = {
  as: PropTypes.oneOf(["button", "link"]),
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  to: PropTypes.string, // necessário se as="link"
};

export default LinkButton;
