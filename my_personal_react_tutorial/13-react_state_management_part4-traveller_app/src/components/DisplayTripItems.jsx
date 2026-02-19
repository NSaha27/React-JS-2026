import { useState } from "react";
import Item from "./Item";

function DisplayTripItems({ tripItems, handleItemPacking, handleDelItem }) {
  const [sortedItems, setSortedItems] = useState([...tripItems]);
  const [sortItemBy, setSortItemBy] = useState("SBIO");

  const handleSorting = () => {
    switch (sortItemBy) {
      case "SBIO":
        setSortedItems(tripItems);
        break;
      case "SBD":
        setSortedItems((curItems) => {
          return curItems.sort((a, b) => a.itemName - b.itemName);
        });
        break;
      case "SBPS":
        setSortedItems((curItems) => {
          return curItems.sort((a, b) => a.isPacked - b.isPacked);
        });
        break;
      default:
        setSortedItems(tripItems);
    }
    console.log(sortItemBy, sortedItems);
  };

  const handleItemSortBy = (ev) => {
    const { value } = ev.target;
    setSortItemBy(value);
  };

  return (
    <div className="display-trip-items">
      <div className="item-list">
        {tripItems.length > 0 ? (
          tripItems.map((item) => {
            return (
              <Item
                itemObj={item}
                handleItemPacking={(id, packStatus) =>
                  handleItemPacking(id, packStatus)
                }
                handleDelItem={(id) => handleDelItem(id)}
                key={item.id}
              />
            );
          })
        ) : (
          <h2 className="">no item is yet added!</h2>
        )}
      </div>
      <div className="sort-clear-items">
        <select
          name="sortItem"
          id="sortItem"
          className="sort-item"
          value={sortItemBy}
          onChange={(ev) => {
            handleItemSortBy(ev);
            handleSorting();
          }}
        >
          <option value="SBIO">SORT BY INPUT ORDER</option>
          <option value="SBD">SORT BY DESCRIPTION</option>
          <option value="SBPS">SORT BY PACKED STATUS</option>
        </select>
      </div>
    </div>
  );
}

export default DisplayTripItems;
