import CoinCardList from "./CoinCardList";
import styles from "./styles.module.css";

function DashboardCoinsList({ coins }) {
  return (
    <table className={styles.coins_list_container}>
      <tbody>
        {coins.map((coin, idx) => (
          <CoinCardList coin={coin} key={idx} />
        ))}
      </tbody>
    </table>
  );
}

export default DashboardCoinsList;
