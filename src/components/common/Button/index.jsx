import styles from "./styles.module.css";

function Button({ onClick, outlined, text }) {
  return (
    <div
      className={outlined ? styles.btn_outlined : styles.btn}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
