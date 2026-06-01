export default function Chat({ user, onAddContactBtnClick }) {
  return (
    <div className="">
      {user.contacts.length > 0 ? (
        <div className=""></div>
      ) : (
        <div className="">
          <h3 className="">you don't have any contact yet !</h3>
          <button
            className=""
            onClick={() => onAddContactBtnClick(user.username)}
          >
            Add Contact
          </button>
        </div>
      )}
    </div>
  );
}
