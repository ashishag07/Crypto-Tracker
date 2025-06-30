import styles from "./styles.module.css";
import Header from "../../components/common/Header";

import SelectCryptos from "../../components/CompareComponents/SelectCryptos";
import SelectComponent from "../../components/CoinPageComponents/SelectComponent";
import { useEffect, useState } from "react";
import CoinCardList from "../../components/DashboardComponents/DashboardCoinsList/CoinCardList";
import getCoins from "../../functions/getCoins";
import getCoinById from "../../functions/getCoinById";
import convertObj from "../../functions/convertObj";
import getPriceVolumeMarketCap from "../../functions/getPriceVolumeMarketCap";
import Loader from "../../components/common/Loader";

function ComparePage() {
  const [days, setDays] = useState(30);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [allCoins, setAllCoins] = useState([]);

  function handleSelectDays(event) {
    console.log(event.target.value);
    setDays(event.target.value);
  }

  async function getData() {
    const coins = await getCoins("usd");
    console.log("coins in compare page", coins);

    if (coins) {
      setAllCoins(coins);
      const data1 = await getCoinById(crypto1);
      const data2 = await getCoinById(crypto2);
      convertObj(setCrypto1Data, data1);
      convertObj(setCrypto2Data, data2);

      if (data1 && data2) {
        // get prices
        const prices1 = await getPriceVolumeMarketCap(
          crypto1,
          "usd",
          days,
          "prices"
        );
        const prices2 = await getPriceVolumeMarketCap(
          crypto2,
          "usd",
          days,
          "prices"
        );
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleCryptoChange(event, isCrypto2) {
    setIsLoading(true);
    if (isCrypto2) {
      console.log("crypto 2 id", event.target.value);
      setCrypto2(event.target.value);
      const data2 = await getCoinById(event.target.value);
      convertObj(setCrypto2Data, data2);

      // fetch prices again
      const prices1 = await getPriceVolumeMarketCap(crypto1);
      const prices2 = await getPriceVolumeMarketCap(crypto2);
    } else {
      console.log("crypto 1 id", event.target.value);
      setCrypto1(event.target.value);
      const data1 = await getCoinById(event.target.value);
      convertObj(setCrypto2Data, data1);
      const prices1 = await getPriceVolumeMarketCap(crypto1);
      const prices2 = await getPriceVolumeMarketCap(crypto2);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.compare_wrapper}>
            <SelectCryptos
              crypto1={crypto1}
              crypto2={crypto2}
              handleCryptoChange={handleCryptoChange}
              allCoins={allCoins}
            />
            <SelectComponent days={days} handleDaysChange={handleSelectDays} />
          </div>

          <CoinCardList coin={crypto1Data} />
          <CoinCardList coin={crypto2Data} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
