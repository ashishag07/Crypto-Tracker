import axios from "axios";

export default function (id, currency, days, attribute) {
  const attribute_data = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
    )
    .then((response) => {
      if (attribute == "prices") {
        return response.data.prices;
      } else if (attribute == "market_caps") {
        return response.data.market_caps;
      } else {
        return response.data.total_volumes;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return attribute_data;
}
