import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.svg'
import {NavLink} from 'react-router-dom'
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
        };
        if(!visible){
            setIsOpen(false)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={ !visible ? "flex-row navbar scrolledDown" : "flex-row navbar scrolledUp" }>
            <img src={logo} alt="logo" />
            <nav className={isOpen && visible? 'flex-row open' : 'flex-row closed'}>
                <NavLink onClick={handleOpen} to={'/'}>Home</NavLink>
                <NavLink onClick={handleOpen} to={'/about'}>About me</NavLink>
                <NavLink onClick={handleOpen} to={'#contact'}>Contact</NavLink>
                <NavLink onClick={handleOpen} to={'/portfolio'}>Portfolio</NavLink>
            </nav>
            <div className="navControls">
                {isOpen ? 
                    <RiCloseLine onClick={handleOpen} color='white' size={40}/> 
                    : 
                    <RiMenu3Fill onClick={handleOpen} color='black' size={27}/>
                }
            </div>
        </header>
    )
}

export default Navbar