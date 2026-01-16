import Header from "./components/Header";
import Main from "./components/Main";

function App(){
  const profile = {
    pName: "Niladri Saha",
    pImage: "profile_image.jpg",
    aboutMe:
      "Full‑stack web developer with expertise in JavaScript, React, Node.js, and databases. I enjoy crafting seamless user experiences and robust server‑side systems, constantly learning new tools to stay ahead in the fast‑evolving tech landscape.",
  };

  return (
    <>
      <Header profile={profile} />
      <Main profile={profile} />
    </>
  )
}

export default App;