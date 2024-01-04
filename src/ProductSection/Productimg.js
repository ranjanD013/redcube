import React from 'react';
import slide1 from '../assets/images/slider1.png';
import slide2 from '../assets/images/slider2.png';
import slide3 from '../assets/images/slider3.png';
import slide4 from '../assets/images/slider4.png';
import slide5 from '../assets/images/slider5.png';
import slide6 from '../assets/images/slider6.png';
import slide7 from '../assets/images/slider7.png';
import conlogo1 from '../assets/images/logo_protinex.png';
import conlogo2 from '../assets/images/logo_yakult.png';
import conlogo3 from '../assets/images/logo_audioteck.png';
import conlogo4 from '../assets/images/logo_fortis.png';
import conlogo5 from '../assets/images/logo_danone.png';
import conlogo6 from '../assets/images/logo_jsl.png';
import conlogo7 from '../assets/images/logo_kci.png';
import '../components/Custom.jsx';

const Productimg = () => {
    return (
        <>
            <div className="productmn">

                <section id="section5a" className='p-0 proimg section'>
                    <img src={slide1} alt="Protinex" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo1} alt="Protinex" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                </section>
                <section id="section5b" className='p-0 proimg section'>
                    <img src={slide2} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo2} alt="yakult" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                 </section>
                <section id="section5c" className='p-0 proimg section'>
                    <img src={slide3} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo3} alt="audioteck" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                 </section>
                <section id="section5d" className='p-0 proimg section'>
                    <img src={slide4} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo4} alt="fortis" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                 </section>
                <section id="section5e" className='p-0 proimg section'>
                    <img src={slide5} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo5} alt="danone" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                 </section>
                <section id="section5f" className='p-0 proimg section'>
                    <img src={slide6} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo6} alt="jsl" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>
                 </section>
                <section id="section5g" className='p-0 proimg section'>
                    <img src={slide7} alt="" />
                    <div className='prodcontent'>
                        <div className='headtxt'> <img src={conlogo7} alt="kci" />
                            <h2>Unleash Your Website's Potential: Where Creativity Meets Functionality!</h2>
                            <p>Website Design and Development</p>
                            <a href="#link" className="knmore">Know More</a>
                        </div>
                    </div>

                </section>

                {/* <div className="slick-slide"><img className="" src={slide1} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide2} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide3} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide4} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide5} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide6} alt="" /></div>
      <div className="slick-slide"><img className="" src={slide7} alt="" /></div>       */}
                {/* Add more slides as needed */}

            </div>
        </>

    );
};

export default Productimg;
