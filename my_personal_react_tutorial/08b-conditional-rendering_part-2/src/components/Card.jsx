export default function Card({ food }) {
  return (
    <div className="">
      <div className="card-header">
        <img src={food.img} alt={food.title} />
      </div>
      <div className="card-body">
        <h2>{food.title}</h2>
        <p>({food.category})</p>
        <p>{food.type}</p>
        <p>{food.description.slice(0, 50) + "..."}</p>
        <h3>{Number(food.qty) > 0 ? "In Stock" : "Out of Stock"}</h3>
        <h3>Rs.{food.price.toFixed(2)} only</h3>
      </div>
      <div className="card-footer">
        <button className="btn">Go to Cart</button>
      </div>
    </div>
  );
}
