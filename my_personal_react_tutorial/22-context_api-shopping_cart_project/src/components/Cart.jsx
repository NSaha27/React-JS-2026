import { useContext } from "react";

import CartContext from "./CartContext";
import CourseContext from "./CourseContext";

export default function Cart(username) {
  const { carts, removeFromCart, clearCart } = useContext(CartContext);
  const { courses } = useContext(CourseContext);

  const userFound = Object.keys(carts).includes(username);
  if (!userFound) {
    return (
      <div className="">
        <h2 className="">You've an empty cart!</h2>
      </div>
    );
  }
  const getSelectedCart = carts[username];
  const getSelectedCartCourses = courses.filter((crs) => {
    if (getSelectedCart.includes(crs.id)) {
      return crs;
    }
  });

  return (
    <div className="">
      <div className="">
        <button className="" onClick={() => clearCart(username)}>
          Clear Cart
        </button>
      </div>
      {getSelectedCartCourses.map((course) => {
        return (
          <div className="" key={course.id}>
            <div className="">
              <img src="" alt="" className="" />
            </div>
            <div className="">
              <h2 className="">{course.title}</h2>
              <p className="">Type : {course.type}</p>
              <p className="">Description : {course.description}</p>
              <p className="">Rs.{course.price}/-</p>
            </div>
            <div className="">
              <button
                className=""
                onClick={() => removeFromCart(username, course.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
