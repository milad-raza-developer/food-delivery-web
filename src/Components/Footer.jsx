import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>locations</h3>
                    <a href="#">Pakistan</a>
                    <a href="#">japan</a>
                    <a href="#">russia</a>
                    <a href="#">USA</a>
                    <a href="#">france</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#popular">popular</a>
                    <a href="#allRestaurants">all restaurants</a>
                    <a href="#about">about</a>
                    <a href="#review">reivew</a>
                    <a href="#">order</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#">+92-222-195588</a>
                    <a href="#">+92-162-257121</a>
                    <a href="#">miladrmemon@gmail.com</a>
                    <a href="#">miladrazadeveloper@gmail.com</a>
                    <a href="#">karachi, pakistan - 570010</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </div>

            </div>

            <div className="credit"> copyright @ 2022 by <span>MR. SOLUTIONS</span> </div>

        </section>
    )
}

export default Footer