import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/logo.svg'

const Navbar:React.FC = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>home</li>
                    <li>about me</li>
                    <li>contact</li>
                    <li>portfolio</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar