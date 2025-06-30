import styles from "./styles.module.css";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import convertNumber from "../../../../functions/convertNumber";
import { Link } from "react-router";

function CoinCardList({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={styles.coins_list_row}>
        <div className={styles.coin_info}>
          <img src={coin?.image} alt="" className={styles.coin_img} />

          <div className={styles.coin_id_name}>
            <p className={styles.coin_name}>{coin?.symbol}</p>
            <p className={styles.coin_id}>{coin?.id}</p>
          </div>
        </div>

        {coin?.price_change_percentage_24h > 0 ? (
          <div className={styles.chip_flex}>
            <div className={styles.chip_price}>
              {coin?.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={styles.chip_icon}>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className={styles.chip_flex}>
            <div className={`${styles.chip_price} ${styles.chip_red}`}>
              {coin?.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={`${styles.chip_icon} ${styles.chip_icon_red}`}>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        <div
          style={{
            color:
              coin?.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
            minWidth: "80px",
          }}
        >
          ${coin?.current_price.toLocaleString()}
        </div>

        <div className={styles.market_cap_desktop_view}>
          {coin?.market_cap.toLocaleString()}
        </div>

        <div className={styles.market_cap_mobile_view}>
          {/* {coin?.market_cap.toLocaleString()} */}
          {convertNumber(coin?.market_cap)}
        </div>
      </div>
    </Link>
  );
}

export default CoinCardList;
