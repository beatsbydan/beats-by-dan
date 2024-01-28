import React from 'react'
import './Footer.css'
import instagram from '../../Assets/Images/instagram.svg'
import x from '../../Assets/Images/x.svg'
import linkedIn from '../../Assets/Images/linked-in.svg'
import { FaGithub } from "react-icons/fa";

const Footer:React.FC = () => {
    return (
        <footer>
            <h3>DANIEL ONYEACHONAM </h3>
            <div className='flex-row'>
                <a href="https://www.instagram.com/beatsbydan.dev" rel="noreferrer noopener" title="Instagram" target='_blank' ><img src={instagram} alt="" /></a>
                <a href="https://twitter.com/beatsby_dan" rel="noreferrer noopener" title="X" target='_blank' ><img src={x} alt="" /></a>
                <a href="https://www.linkedin.com/in/daniel-onyeachonam/" rel='noreferrer noopener' title='LinkedIn' target='_blank' ><img src={linkedIn} alt="" /></a>
                <a href="https://www.github.com/beatsbydan" rel='noreferrer noopener' title='Github' target='_blank' ><FaGithub size={45} color='white' /></a>
            </div>
        </footer>
    )
}

export default Footer