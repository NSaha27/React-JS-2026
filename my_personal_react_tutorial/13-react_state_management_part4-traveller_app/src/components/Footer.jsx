import styles from "./css/Footer.module.css";

function Footer({ tripItems }) {
  const numItems = tripItems.length;
  const numPackedItems = tripItems.filter((item) => item.isPacked).length;
  const percentageOfPackedItems = Math.round((numPackedItems * 100) / numItems);
  return (
    <footer className={styles["footer"]}>
      {tripItems.length > 0 ? (
        percentageOfPackedItems === 100 ? (
          <p>
            <em>You already packed all items, and are ready to go ✈️</em>
          </p>
        ) : (
          <p>
            <em>
              You have {numItems} items on your list, and you already packed{" "}
              {numPackedItems} ({percentageOfPackedItems}%)
            </em>
          </p>
        )
      ) : (
        <p>
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      )}
    </footer>
  );
}

export default Footer;
