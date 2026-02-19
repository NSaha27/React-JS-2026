import { IoMdHappy } from "react-icons/io";
import { useState } from "react";

function AddTripItems({ addTripItem }) {
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

    addTripItem({ ...formData, id: itemID, isPacked: false });

    setItemID((curID) => curID + 1);

    setFormData({
      noOfItems: "",
      itemName: "",
    });
  }

  return (
    <div className="trip-item-add-form">
      <span>
        What do you need for your <IoMdHappy /> trip?
      </span>
      <form method="post" onSubmit={handleFormSubmit}>
        <select
          name="noOfItems"
          id="no-of-items"
          className="form-control"
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
          className="form-control"
          placeholder="item..."
          value={formData.itemName}
          onChange={handleChange}
        />
        <input type="submit" value="Add" className="form-control btn" />
      </form>
    </div>
  );
}

export default AddTripItems;
