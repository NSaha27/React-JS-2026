import { useState } from "react";

export default function ContactForm({ onSubmitContactForm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const formData = { name, phone, email, message };
    onSubmitContactForm(formData);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
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
              value={name}
              onChange={(ev) => setName(ev.target.value)}
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
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
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
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
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
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
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
