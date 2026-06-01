import { useState } from "react";
import Chat from "./Chat";
import Login from "./Login";
import Registration from "./Registration";

export default function Main({
  wantToCreateAcc,
  onSubmitRegForm,
  onSubmitLoginForm,
  users,
  currentUser,
  onAddToContact,
}) {
  const [displayContacts, setDisplayContacts] = useState(false);
  const [contacts, setContacts] = useState([...users]);
  const handleAddContactBtnClick = (username) => {
    setDisplayContacts(!displayContacts);
    setContacts((prev) => prev.filter((cont) => cont.username !== username));
  };

  return (
    <div className="col-span-2">
      {displayContacts ? (
        <ul className="">
          {contacts.map((cont) => {
            return (
              <li
                className=""
                onClick={() =>
                  onAddToContact(cont.username, currentUser.username)
                }
                key={cont.username}
              >
                {cont.name}{" "}
                <span
                  className={`${cont.isLoggedIn ? "bg-green-500" : "bg-red-500"}`}
                ></span>
              </li>
            );
          })}
        </ul>
      ) : null}
      {wantToCreateAcc ? (
        <Registration onSubmitRegForm={onSubmitRegForm} />
      ) : currentUser.isLoggedIn ? (
        <Chat
          user={currentUser}
          onAddContactBtnClick={handleAddContactBtnClick}
        />
      ) : (
        <Login
          currentUser={currentUser}
          onSubmitLoginForm={onSubmitLoginForm}
        />
      )}
    </div>
  );
}
