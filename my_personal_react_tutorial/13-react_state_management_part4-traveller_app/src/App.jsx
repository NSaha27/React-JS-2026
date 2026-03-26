import { useState } from "react";
import AddTripItems from "./components/AddTripItems";
import DisplayTripItems from "./components/DisplayTripItems";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [tripItems, setTripItems] = useState([]);

  const handleAddTripItem = (newItem) => {
    setTripItems((curItems) => [...curItems, newItem]);
  };

  const handleItemPacking = (id) => {
    setTripItems((curItems) =>
      curItems.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  };

  const handleDeleteItem = (id) => {
    setTripItems(tripItems.filter((item) => item.id !== id));
  };

  const handleSortByInputOrder = () => {
    const newTripItems = [...tripItems];
    newTripItems.sort((a, b) => Number(a.noOfItems) - Number(b.noOfItems));
    setTripItems(newTripItems);
  };

  const handleSortByDescription = () => {
    const newTripItems = [...tripItems];
    newTripItems.sort((a, b) => {
      const nameA = a.itemName || "";
      const nameB = b.itemName || "";
      return nameA.localeCompare(nameB, undefined, { sensitivity: "base" });
    });
    setTripItems(newTripItems);
  };

  const handleSortByPackingStatus = () => {
    const newTripItems = [...tripItems];
    newTripItems.sort((a, b) => Boolean(a.isPacked) - Boolean(b.isPacked));
    setTripItems(newTripItems);
  };

  const handleClearList = () => {
    setTripItems([]);
  };

  return (
    <>
      <Header />
      <main className="main">
        <AddTripItems onAddTripItem={handleAddTripItem} />
        <DisplayTripItems
          tripItems={tripItems}
          onItemPacking={handleItemPacking}
          onDeleteItem={handleDeleteItem}
          onClearList={handleClearList}
          onSortByInputOrder={handleSortByInputOrder}
          onSortByDescription={handleSortByDescription}
          onSortByPackingStatus={handleSortByPackingStatus}
        />
      </main>
      <Footer tripItems={tripItems} />
    </>
  );
}

export default App;
