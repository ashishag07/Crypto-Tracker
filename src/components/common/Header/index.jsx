import { Link } from "react-router";
import Button from "../Button";
import styles from "./styles.module.css";
import HeaderDrawer from "./HeaderDrawer";

function Header() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        CryptoApp <span style={{ color: "red" }}>.</span>
      </h1>

      <ul className={styles.links_list}>
        <li className={styles.link}>
          <Link to="/" href="">
            Home
          </Link>
        </li>

        <li className={styles.link}>
          <Link to="/compare" href="">
            Compare
          </Link>
        </li>

        <li className={styles.link}>
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("I am clicked")}
            />
          </Link>
        </li>
      </ul>

      <div className={styles.drawer}>
        <HeaderDrawer />
      </div>
    </div>
  );
}

export default Header;
