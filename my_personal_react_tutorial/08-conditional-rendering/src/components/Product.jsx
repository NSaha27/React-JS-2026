function DisplayCardStyle({ product }) {
  return (
    <div className="">
      <div className="card-header">
        <img src={product.images[0]} alt={product.title} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="">{product.title}</h3>
        <p className="">
          <span className="avg-rating"></span> ({product.rating})
        </p>
        <p className="">
          <strong className="">
            $
            {Math.round(
              (product.price * (100 - product.discountPercentage)) / 100,
            )}
          </strong>{" "}
          <span className="old-price">{product.price}</span>{" "}
          <span className="rod">{product.discountPercentage}% off</span>
        </p>
        <p className="">
          {product.tags.map((tag) => {
            return (
              <span className="tag" key={tag}>
                {tag}
              </span>
            );
          })}
        </p>
      </div>
      <div className="card-footer">
        <form method="post">
          <input type="hidden" name="prodID" value={`${product.id}`} />
          <button type="submit" className="">
            Add to Cart
          </button>
        </form>
        <button className="">Check details</button>
      </div>
    </div>
  );
}

function DisplayExtendedStyle({ product }) {
  return (
    <div className="">
      <div className="disp-images"></div>
      <div className="disp-others">
        <h2 className="">{product.title}</h2>
      </div>
    </div>
  );
}

function Product({ product, displayDetails }) {
  if (typeof displayDetails === "boolean" && displayDetails === true) {
    return <DisplayExtendedStyle product={product} />;
  }
  return <DisplayCardStyle product={product} />;
}

export default Product;
