import React from "react";
import { useState } from "react";

const UserCard = React.memo(({ name }) => {
  const curHour = new Date().getHours();
  let session;
  if (curHour <= 4) {
    session = "night";
  } else if (curHour <= 12) {
    session = "morning";
  } else if (curHour <= 15) {
    session = "noon";
  } else if (curHour <= 18) {
    session = "afternoon";
  } else if (curHour <= 21) {
    session = "evening";
  } else {
    session = "night";
  }

  console.log("child component 'UserCard' rendered!");
  return (
    <div className="">
      <h2 className="">
        Hello Mr./Mrs. {name}!<br />
        we wish you a very good {session}!
      </h2>
    </div>
  );
});

const Message = React.memo(({ message }) => {
  return (
    <div className="">
      <p>{message.length > 0 ? message : "you received a blank message"}</p>
    </div>
  );
});

const SendMessage = ({ onSendMessage }) => {
  const [formData, setFormdata] = useState({
    username: "",
    message: "",
    date: new Date().toLocaleString(),
  });
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormdata((curData) => ({ ...curData, [name]: value }));
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    onSendMessage(formData);
    setFormdata({
      username: "",
      message: "",
      date: new Date().toLocaleString(),
    });
  };

  return (
    <div className="">
      <div className="">
        <p className="">*enter the following:</p>
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <p className="">
            <label htmlFor="username" className="">
              Enter Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className=""
              onChange={handleInputChange}
              value={formData.username}
            />
          </p>
          <p className="">
            <label htmlFor="message" className="">
              Enter Your Message
            </label>{" "}
            <br />
            <textarea
              name="message"
              rows={10}
              cols={30}
              id="message"
              className=""
              placeholder="enter the message..."
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
          </p>
          <p className="">
            <button type="submit" className="">
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default function Greet() {
  const [messages, setMessages] = useState([]);

  const username = "Alex";

  const handleSendMessage = (data) => {
    setMessages((prev) => {
      const userFoundAt = prev.findIndex(
        (msg) => msg.username === data.username,
      );
      if (userFoundAt !== -1) {
        const newMessageList = [...prev[userFoundAt]["message"]];
        newMessageList.push(data.message);
        const updatedUser = { ...prev[userFoundAt], message: newMessageList };
        const newUserList = [...prev];
        newUserList.splice(userFoundAt, 1, updatedUser);
        return newUserList;
      } else {
        const newUserList = [...prev];
        newUserList.push(data);
        return newUserList;
      }
    });
  };

  return (
    <div className="">
      <SendMessage onSendMessage={handleSendMessage} />
      <div className="">
        {messages.map((message) => {
          return (
            <div className="" key={message.username}>
              <UserCard name={username} />
              <Message message={message} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
