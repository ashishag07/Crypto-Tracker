import Button from "../../common/Button";
import styles from "./styles.module.css";
import mobile from "../../../assets/mobile.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "motion/react";
import { Link } from "react-router";
function HomeMainComponent() {
  return (
    <div className={styles.main_component_container}>
      <div className={styles.main_component_container_left}>
        <motion.h1
          className={styles.track_crypto_heading}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className={styles.real_time_heading}
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          className={styles.info}
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className={styles.btn_flex}
          initial={{ transform: "translateX(50px)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("I am clicked")}
            />
          </Link>
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className={styles.main_component_container_right}>
        <motion.img
          src={mobile}
          alt=""
          className={styles.mobile}
          initial={{ transform: "translateY(-10px)" }}
          animate={{ transform: "translateY(10px)" }}
          transition={{
            duration: 1,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <img src={gradient} alt="" className={styles.gradient} />
      </div>
    </div>
  );
}

export default HomeMainComponent;
