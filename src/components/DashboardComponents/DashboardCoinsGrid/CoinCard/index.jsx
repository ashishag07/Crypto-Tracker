import styles from "./styles.module.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
function CoinCard({ coin }) {
  return (
    <div
      className={` ${
        coin.price_change_percentage_24h > 0
          ? styles.card_flex
          : styles.card_flex_red
      }`}
    >
      <div className={styles.coin_info}>
        <img src={coin.image} alt="" className={styles.coin_img} />
        <div className={styles.coin_id_name}>
          <p className={styles.coin_name}>{coin.symbol}</p>
          <p className={styles.coin_id}>{coin.id}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className={styles.chip_flex}>
          <div className={styles.chip_price}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className={styles.chip_icon}>
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className={styles.chip_flex}>
          <div className={`${styles.chip_price} ${styles.chip_red}`}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className={`${styles.chip_icon} ${styles.chip_icon_red}`}>
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}

      <div className={styles.info_container}>
        <h3
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className={styles.volume}>
          Total Volume: {coin.total_volume.toLocaleString()}
        </p>
        <p className={styles.market_cap}>
          Market Cap: {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CoinCard;
