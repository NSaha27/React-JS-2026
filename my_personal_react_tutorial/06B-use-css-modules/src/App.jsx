import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prods) => setProducts(prods))
      .catch((err) => {
        console.error(err);
        return false;
      });
  }, []);

  return (
    <>
      <Header />
      <div className="">
        <Products products={products} />
      </div>
    </>
  );
}

export default App;
