import styles from "./styles.module.css";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SelectCryptos({ crypto1, crypto2, handleCryptoChange, allCoins }) {
  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className={styles.crypto_select}>
      <p>Crypto 1</p>
      <Select
        id="demo-simple-select"
        value={crypto1}
        onChange={(event) => handleCryptoChange(event, false)}
        sx={style}
      >
        {allCoins
          .filter((coin) => coin.id != crypto2)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        id="demo-simple-select"
        value={crypto2}
        onChange={(event) => handleCryptoChange(event, true)}
        sx={style}
      >
        {allCoins
          .filter((coin) => coin.id != crypto1)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCryptos;
