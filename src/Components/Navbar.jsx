import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import SearchForm from './SearchForm.jsx'

const Navbar = () => {
    // let menu = document.querySelector('#menu-bars')
    // let navbar = document.querySelector('.navbar')

    // menu.onclick = () => {
    //     menu.classList.toggle('fa-times')
    //     navbar.classList.toggle('active')
    // }

    // console.log(menu)

    return (
        <div>
            <header>

                <Link to={'/'}><a href="#" className="logo"><i className="fas fa-utensils"></i>food</a></Link>

                <nav className="navbar">
                    <a href="#" className="active">home</a>
                    <a href="#popular">Popular</a>
                    <a href="#allRestaurants">All Restaurants</a>
                    <a href="#about">About</a>
                    <a href="#review">Review</a>
                    <a href="#allRestaurants">Order</a>
                </nav>

                <div className="icons">
                    <i className="fas fa-bars" id="menu-bars"></i>                     
                    <a href="#" className="fas fa-comment"></a>
                    <a href="#" className="fas fa-heart"></a>                     
                    <a href="#" className="fas fa-shopping-cart" ></a>    
                    <Link to='/signup'><a href="#" className="fas fa-user-circle"></a></Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar