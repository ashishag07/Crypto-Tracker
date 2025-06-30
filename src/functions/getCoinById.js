import axios from "axios";

export default function getCoinById(id) {
  const coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return coin;
}
