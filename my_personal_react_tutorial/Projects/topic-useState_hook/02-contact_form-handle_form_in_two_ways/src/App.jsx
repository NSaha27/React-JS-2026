import { useState } from "react";
import "./App.css";

// import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm2";
import Message from "./components/Message";

function App() {
  // const [formData, setFormData] = useState([]);
  const [contacts, setContacts] = useState([]);

  const handleSubmitContactForm = (data) => {
    try {
      // setFormData((prev) => [...prev, data]);
      setContacts((prevCont) => {
        const userFoundAt = prevCont.findIndex(
          (cont) => cont.name === data.name && cont.phone === data.phone,
        );
        let newOrUpdatedContact = [...prevCont];
        if (userFoundAt !== -1) {
          const userFound = newOrUpdatedContact[userFoundAt];
          userFound.messages.push(data.message);
          newOrUpdatedContact.splice(userFoundAt, 1, userFound);
        } else {
          newOrUpdatedContact.push({
            name: data.name,
            phone: data.phone,
            email: data.email,
            messages: [data.message],
          });
        }
        return newOrUpdatedContact;
      });
      console.log("*form has been submitted successfully");
    } catch (err) {
      console.error("*failed to submit the form, error:", err.message);
    }
  };

  return (
    <>
      <ContactForm onSubmitContactForm={handleSubmitContactForm} />
      <Message contacts={contacts} />
    </>
  );
}

export default App;
