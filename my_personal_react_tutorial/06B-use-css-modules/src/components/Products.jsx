import Item from "./Item";
import styles from "./css/Products.module.css";

function Products({ products, category }) {
  return (
    <div className={styles["product-list"]}>
      <h1 className="">{category}</h1>
      <div className="">
        {products.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Products;
