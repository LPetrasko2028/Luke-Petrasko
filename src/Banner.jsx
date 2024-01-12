import './Banner.css';
import Navbar from './Navbar';
import logo from './assets/logo.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={logo} alt="Luke Petrasko" className='bannerImage' />
            <h1 className='bannerTitle'>Luke Petrasko</h1>
            <Navbar />
        </div>
    );
};

export default Banner;
