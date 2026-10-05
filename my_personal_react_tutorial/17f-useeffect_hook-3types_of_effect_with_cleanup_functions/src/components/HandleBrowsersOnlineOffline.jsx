import { useEffect } from "react";

function HandleBrowsersOnlineOffline() {
  useEffect(() => {
    const handleOnline = () => {
      console.log("You're now online!");
    };
    const handleOffline = () => {
      console.log("You're now offline!");
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
      <h2 className="">Welcome to browser's online/offline status</h2>
    </div>
  );
}

export default HandleBrowsersOnlineOffline;
