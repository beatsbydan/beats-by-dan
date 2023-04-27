import styles from './Footer.module.css'
import {AiFillGithub,AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return ( 
        <div className={styles.Footer}>
            <div className={styles.footerLeft}>
                <AiFillGithub cursor='pointer' style={{color:'white'}} size={44}/>
                <AiFillInstagram cursor='pointer' style={{color:'white'}} size={44}/>
                <AiFillLinkedin cursor='pointer' style={{color:'white'}} size={44}/>
                <AiFillTwitterCircle cursor='pointer' style={{color:'white'}} size={44}/>
            </div>
            <h4>beatsbydan@2023</h4>
        </div>
     );
}
 
export default Footer;