import { useState } from "react";

function Item({ itemObj, handleItemPacking, handleDelItem }) {
  const [isPacked, setIsPacked] = useState(itemObj.isPacked);

  const handleChange = () => {
    setIsPacked((curIsPackedStat) => !curIsPackedStat);
  };

  const handleDelFormSubmit = (ev) => {
    ev.preventDefault();
    handleDelItem(Number(ev.target.delItemID.value));
  };

  return (
    <span className="item">
      <input
        type="checkbox"
        name="isPacked"
        id="is-packed"
        value={isPacked}
        checked={isPacked}
        onChange={() => {
          handleChange();
          handleItemPacking(itemObj.id, !isPacked);
        }}
      />
      <span style={{ textDecoration: isPacked ? "line-through" : "none" }}>
        {" "}
        {itemObj.noOfItems} {itemObj.itemName}
      </span>
      <form method="post" onSubmit={handleDelFormSubmit}>
        <input type="hidden" name="delItemID" value={itemObj.id} />
        <button type="submit" className="del-item-btn">
          &times;
        </button>
      </form>
    </span>
  );
}

export default Item;
