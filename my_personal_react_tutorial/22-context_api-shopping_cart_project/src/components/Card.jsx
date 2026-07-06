import { useContext } from "react";

import CartContext from "./CartContext";

export default function Card({ course }) {
  const { addToCart } = useContext(CartContext);

  const loggedInUser = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : "";

  return (
    <div className="">
      <div className="">
        <img src="" alt="" className="" />
      </div>
      <div className="">
        <h2 className="">{course.title}</h2>
      </div>
      <div className="">
        <button className="">Details</button>
        <button
          className=""
          title={loggedInUser.length > 0 ? "" : "*please log in at first!"}
          disabled={loggedInUser.length > 0 ? false : true}
          onClick={() => addToCart(loggedInUser, course.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
