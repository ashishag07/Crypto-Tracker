import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./styles.module.css";

import Header from "../../components/common/Header";
import CoinCardList from "../../components/DashboardComponents/DashboardCoinsList/CoinCardList";
import SelectComponent from "../../components/CoinPageComponents/SelectComponent";
import LineChart from "../../components/CoinPageComponents/LineChart";
import Loader from "../../components/common/Loader";
import CoinInfo from "../../components/CoinPageComponents/CoinInfo";

import convertObj from "../../functions/convertObj";
import getCoinById from "../../functions/getCoinById";
import getPriceVolumeMarketCap from "../../functions/getPriceVolumeMarketCap";
import settingChartData from "../../functions/settingChartData";
import ToggleComponent from "../../components/CoinPageComponents/ToggleButton";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [showMore, setShowMore] = useState(true);
  const [days, setDays] = useState(30);
  const [currency, setCurrency] = useState("usd");
  const [priceType, setPriceType] = useState("prices");

  async function getCoin(id) {
    const coinData = await getCoinById(id);
    if (coinData) {
      convertObj(setCoin, coinData);
      const pricesData = await getPriceVolumeMarketCap(
        id,
        currency,
        days,
        priceType
      );

      if (pricesData) {
        settingChartData(setChartData, pricesData);

        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getCoin(id);
    }
  }, [id]);

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const pricesData = await getPriceVolumeMarketCap(
      id,
      currency,
      event.target.value,
      priceType
    );
    settingChartData(setChartData, pricesData);
  };

  const handlePriceChange = async (event, priceType) => {
    console.log("alignment >>>>", priceType);
    setPriceType(priceType);
    const pricesData = await getPriceVolumeMarketCap(
      id,
      currency,
      days,
      priceType
    );

    if (pricesData) {
      settingChartData(setChartData, pricesData);

      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.wrapper}>
            <CoinCardList coin={coin} />
          </div>

          <div className={styles.wrapper_chart}>
            <div className={styles.price_change}>
              <p>Price Change</p>
              <SelectComponent
                days={days}
                handleDaysChange={handleDaysChange}
              />
            </div>
            <div className={styles.wrapper_toggle}>
              <ToggleComponent
                priceType={priceType}
                handlePriceChange={handlePriceChange}
              />
            </div>
            <LineChart data={chartData} priceType={priceType} />
          </div>
          <CoinInfo coin={coin} showMore={showMore} setShowMore={setShowMore} />
        </>
      )}
    </>
  );
}

export default CoinPage;
