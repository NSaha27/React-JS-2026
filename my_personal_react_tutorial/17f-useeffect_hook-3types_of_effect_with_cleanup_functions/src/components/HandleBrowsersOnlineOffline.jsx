import { useEffect, useState } from "react";

function HandleBrowsersOnlineOffline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="">
      <h2 className="">You're now {isOnline}</h2>
    </div>
  );
}

export default HandleBrowsersOnlineOffline;
