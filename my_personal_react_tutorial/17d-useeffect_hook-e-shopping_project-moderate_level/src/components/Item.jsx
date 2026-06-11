export default function Item({ item, onAddToCartBtnClick }) {
  return (
    <div className="">
      <div className="">
        <img src={item.images[0]} alt={item.title} className="" />
      </div>
      <div className="">
        <h2 className="">{item.title}</h2>
        <p className="">{item.category}</p>
        <p className="">{item.description.slice(0, 50) + "..."}</p>
        <p className="">rating : {item.rating}</p>
        <h3 className="">${item.price} only</h3>
        <p className="">
          {item.stock > 5 ? "In stock" : `only ${item.stock} items left`}
        </p>
      </div>
      <div className="">
        <button className="" onClick={() => onAddToCartBtnClick(item.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
