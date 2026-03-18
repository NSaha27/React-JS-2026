import { useEffect, useState } from "react";
import "./App.css";

function Header() {
  return (
    <header className="container py-2">
      <nav className="flex flex-row justify-between items-center p-5 bg-purple-700">
        <h2 className="text-2xl font-semibold text-amber-200 capitalize">
          Product
        </h2>
        <ul className="list-none p-0 m-0 overflow-hidden">
          <li className="float-left">
            <a
              href=""
              className="text-amber-200 font-semibold py-2 px-3 mx-1 hover:text-white delay-100"
            >
              Home
            </a>
          </li>
          <li className="float-left">
            <a
              href=""
              className="text-amber-200 font-semibold py-2 px-3 mx-1 hover:text-white delay-100"
            >
              About Us
            </a>
          </li>
          <li className="float-left">
            <a
              href=""
              className="text-amber-200 font-semibold py-2 px-3 mx-1 hover:text-white delay-100"
            >
              Products
            </a>
          </li>
          <li className="float-left">
            <a
              href=""
              className="text-amber-200 font-semibold py-2 px-3 mx-1 hover:text-white delay-100"
            >
              Sign Up/Log In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-3.5 my-2 bg-purple-700 flex flex-row justify-center items-center">
      <p className="font-semibold text-amber-200">
        &copy; www.product.com , {new Date().getFullYear()}
      </p>
    </footer>
  );
}

function Main({ children }) {
  return <main className="py-10 px-8">{children}</main>;
}

function ProductList({ products = [] }) {
  const [options, setOptions] = useState({ beauty: true });
  const [priceRange, setPriceRange] = useState(100);

  let prodCategories = new Set(products.map((p) => p.category));
  prodCategories = Array.from(prodCategories.values());

  const handleCheckboxChange = (ev) => {
    const { name, checked } = ev.target;
    setOptions({ ...options, [name]: checked });
  };

  const handlePriceRangeChange = (ev) => {
    setPriceRange(Number(ev.target.value));
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 side-menu">
        <h3 className="text-xl font-semibold mb-2">Product Category:</h3>
        <ul className="">
          {prodCategories.map((ctg, indx) => {
            return (
              <li className="flex flex-row gap-2 items-center" key={indx}>
                <input
                  type="checkbox"
                  name={ctg}
                  id={`category${indx}`}
                  className=""
                  checked={options[ctg]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`category${indx}`} className="">
                  {ctg}
                </label>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <label htmlFor="" className="text-xl font-semibold">
            Select a price range:
          </label>
          <input
            type="range"
            name="priceRange"
            id=""
            className="mt-2"
            min={0}
            max={10000}
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
          <p className="">
            price: <span className="font-semibold">${priceRange}</span>
          </p>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-4 prod-list">
        {products.length > 0 ? (
          products.map((prod, indx) => {
            if (options[prod.category] && prod.price <= priceRange) {
              return (
                <div
                  className="border-2 rounded-xl border-purple-700 shadow p-8 card"
                  key={indx}
                >
                  <div className="card-header">
                    <img
                      src={prod.thumbnail}
                      alt={prod.title}
                      className="w-full max-h-36
                      "
                    />
                  </div>
                  <div className="pt-4 card-body">
                    <h3 className="text-xl text-purple-700 font-bold mb-2">
                      {prod.title}
                    </h3>
                    <p className="text-gray-800 mb-2">
                      Category:{" "}
                      <span className="font-semibold">
                        {prod.category} product
                      </span>
                    </p>
                    <p className="text-gray-800 mb-2">
                      Rating:{" "}
                      <span className="font-semibold">{prod.rating}</span>
                    </p>
                    <p className="text-xl text-gray-800 font-bold mb-4">
                      ${prod.price}
                    </p>
                    <p className="flex flex-row gap-2 mb-3">
                      {prod.tags.map((tag, ind) => {
                        return (
                          <span
                            className="py-0.5 px-1 border border-violet-700 rounded bg-violet-200 text-violet-700 font-semibold"
                            key={ind}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </p>
                    <p
                      className={`text-xl ${prod.availabilityStatus === "In Stock" ? "text-green-600" : "text-red-600"} font-semibold mb-2`}
                    >
                      {prod.availabilityStatus}
                    </p>
                  </div>
                  <div className="pt-4 flex flex-row align-middle justify-between card-footer">
                    <button className="py-1 px-3.5 border-2 rounded border-yellow-700 bg-yellow-200 font-semibold cursor-pointer hover:bg-yellow-700 hover:text-white">
                      Checkout
                    </button>
                    <button className="py-1 px-4 border-2 rounded border-yellow-700 bg-yellow-200 font-semibold cursor-pointer hover:bg-yellow-700 hover:text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <h2 className="">no product is yet available!</h2>
        )}
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiURL = "https://dummyjson.com/products";
    fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("*product data was fetched successfully!");
        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <Main>
        <ProductList products={products} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
