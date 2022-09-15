 import { CgArrowRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Store!</h1>
      <h4>We are glad to see you here!</h4>
      <h4>In our <NavLink to ='/store'>My Store</NavLink> Shop you will find a variety of high-quality products. </h4>
      <h4>You can also have some fun in our <NavLink to = '/playroom'>Playroom</NavLink>, where you will find some product related games. </h4>

      <div className="home-btn">
        <button><NavLink to={'/store'}>Visit My Store<span><CgArrowRight/></span></NavLink></button>
        <button ><NavLink to={'/playroom'}>Go to My Playroom<span><CgArrowRight/></span></NavLink></button>
      </div> 
    </div>
  )
}

export default Home