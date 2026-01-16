import HeroSection from "./HeroSection";
import SideMenu from "./SideMenu";
import "./css/main.css";

function Main(props){
  return <div className="main">
    <SideMenu />
    <HeroSection profile={props.profile} />
  </div>
}

export default Main;