import { useState } from "react";

export default function ChatRoom({ isChatOpen, onChatBtnToggle }) {
  const [roomID, setRoomID] = useState("general");

  const handleRoomIDChange = (ev) => {
    setRoomID(ev.target.value);
  };
  const handleBtnToggle = () => {
    onChatBtnToggle(!isChatOpen, roomID);
  };

  return (
    <div className="">
      <span>Choose your chat room:</span>
      <select
        name="roomID"
        id=""
        className=""
        value={roomID}
        onChange={handleRoomIDChange}
      >
        <option value="" disabled>
          select a Room ID
        </option>
        <option value="general">General</option>
        <option value="travel">Travel</option>
        <option value="politics">Politics</option>
      </select>
      <button className="" onClick={handleBtnToggle}>
        {isChatOpen ? "Close Chat" : "Open Chat"}
      </button>
    </div>
  );
}
