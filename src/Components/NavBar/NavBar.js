// import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from './NavBar.module.css'
import {BiX} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleNavBar = () => {
    if(!isOpen){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
  }
    return (
        <div className={styles.Navbar}>
          <header>
            <h1 className={styles.logo}>beatsbydan.</h1>
            <FaBars onClick={handleNavBar} className={styles.navBtn} style={{color:"white", cursor:'pointer', visibility: isOpen ? 'hidden' : "visible"}} size={24}/>            
            <nav className={isOpen ? `${styles.mobileNav}` : ''}>
             <BiX onClick={handleNavBar} className={styles.navBtn} style={{color:"white", cursor:'pointer'}} size={30}/> 
              <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact Me</li>
                {/* <li><Link to="">Home</Link></li>
                <li><Link to="">Projects</Link></li>
                <li><Link to="">Skills</Link></li>
                <li><Link to="">Contact Me</Link></li> */}
              </ul> 
            </nav>
          </header>
        </div>
      );
}
 
export default NavBar;