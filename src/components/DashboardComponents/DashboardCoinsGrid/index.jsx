import { Link } from "react-router";
import CoinCard from "./CoinCard";
import styles from "./styles.module.css";

function DashboardCoinsGrid({ coins }) {
  return (
    <div className={styles.grid_flex}>
      {coins.map((item, idx) => (
        <Link to={`/coin/${item.id}`}>
          <CoinCard key={idx} coin={item} />
        </Link>
      ))}
    </div>
  );
}

export default DashboardCoinsGrid;
