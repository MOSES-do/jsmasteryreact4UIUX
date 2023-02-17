import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';



const Menu = () => (

  <>
    <li className="p__opensans"> <a href="#home">Home</a> </li>
    <li className="p__opensans"> <a href="#about">About</a> </li>
    <li className="p__opensans"> <a href="#menu">Menu</a> </li>
    <li className="p__opensans"> <a href="#awards">Awards</a> </li>
    <li className="p__opensans"> <a href="#contact">Contact</a> </li>
  </>
)

const Navbar = () => {
  const [toggleNavbar, settoggleNavbar] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="container">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="appLogo" />
        </div>

        <ul className='app__navbar-links'>
          <Menu />
        </ul>

        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Log In / Register</a>
          <div />
          <a href="/" className="p__opensans">Book Table</a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu style={{ cursor: "pointer" }} color="#fff" fontSize={27} onClick={() => settoggleNavbar(prevValue => !prevValue)} />

          {toggleNavbar && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu style={{ cursor: "pointer" }} fontSize={27} className="overlay__close" onClick={() => settoggleNavbar(prevValue => !prevValue)} />
              <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans" onClick={() => settoggleNavbar(false)} > <a href="#home">Home</a> </li>
                <li className="p__opensans" onClick={() => settoggleNavbar(false)}> <a href="#about">About</a> </li>
                <li className="p__opensans" onClick={() => settoggleNavbar(false)}> <a href="#menu">Menu</a> </li>
                <li className="p__opensans" onClick={() => settoggleNavbar(false)}> <a href="#awards">Awards</a> </li>
                <li className="p__opensans" onClick={() => settoggleNavbar(false)}> <a href="#contact">Contact</a> </li>
              </ul>
            </div>
          )}
        </div>
      </div>


    </nav>
  )
};

export default Navbar;
