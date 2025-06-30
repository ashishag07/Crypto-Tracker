import styles from "./styles.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function DashboardCoinSearch({ handleCoinSearch, searchValue }) {
  return (
    <div className={styles.coin_search_flex}>
      <SearchRoundedIcon />
      <input
        placeholder="Search"
        className={styles.search_input}
        value={searchValue}
        onChange={(event) => handleCoinSearch(event)}
      />
    </div>
  );
}

export default DashboardCoinSearch;
