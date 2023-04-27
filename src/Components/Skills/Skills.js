import styles from './Skills.module.css'
import html from '../../Assets/Skills/HTML.png'
import css from '../../Assets/Skills/CSS.png'
import javascript from '../../Assets/Skills/Javascript.png'
import react from '../../Assets/Skills/React.png'
import python from '../../Assets/Skills/Python.png'
import git from '../../Assets/Skills/Git.png'
const Skills = () => {
    return ( 
        <div className={styles.skills}>
            <h1>Skills</h1>
            <div className={styles.skillsBlock}>
                <div className={styles.block}>
                    <img src={html} alt="" />
                    <p>HTML</p>
                </div>
                    <div className={styles.block}>
                    <img src={css} alt="" />
                <p>CSS</p>
                </div>
                <div className={styles.block}>
                    <img src={javascript} alt="" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className={styles.block}>
                    <img src={react} alt="" />
                    <p>REACT</p>
                </div>
                <div className={styles.block}>
                    <img src={python} alt="" />
                    <p>PYTHON</p>
                </div>
                <div className={styles.block}>
                    <img src={git} alt="" />
                    <p>GIT</p>
                </div>                
            </div>
        </div>
     );
}
 
export default Skills;