import React from 'react'
import './Footer.css'
import instagram from '../../Assets/Images/instagram.svg'
import x from '../../Assets/Images/x.svg'
import linkedIn from '../../Assets/Images/linked-in.svg'

const Footer:React.FC = () => {
    return (
        <footer>
            <h3>BEATSBYDAN.DEV</h3>
            <div className='flex-row'>
                <a href="https:www.youtube.com" rel="noreferrer noopener" title="instagram" target='_blank' ><img src={instagram} alt="" /></a>
                <a href="https:www.youtube.com" rel="noreferrer noopener" title="x" target='_blank' ><img src={x} alt="" /></a>
                <a href="https:www.youtube.com" rel='noreferrer noopener' title='linkedIn' target='_blank' ><img src={linkedIn} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer