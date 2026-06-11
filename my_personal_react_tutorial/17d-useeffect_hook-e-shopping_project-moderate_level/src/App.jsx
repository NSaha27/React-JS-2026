import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Products from "./components/Products";

import "./App.css";
import Login from "./components/Login";

function App() {
  /* 
  There will be three pages, (1) log in page, (2) products page, (3) cart page 

  Product and Customer data will be fetched from external public API. Logins will be performed on the fetched customer data. A cart state should be mentained to save product on the cart. Use localstorage to store logged in user's username and his cart state there.
  */

  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    // set initial customers
    const handleSetInitialCustomers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("network response was not ok !");
        }
        const data = await response.json();
        const initialCustomers = data["users"].map((cust) => ({
          ...cust,
          cart: {},
        }));
        setCustomers(initialCustomers);
      } catch (err) {
        if (err.name !== "AbortError") {
          setErrors("***failed to fetch customer data, error:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    // set initial products
    const handleSetInitialProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("network response was not ok !");
        }
        const initialProducts = await response.json();
        setProducts(initialProducts["products"]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setErrors("***failed to fetch product data, error:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    handleSetInitialProducts();
    handleSetInitialCustomers();

    return () => abortController.abort();
  }, []);

  const handleAddToCartBtnClick = (cID, pID) => {
    setCustomers((prev) => {
      return prev.map((cust) => {
        if (cust.username === cID) {
          const cartOfSelectedCustomer = cust.cart;
          if (Object.keys(cartOfSelectedCustomer).includes(pID)) {
            cartOfSelectedCustomer[pID] += 1;
          } else {
            cartOfSelectedCustomer[pID] = 1;
          }
          return { ...cust, cart: cartOfSelectedCustomer };
        } else {
          return cust;
        }
      });
    });
  };

  const handleSubmitLoginForm = (username, password) => {
    const custFoundAt = customers.findIndex(
      (cust) => cust.username === username && cust.password === password,
    );
    if (custFoundAt === -1) {
      console.error("***invalid login credentials!");
      return false;
    }
    sessionStorage.clear();
    sessionStorage.setItem("loggedInCustomer", JSON.stringify(username));
  };

  if (loading) {
    return (
      <div className="">
        <h2 className="">Loading...</h2>
      </div>
    );
  }

  if (errors.length > 0) {
    return (
      <div className="">
        <ul className="">
          {errors.map((err, index) => {
            return (
              <li className="" key={index}>
                {err}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {sessionStorage.getItem("loggedInCustomer") &&
      JSON.parse(sessionStorage.getItem("loggedInCustomer")).length > 0 ? (
        <Products
          products={products}
          onAddToCartBtnClick={handleAddToCartBtnClick}
        />
      ) : (
        <Login onSubmitLoginForm={handleSubmitLoginForm} />
      )}
    </>
  );
}

export default App;
