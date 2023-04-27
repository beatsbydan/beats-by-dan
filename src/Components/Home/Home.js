import styles from './Home.module.css'
import myImg from '../../Assets/Images/image-Daniel.jpg'
const Home = () => {
    return ( 
        <div className={styles.Home}>
            <div className={styles.block}>
                <div className={styles.leftBlock}>
                    <h1>Hi I'm Daniel!
                        <span>
                            I'm a Software Engineer
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Magna pellentesque etiam praesent condimentum elementum nelementum id.
                    </p>
                </div>
                <div className={styles.myImage}>
                    <div className={styles.image}>
                        <img src={myImg} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.downloadResume}>
                <button>Download Resume</button>
            </div>
        </div>
     );
}
 
export default Home;