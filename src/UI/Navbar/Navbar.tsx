import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.svg'
import {NavLink} from 'react-router-dom'

const Navbar:React.FC = () => {
    return (
        <header className="flex-row">
            <img src={logo} alt="logo" />
            <nav className='flex-row'>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/about'}>about me</NavLink>
                <NavLink to={'/'}>contact</NavLink>
                <NavLink to={'/portfolio'}>portfolio</NavLink>
            </nav>
            {}
        </header>
    )
}

export default Navbar