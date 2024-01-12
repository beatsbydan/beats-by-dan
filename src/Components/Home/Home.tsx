import React from 'react'
import './Home.css'
import Contact from './Contact/Contact'

const Home:React.FC = () => {
    return (
        <div className='home'>
            <div className="bio">
                <h1>DANIEL</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis adipisci omnis officiis porro commodi necessitatibus aperiam repudiandae, velit nisi rerum culpa, vitae illo architecto quia reiciendis a atque quasi.</p>
            </div>
            <div className="experience">
                <div className="experience--details"></div>
                <div className="experience--details"></div>
                <div className="experience--details"></div>
            </div>
            <Contact/>
        </div>
    )
}

export default Home