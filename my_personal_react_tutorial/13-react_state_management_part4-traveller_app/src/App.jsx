import { useState } from "react";
import Header from "./components/Header";
import AddTripItems from "./components/AddTripItems";
import DisplayTripItems from "./components/DisplayTripItems";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [tripItems, setTripItems] = useState([]);

  const handleAddTripItem = (newItem) => {
    setTripItems((curItems) => [...curItems, newItem]);
  };

  const handleItemPacking = (id, packStatus) => {
    setTripItems((curTripItems) =>
      curTripItems.map((item) => {
        if (item.id === id) {
          return { ...item, isPacked: packStatus };
        } else {
          return item;
        }
      }),
    );
  };

  const handleDelItem = (id) => {
    setTripItems(tripItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <AddTripItems addTripItem={(newItem) => handleAddTripItem(newItem)} />
      <DisplayTripItems
        tripItems={tripItems}
        handleItemPacking={handleItemPacking}
        handleDelItem={handleDelItem}
      />
      <Footer />
    </>
  );
}

export default App;
