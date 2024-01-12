import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.svg'
import {NavLink} from 'react-router-dom'
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className="flex-row navbar" style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <img src={logo} alt="logo" />
            <nav className={isOpen? 'flex-row open' : 'flex-row'}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About me</NavLink>
                <NavLink to={'/'}>Contact</NavLink>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
            </nav>
            <div className="navControls">
                {isOpen ? 
                    <RiCloseLine onClick={handleOpen} color='white' size={30}/> 
                    : 
                    <RiMenu3Fill onClick={handleOpen} color='black' size={27}/>
                }
            </div>
        </header>
    )
}

export default Navbar