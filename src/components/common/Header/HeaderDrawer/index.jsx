import { useState } from "react";
import styles from "./styles.module.css";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router";

export default function HeaderDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className={styles.link} />
      </IconButton>

      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ul className={styles.drawer_links_list}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/compare">Compare</Link>
          </li>

          <li className={styles.link}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </SwipeableDrawer>
    </div>
  );
}
