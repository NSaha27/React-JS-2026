import { useState } from "react";

import AddFood from "./components/AddFood";
import Card from "./components/Card";

function App() {
  const [foods, setFoods] = useState([]);
  const [menus, setMenus] = useState(function () {
    const options = {};
    if (foods.length > 0) {
      for (let food of foods) {
        if (Object.keys(options).includes(food.category)) continue;
        options[food.category] = false;
      }
    }
    return options;
  });
  const [displayAddFoodForm, setDisplayAddFoodForm] = useState(false);

  const handleAddingFood = (newFood) => {
    setFoods((prevFoods) => {
      const newFoodList = [...prevFoods];
      const foodFoundAt = newFoodList.findIndex(
        (food) => food.title === newFood.title,
      );
      if (foodFoundAt === -1) {
        newFoodList.push(newFood);
      } else {
        const updatedFood = {
          ...newFoodList[foodFoundAt],
          qty: newFoodList[foodFoundAt].qty + newFood.qty,
        };
        newFoodList.splice(foodFoundAt, 1, updatedFood);
      }
      return newFoodList;
    });
    setDisplayAddFoodForm(false);
  };

  return (
    <div className="">
      <div className="menubar">
        <h3 className="menu">Select Food Category:</h3>
        <ul className="">
          {Object.keys(menus).map((menu, index) => {
            return (
              <li className="">
                <input
                  type="checkbox"
                  name="menuOption"
                  id="menu-option"
                  key={index}
                  value={menu}
                  onChange={() =>
                    setMenus((options) => ({
                      ...options,
                      [menu]: !options[menu],
                    }))
                  }
                />{" "}
                {menu}
              </li>
            );
          })}
        </ul>
        <div className="">
          <button
            className=""
            onClick={() => setDisplayAddFoodForm(!displayAddFoodForm)}
          >
            Add Food
          </button>
        </div>
      </div>
      <div className="content">
        {displayAddFoodForm ? (
          <AddFood onAddingFood={handleAddingFood} />
        ) : (
          <div className="">
            {foods.length > 0 ? (
              foods.map((food) =>
                menus[food.category] ? <Card food={food} /> : null,
              )
            ) : (
              <h2>No food is yet available!</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
