import { useEffect, useState } from "react";
import Product from "./Product";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayDetails, setDisplayDetails] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => {
        if (!res.ok) {
          throw new Error("network response was not ok!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.products);
        setLoading(false);
        setDisplayDetails(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setDisplayDetails(false);
      });
  }, []);

  if (loading) return <h3 className="loading">still loading...</h3>;
  if (error) return <h3 className="error">Error: {error}</h3>;
  return (
    <div className="product-list">
      {data.map((prod) => {
        return (
          <Product
            product={prod}
            key={prod.id}
            displayDetails={displayDetails}
          />
        );
      })}
    </div>
  );
}

export default DataFetcher;
