import { useState } from "react";

export default function AddFood({ onAddingFood }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "type-veg",
    category: "",
    description: "",
    price: "0",
    qty: "1",
    img: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    onAddingFood(formData);
    setFormData({
      title: "",
      type: "type-veg",
      category: "",
      description: "",
      price: "0",
      qty: "1",
      img: "",
    });
  };

  return (
    <div className="">
      <h2>Add Food</h2>
      <div className="">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="title" className="">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              className=""
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="category" className="">
              Category
            </label>
            <br />
            <input
              type="text"
              name="category"
              id="category"
              className=""
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="type" className="">
              Type
            </label>
            <br />
            <span className="">
              <input
                type="radio"
                name="type"
                id="type-veg"
                value="type-veg"
                className=""
                checked={formData.type === "type-veg"}
                onChange={handleInputChange}
              />
              <label htmlFor="type-veg" className="">
                Veg
              </label>
            </span>
            <span className="">
              <input
                type="radio"
                name="type"
                id="type-non-veg"
                value="type-non-veg"
                className=""
                checked={formData.type === "type-non-veg"}
                onChange={handleInputChange}
              />
              <label htmlFor="type-non-veg" className="">
                Non-Veg
              </label>
            </span>
          </div>
          <div className="">
            <label htmlFor="description" className="">
              Description
            </label>
            <br />
            <textarea
              name="description"
              id="description"
              className=""
              value={formData.description}
              onChange={handleInputChange}
              rows={8}
              cols={21}
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="price" className="">
              Price
            </label>
            <br />
            <input
              type="text"
              name="price"
              id="price"
              className=""
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="qty" className="">
              Qty
            </label>
            <br />
            <input
              type="text"
              name="qty"
              id="qty"
              className=""
              value={formData.qty}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="img" className="">
              Image
            </label>
            <br />
            <input
              type="url"
              name="img"
              id="img"
              className=""
              placeholder="Enter an image url"
              value={formData.img}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
