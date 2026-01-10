import Footer from "./Footer";
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
  return (
    <div className="app">
      <Heading />
      <Menu foods={foods} />
      <Footer />
    </div>
  )
}

export default App;
