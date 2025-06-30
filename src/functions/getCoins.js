import axios from "axios";

export default function getCoins(currency) {
  const coins = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=100`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return coins;
}
