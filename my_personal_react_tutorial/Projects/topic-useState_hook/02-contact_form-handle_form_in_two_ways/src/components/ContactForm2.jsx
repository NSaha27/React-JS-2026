import { useState } from "react";

export default function ContactForm({ onSubmitContactForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    onSubmitContactForm(formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="">
      <h2 className="">Contact Form</h2>
      <div className="">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=""
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="false"
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className=""
              value={formData.phone}
              onChange={handleInputChange}
              autoComplete="false"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className=""
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="false"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className=""
              value={formData.message}
              onChange={handleInputChange}
              autoComplete="false"
            ></textarea>
          </div>
          <div className="">
            <button type="submit" className="">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
