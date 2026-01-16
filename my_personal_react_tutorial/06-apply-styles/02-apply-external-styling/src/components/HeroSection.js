import "./css/hero_section.css";

function HeroSection(props){
  return <div className="hero">
    <div className="hero-container">
      <div className="hero-image"></div>
      <div className="hero-info">
        <h1 className="">Hey, I'm {props.profile.pName}</h1>
        <p className="">{props.profile.aboutMe}</p>
        <a href="/projects" className="btn">Projects</a>
      </div>
    </div>
  </div>
}

export default HeroSection;