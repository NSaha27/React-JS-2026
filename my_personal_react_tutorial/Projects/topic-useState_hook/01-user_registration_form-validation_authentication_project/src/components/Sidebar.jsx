import ListUser from "./ListUser";

export default function Sidebar({
  onCreateAccBtnClick,
  users,
  currentUser,
  onSetCurrentUser,
}) {
  const usersToDisplay = users.filter((user) =>
    currentUser.contacts.includes(user.username),
  );
  return (
    <div className="">
      <button className="" onClick={() => onCreateAccBtnClick()}>
        Create New Account
      </button>
      {usersToDisplay.length > 0
        ? usersToDisplay.map((usr) => {
            return (
              <ListUser
                key={usr.username}
                user={usr}
                onSetCurrentUser={onSetCurrentUser}
              />
            );
          })
        : null}
      {users.length > 0 ? (
        <ul className="">
          {users.map((user) => {
            return (
              <ListUser
                key={user.username}
                user={user}
                onSetCurrentUser={onSetCurrentUser}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className="">No user is yet registered !</h2>
      )}
    </div>
  );
}
