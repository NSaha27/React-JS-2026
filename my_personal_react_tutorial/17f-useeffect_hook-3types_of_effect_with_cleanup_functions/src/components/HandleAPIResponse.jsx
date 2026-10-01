import { useEffect, useState } from "react";

import Product from "./Product";

function HandleAPIResponse() {
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, [products]);

  const productsToDisplay = (maxPrice) => {
    return products.filter((prod) => prod.price <= maxPrice);
  };

  return (
    <div
      className=""
      style={{ display: "grid", gridTemplateColumns: "20% 80%" }}
    >
      <div
        className="sidemenu"
        style={{
          minHeight: "92vh",
          padding: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          gap: "1rem",
          borderRight: "3px solid #ddd",
        }}
      >
        <h2 className="">Select a price range</h2>
        <div className="">
          <input
            type="range"
            name="priceRange"
            id="priceRange"
            className=""
            min={0}
            max={20}
            step={2}
            value={maxPrice}
            onChange={(ev) => setMaxPrice(ev.target.value)}
            style={{ width: "100%" }}
          />
          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span className="">0</span>
            <span className="">{maxPrice}</span>
            <span className="">20</span>
          </div>
        </div>
      </div>
      <div className="main-content" style={{ padding: "1rem 3rem" }}>
        <h1 className="">All available products</h1>
        <div
          className=""
          style={{
            display: "grid",
            gridTemplateColumns: "32% 32% 32%",
            gap: "2%",
          }}
        >
          {productsToDisplay(maxPrice).map((prod, index) => {
            return <Product key={index} product={prod} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HandleAPIResponse;
