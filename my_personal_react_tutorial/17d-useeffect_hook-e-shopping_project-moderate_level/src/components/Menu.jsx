export default function Menu({ categories, onProdCategoryChange }) {
  return (
    <div className="">
      <h3 className="">filter product by category -</h3>
      <div className="">
        <ul className="">
          {Object.entries(categories).map(([key, value]) => {
            return (
              <li className="" key={key}>
                <label htmlFor="category" className="">
                  {key}
                </label>
                <input
                  type="checkbox"
                  name={key}
                  id="category"
                  className=""
                  onChange={(ev) => onProdCategoryChange(ev)}
                  checked={value}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
