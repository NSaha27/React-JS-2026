import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="">
      <h2 className="">e-shopping</h2>
      <ul className="">
        <li className="">
          <a href="/" className="">
            Home
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            Products
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            Account
          </a>
        </li>
      </ul>
      <span className="">
        <FaShoppingCart />
      </span>
    </div>
  );
}
