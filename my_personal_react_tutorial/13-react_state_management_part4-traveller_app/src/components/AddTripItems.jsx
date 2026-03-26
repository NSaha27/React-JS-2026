import { useState } from "react";
import { IoMdHappy } from "react-icons/io";

import styles from "./css/AddTripItems.module.css";

function AddTripItems({ onAddTripItem }) {
  const [itemID, setItemID] = useState(1);
  const [formData, setFormData] = useState({
    noOfItems: "",
    itemName: "",
  });

  function handleChange(ev) {
    let { name, value } = ev.target;
    if (name === "noOfItems") value = Number(value);
    setFormData((curFormData) => ({ ...curFormData, [name]: value }));
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();

    const newTripItem = { ...formData, id: itemID, isPacked: false };

    onAddTripItem(newTripItem);

    setItemID((curID) => curID + 1);

    setFormData({
      noOfItems: "",
      itemName: "",
    });
  }

  return (
    <div className={styles["add-form-container"]}>
      <span className={styles["form-title"]}>
        What do you need for your <IoMdHappy /> trip?
      </span>
      <form
        method="post"
        onSubmit={handleFormSubmit}
        className={styles["form"]}
      >
        <select
          name="noOfItems"
          id="no-of-items"
          className={styles["form-control"]}
          value={formData.noOfItems}
          onChange={handleChange}
        >
          <option value="" disabled>
            please select an option
          </option>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="itemName"
          id="item-name"
          className={styles["form-control"]}
          placeholder="item..."
          value={formData.itemName}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add"
          className={`${styles["form-control"]} ${styles["btn"]}`}
        />
      </form>
    </div>
  );
}

export default AddTripItems;
