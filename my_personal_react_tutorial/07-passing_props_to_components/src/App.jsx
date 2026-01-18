import "./App.css";
import Card from "./components/Card";

function App() {
  const profile = {
    pID: "f0d32n7",
    pName: "Niladri Saha",
    pImgFileName: "profile_image.jpg",
    pDescription:
      "Full‑stack web developer with expertise in JavaScript, React, Node.js, and databases. I enjoy crafting seamless user experiences and robust server‑side systems, constantly learning new tools to stay ahead in the fast‑evolving tech landscape.",
    pLocation: "Howrah, West Bengal",
    pContactNumber: "+918981584700",
    pContactEmail: "sahaniladri27y@gmail.com",
    pGitHubAccLink: "152137415+NSaha27@users.noreply.github.com",
    pLinkedInAccLink: "www.linkedin.com/in/niladri-saha-221046214",
  };

  return (
    <div className="app">
      <Card profile={{ ...profile }} />
    </div>
  );
}

export default App;
