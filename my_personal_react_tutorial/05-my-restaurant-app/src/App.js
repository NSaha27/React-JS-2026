import Heading from "./Heading";
import Menu from "./Menu";

import './App.css';

const foods = [
  {
    itemID: 1,
    itemName: "Mutton Biryani",
    imgFileName: "Best-Mutton-Biryani-Recipe.jpg",
    ingrediants: [
      "Rewasi Mutton",
      "Long-grain Basmati Rice",
      "Light spices",
      "Desi Ghee",
      "Kesar",
      "Fried Onion",
      "Fried Potato",
      "Meetha Aatar",
      "Premium Rose Water",
      "Premium Kewra Water",
    ],
    price: 250,
  },
  {
    itemID: 2,
    itemName: "Hakka Noodles",
    imgFileName: "Veg-Hakka-Noodles.jpg",
    ingrediants: [
      "Premium Quality Noodles", "Vegetable Oil", "Vegetables", "Spring Onion", "Soya Souce", "Chilli Souce", "Tomato Ketchup", "Vinigar", "Egg", "Chicken Keema", "Indian Masalas"
    ],
    price: 70,
  },
];

function App() {
  const currentHour = new Date().getHours();
  return (
    <div className="app">
      <Heading />
      <Menu foods={foods} />
      <div className="notice">
        <p className="">
        {currentHour > 10 && currentHour < 22 ? "***our restaurant is open now, come visit us or order online!" : "***our restaurant is close now, please visit us or order online tomorrow!"}
        </p>
        <a href="/cart" className="btn">Go to Cart</a>
      </div>
    </div>
  )
}

export default App;
