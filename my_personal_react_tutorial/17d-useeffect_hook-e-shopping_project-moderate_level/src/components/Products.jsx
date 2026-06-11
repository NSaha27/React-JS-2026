import { useState } from "react";

import Item from "./Item";
import Menu from "./Menu";

export default function Products({ products, onAddToCartBtnClick }) {
  const [categories, setCategories] = useState(() => {
    const prodCatg = products.map((prod) => {
      if (prod.category === "beauty") {
        return [prod.category, true];
      } else {
        return [prod.category, false];
      }
    });
    return Object.fromEntries(prodCatg);
  });

  const handleProdCategoryChange = (ev) => {
    const { name, checked } = ev.target;
    setCategories((prev) => ({ ...prev, [name]: checked }));
  };

  const filteredProducts = products.filter(
    (prod) => categories[prod.category] === true,
  );

  return (
    <div className="">
      <Menu
        categories={categories}
        onProdCategoryChange={handleProdCategoryChange}
      />
      <div className="">
        <h3 className="">
          you're watching {filteredProducts.length} of {products.length}{" "}
          products
        </h3>
        <div className="">
          {filteredProducts.map((prod) => {
            return (
              <Item
                item={prod}
                onAddToCartBtnClick={onAddToCartBtnClick}
                key={prod.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
