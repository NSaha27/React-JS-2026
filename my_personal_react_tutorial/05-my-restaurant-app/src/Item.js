import { FaArrowRight } from "react-icons/fa6";

function Item(props) {
  return (
    <div className="item">
      <img
        src={`images/${props.imgFileName}`}
        alt={props.itemName}
        className="item-image"
      />
      <div className="item-desc">
        <h3 className="name">{props.itemName}</h3>
        <p className="ingrediants">{props.ingrediants.join(", ")}</p>
        <p className="price">Rs.{props.price}/- only</p>
        <p className="checkout">
          <form id="checkout-form">
            <input type="hidden" name="checkout-item" value={props.itemID} />
            <button type="submit" className="btn checkout-btn">
              Checkout{"  "}
              <FaArrowRight />
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default Item;
