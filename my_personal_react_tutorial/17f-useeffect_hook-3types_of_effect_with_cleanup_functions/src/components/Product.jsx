function Product({ product }) {
  return (
    <div
      className=""
      style={{ border: "3px solid #ddd", boxShadow: "0 2px 14px #aaa" }}
    >
      <div
        className="card-header"
        style={{ objectFit: "cover", overflow: "hidden" }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", maxHeight: "40vh" }}
        />
      </div>
      <div
        className="card-body"
        style={{
          padding: "2rem 1rem",
        }}
      >
        <h2 className="">{product.title}</h2>
        <h4 className="">{product.category} product</h4>
        <p className="">{product.description.slice(0, 68).concat("...")}</p>
        <h4 className="">avg. rating: {product.rating}</h4>
        <h3
          className=""
          style={{ color: product.stock > 5 ? "#00ff00" : "#ff0000" }}
        >
          {product.stock > 5 ? "In stock" : `only ${product.stock} available`}
        </h3>
        <h2 className="">${product.price}</h2>
      </div>
      <div
        className="card-footer"
        style={{ padding: "0.5rem", marginTop: "auto" }}
      >
        <button
          className=""
          style={{
            width: "100%",
            padding: "1rem 0",
            border: "none",
            fontWeight: "bold",
            backgroundColor: "#ffdd00",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
