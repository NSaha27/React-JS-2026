import { useState } from "react";
import Item from "./Item";

import styles2 from "./css/AddTripItems.module.css";
import styles from "./css/DisplayTripItems.module.css";

function DisplayTripItems({
  tripItems,
  onItemPacking,
  onDeleteItem,
  onClearList,
  onSortByInputOrder,
  onSortByDescription,
  onSortByPackingStatus,
}) {
  const [sortItemBy, setSortItemBy] = useState("SBIO");

  const handleItemSortBy = (ev) => {
    const { value } = ev.target;
    switch (value) {
      case "SBIO":
        onSortByInputOrder();
        break;
      case "SBD":
        onSortByDescription();
        break;
      case "SBPS":
        onSortByPackingStatus();
        break;
      default:
        onSortByInputOrder();
    }
    setSortItemBy(value);
  };

  return (
    <div className={styles["trip-items-container"]}>
      <div className={styles["item-list"]}>
        {tripItems.length > 0 ? (
          tripItems.map((item) => {
            return (
              <Item
                itemObj={item}
                onItemPacking={onItemPacking}
                onDeleteItem={onDeleteItem}
                key={item.id}
              />
            );
          })
        ) : (
          <h2 className={styles["no-item-message"]}>no item is yet added!</h2>
        )}
      </div>
      <div className={styles["sort-clear-items"]}>
        <select
          name="sortItem"
          id="sortItem"
          className={styles2["form-control"]}
          value={sortItemBy}
          onChange={handleItemSortBy}
        >
          <option value="SBIO">SORT BY INPUT ORDER</option>
          <option value="SBD">SORT BY DESCRIPTION</option>
          <option value="SBPS">SORT BY PACKED STATUS</option>
        </select>
        <button
          className={`${styles2["form-control"]} ${styles2["btn"]}`}
          onClick={() => {
            const clearList = confirm(
              "are you sure, you want to clear the packing list? 🤔",
            );
            if (!clearList) return false;
            onClearList();
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

export default DisplayTripItems;
