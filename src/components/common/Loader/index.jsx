import styles from "./styles.module.css";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className={styles.loader_container}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
