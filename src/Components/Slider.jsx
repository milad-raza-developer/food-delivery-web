import react from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import './slider.css';
// import 'swiper/swiper.scss';
import Slider1 from '../Images/home-img-1.png';
import Slider2 from '../Images/home-img-2.png';
import Slider3 from '../Images/home-img-3.png';

const Slider = () => {
    return (
        <div>
            <div className="home-slider">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 7500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="home-slider"
                >
                    <div className="wrapper">
                        <SwiperSlide>
                            <div className="slide">
                                <div className="content">
                                    <span>our special dish</span>
                                    <h3>spicy noodles</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                    <a href="#" className="btn">order now</a>
                                </div>
                                <div className="image">
                                    <img src={Slider1} alt="slider image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="content">
                                    <span>our special dish</span>
                                    <h3>fried chicken</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                    <a href="#" className="btn">order now</a>
                                </div>
                                <div className="image">
                                    <img src={Slider2} alt="slider image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="content">
                                    <span>our special dish</span>
                                    <h3>hot pizza</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                    <a href="#allRestaurants" className="btn">order now</a>
                                </div>
                                <div className="image">
                                    <img src={Slider3} alt="slider image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>
            </div>
        </div>
    )

}

export default Slider