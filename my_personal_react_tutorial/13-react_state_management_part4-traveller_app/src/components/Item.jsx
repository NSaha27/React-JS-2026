import styles from "./css/Item.module.css";

function Item({ itemObj, onItemPacking, onDeleteItem }) {
  return (
    <span className={styles["item"]}>
      <input
        type="checkbox"
        name="isPacked"
        id="is-packed"
        className={styles["checkbox"]}
        value={itemObj.isPacked}
        checked={itemObj.isPacked}
        onChange={() => onItemPacking(itemObj.id)}
      />
      <span
        className={`${styles["item-name"]} ${itemObj.isPacked && styles["line-through"]}`}
      >
        {" "}
        {itemObj.noOfItems} {itemObj.itemName}
      </span>
      <button
        type="submit"
        className={styles["del-item-btn"]}
        onClick={() => onDeleteItem(itemObj.id)}
      >
        &times;
      </button>
    </span>
  );
}

export default Item;
