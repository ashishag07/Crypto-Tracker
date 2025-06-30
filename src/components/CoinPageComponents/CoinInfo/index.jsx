import styles from "./styles.module.css";

function CoinInfo({ coin, showMore, setShowMore }) {
  const lessInfo =
    coin?.desc.slice(0, 300) +
    "<span style='color:var(--grey)'> Read More...</span>";
  const moreInfo =
    coin?.desc + "<span style='color:var(--grey)'> Read Less...</span>";

  return (
    <div className={styles.info_wrapper}>
      <h2>{coin.name}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: showMore ? lessInfo : moreInfo,
        }}
        onClick={() => setShowMore(!showMore)}
      />
    </div>
  );
}

export default CoinInfo;
