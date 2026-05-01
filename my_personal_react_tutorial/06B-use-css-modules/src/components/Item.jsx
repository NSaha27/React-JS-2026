import styles from "./css/Item.module.css";

function Item({ item }) {
  return (
    <div className="card">
      <div className={styles["card-header"]}>
        <img src={item.imgSource} alt={item.name} className="" />
      </div>
      <div className={styles["card-body"]}>
        <h2 className="">{item.name}</h2>
        <p className="">{item.description.slice(0, 50) + "..."}</p>
        <p className="">
          {item.sizes.map((size, index) => {
            return (
              <button type="button" key={index} className="">
                {size}
              </button>
            );
          })}
        </p>
        <p className="">{item.stockStatus}</p>
        <h3 className="">
          {Math.round((item.price * (100 - item.discount)) / 100)}/-{" "}
          <strike className="">{item.price}</strike>{" "}
          <span className="">{item.discount}%</span>
        </h3>
      </div>
      <div className={styles["card-footer"]}>
        <button className="">Add to Wishlist</button>
        <button className="">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
