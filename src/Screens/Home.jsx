import React from 'react';
import Container from '../Components/Container';
import Slider from '../Components/Slider.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import './home.css'
import Dish1 from '../Images/dish-1.png';
import Dish2 from '../Images/dish-2.png';
import Dish3 from '../Images/dish-3.png';
import Dish4 from '../Images/dish-4.png';
import Dish5 from '../Images/dish-5.png';
import Dish6 from '../Images/dish-6.png';
import Menu1 from '../Images/menu-1.jpg';
import Menu2 from '../Images/menu-2.jpg';
import Menu3 from '../Images/menu-3.jpg';
import Menu4 from '../Images/menu-4.jpg';
import Menu5 from '../Images/menu-5.jpg';
import Menu6 from '../Images/menu-6.jpg';
import Menu7 from '../Images/menu-7.jpg';
import Menu8 from '../Images/menu-8.jpg';
import Menu9 from '../Images/menu-9.jpg';
import AbouImage from '../Images/about-img.png';
import Pic1 from '../Images/pic-1.png'
import Pic2 from '../Images/pic-2.png'
import Pic3 from '../Images/pic-3.png'
import Pic4 from '../Images/pic-4.png'

const Home = () => {
    return (
        <Container>
            <div>
                <section className="home" id="home">
                    <div>
                        <Slider />
                    </div>
                </section>
                <section className="dishes" id="popular">

                    <h3 className="sub-heading"> our restaurants </h3>
                    <h1 className="heading"> popular restaurants </h1>

                    <div className="box-container">

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish1} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish2} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish3} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish4} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish5} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={Dish6} alt="" />
                            <h3>tasty food</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <span>$15.99</span>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                    </div>

                </section>

                {/* about section starts  */}

                <section className="about" id="about">

                    <h3 className="sub-heading"> about us </h3>
                    <h1 className="heading"> why choose us? </h1>

                    <div className="row">

                        <div className="image">
                            <img src={AbouImage} alt="" />
                        </div>

                        <div className="content">
                            <h3>best food in the country</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                            <div className="icons-container">
                                <div className="icons">
                                    <i className="fas fa-shipping-fast"></i>
                                    <span>free delivery</span>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-dollar-sign"></i>
                                    <span>easy payments</span>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-headset"></i>
                                    <span>24/7 service</span>
                                </div>
                            </div>
                            <a href="#" className="btn">learn more</a>
                        </div>
                    </div>
                </section>

                {/* menu section start */}

                <section className="menu" id="allRestaurants">

                    <h3 className="sub-heading"> our restaurants </h3>
                    <h1 className="heading"> all restaurants </h1>

                    <div className="box-container">

                        <div className="box">
                            <div className="image">
                                <img src={Menu1} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu2} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu3} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu4} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu5} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu6} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu7} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu8} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Menu9} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>delicious food</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                                <a href="#" className="btn">add to cart</a>
                                <span className="price">$12.99</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* review section starts */}

                <section className="review" id="review">

                    <h3 className="sub-heading"> customer's review </h3>
                    <h1 className="heading"> what they say </h1>
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

                        <div className="review-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="slide">
                                        <i className="fas fa-quote-right"></i>
                                        <div className="user">
                                            <img src={Pic1} alt="" />
                                            <div className="user-info">
                                                <h3>john deo</h3>
                                                <div className="stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide slide">
                                        <i className="fas fa-quote-right"></i>
                                        <div className="user">
                                            <img src={Pic2} alt="" />
                                            <div className="user-info">
                                                <h3>john deo</h3>
                                                <div className="stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide slide">
                                        <i className="fas fa-quote-right"></i>
                                        <div className="user">
                                            <img src={Pic3} alt="" />
                                            <div className="user-info">
                                                <h3>john deo</h3>
                                                <div className="stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide slide">
                                        <i className="fas fa-quote-right"></i>
                                        <div className="user">
                                            <img src={Pic4} alt="" />
                                            <div className="user-info">
                                                <h3>john deo</h3>
                                                <div className="stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>
                </section>
            </div>
        </Container>
    )
}

export default Home