import { useEffect, useState } from "react";

import "./App.css";
// import BasicSyntax from "./components/BasicSyntax";
// import DependencyArray from "./components/DependencyArray";
// import DepdArrayWithNonEmptyArray from "./components/DepdArrayWithNonEmptyArray";
// import CleanupFunction from "./components/CleanupFunction";
// import DigitalClock from "./components/revision-01/DigitalClock";
import Chat from "./components/revision-02-chatroom_app/Chat";
import ChatRoom from "./components/revision-02-chatroom_app/ChatRoom";
import Connection from "./components/revision-02-chatroom_app/Connection";
import Server from "./components/revision-02-chatroom_app/Server";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatData, setChatData] = useState({
    roomID: "",
    serverAddress: "",
  });

  useEffect(() => {
    const conn = new Connection(chatData.roomID, chatData.serverAddress);
    conn.connect();
    return () => {
      conn.disconnect();
    };
  }, [chatData]);

  const handleSetServerAddress = (address) => {
    setChatData((curData) => ({ ...curData, serverAddress: address }));
  };

  const handleChatBtnToggle = (chatOpenStat, rmID) => {
    setIsChatOpen(chatOpenStat);
    setChatData((curData) => ({ ...curData, roomID: rmID }));
  };

  return (
    <>
      {/* <BasicSyntax /> */}
      {/* <DependencyArray /> */}
      {/* <DepdArrayWithNonEmptyArray /> */}
      {/* <CleanupFunction /> */}
      {/* <BasicSyntax /> */}
      {/* <DigitalClock /> */}
      <Server onSetServerAddress={handleSetServerAddress} />
      <ChatRoom isChatOpen={isChatOpen} onChatBtnToggle={handleChatBtnToggle} />
      {isChatOpen ? (
        <>
          <br />
          <hr />
          <Chat roomID={chatData.roomID} />
        </>
      ) : null}
    </>
  );
}

export default App;
