import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import DashboardCoinSearch from "../../components/DashboardComponents/DashboardCoinSearch";
import DashboardTabs from "../../components/DashboardComponents/DashboardTabs";
import Loader from "../../components/common/Loader";
import DashboardPaginated from "../../components/DashboardComponents/DashboardPaginated";
import getCoins from "../../functions/getCoins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    const prevIndex = value;

    setPage(value);
    setPaginatedCoins(
      coins.slice((prevIndex - 1) * 10, (prevIndex - 1) * 10 + 10)
    );
  };

  const handleCoinSearch = (event) => {
    setPaginatedCoins(
      coins.filter((coin) =>
        coin.symbol.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );

    if (!event.target.value) {
      setPaginatedCoins(coins.slice(0, 10));
    }
    setSearchValue(event.target.value);
  };

  async function getCoinsData(currency) {
    const coinsData = await getCoins(currency);
    if (coinsData) {
      setCoins(coinsData);
      console.log("coins data >>>>>>", coinsData);
      setPaginatedCoins(coinsData.slice(0, 10));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCoinsData("usd");
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <DashboardCoinSearch
            handleCoinSearch={handleCoinSearch}
            searchValue={searchValue}
          />
          <DashboardTabs coins={paginatedCoins} />
          {!searchValue && (
            <DashboardPaginated
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
