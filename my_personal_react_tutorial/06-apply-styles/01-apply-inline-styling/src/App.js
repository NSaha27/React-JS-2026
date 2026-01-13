import Navbar from "./Navbar";

function App(){
  const profile = {
    profileImg: "profile.jpg",
    profileName: "Niladri Saha"
  };

  const appStyle = { width: "100%", minHeight: "100vh" };

  return (
    <div className="app" style={appStyle}>
      <Navbar profile={profile} />
    </div>
  );
}

export default App;