import { useState } from 'react';
import './Banner.css';
import Navbar from './Navbar';
import logo from './assets/logo.jpg'

const Banner = () => {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const [windowWidth, setWindowWidth] = useState(width)
    window.addEventListener('resize', () => {
        setWindowWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
    })
    return (
        <div className="banner">
            <img src={logo} alt="Luke Petrasko" className='bannerImage' />
            
            {( 900 < windowWidth) ? <h1 className='bannerTitle'>Luke Petrasko</h1> : null}
            <Navbar className='Navbar'/>
        </div>
    );
};

export default Banner;
