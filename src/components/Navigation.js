
// import logo from '../logo.png'
import React from 'react';
import logo from '../logo.png'
import sidenav from '../assets/images/sidenav.png';
import { Link } from 'react-router-dom';


const Navigation = () => {  
    return (
        <>
        
   
    <header>
    {/* <div className="logo"><img className="logoimg" src={logo} alt="logo" /></div> */}

    </header>






    <section className='p-0' id="section1">
                    <div className="section topmenu">
                        <div className="logo"><img className="logoimg" src={logo} alt="logo" /></div>
                        <div className="menuNav">
                            <div className="topnav" id="rTopnav">
                                <div className="mobileWrap">
                                    {/* <ul>
                                        <li>Digital</li>
                                        <li>Our Services</li>
                                        <li>Our Work</li>
                                        <li>Let’s Talk</li>
                                    </ul> */}
                                    <Link to="/">Home </Link>
                                    <Link to="/about">About</Link>                 
                                    <Link to="/contact">Contact </Link>
                                </div>
                            </div>
                        </div>

                        <div className="sidenav">
                            <a href="#link">
                                <img src={sidenav} className="" alt="sideimg" />
                            </a>
                        </div>
                    </div>
                </section>











            <div className='topxxx d-none'>
                {/* <div className="logo"><img className="logoimg" src={logo} alt="logoerror" /></div> */}              
                    <Link to="/">Home </Link>
                    <Link to="/about">About</Link>                 
                    <Link to="/contact">Contact </Link>
            </div>
        </>
    )
}

export default Navigation;


