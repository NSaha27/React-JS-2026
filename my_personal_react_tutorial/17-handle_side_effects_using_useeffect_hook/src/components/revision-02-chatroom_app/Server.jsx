import { useState } from "react";

export default function Server({ onSetServerAddress }) {
  const [serverAddress, setServerAddress] = useState("http://localhost:3000");

  const handleServerAddressChange = (ev) => {
    setServerAddress(ev.target.value);
  };
  const handleBtnClick = () => {
    onSetServerAddress(serverAddress);
  };

  return (
    <div className="">
      <span className="">enter the server address:</span>
      <input
        type="text"
        name="serverAddress"
        id="serverAddress"
        className=""
        value={serverAddress}
        onChange={handleServerAddressChange}
      />
      <button className="" onClick={handleBtnClick}>
        Set
      </button>
    </div>
  );
}
