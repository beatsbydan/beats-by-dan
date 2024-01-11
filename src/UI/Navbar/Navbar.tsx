import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.svg'
import {NavLink} from 'react-router-dom'
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="flex-row">
            <img src={logo} alt="logo" />
            <nav className='flex-row'>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/about'}>about me</NavLink>
                <NavLink to={'/'}>contact</NavLink>
                <NavLink to={'/portfolio'}>portfolio</NavLink>
            </nav>
            <div className="navControls">
                {!isOpen ? <RiCloseLine color='white' size={30}/> : <RiMenu3Fill color='black' size={27}/>}
            </div>
        </header>
    )
}

export default Navbar