import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import SearchForm from './SearchForm.jsx'

const Navbar = () => {
    let menu = document.querySelector('#menu-bars')
    let navbar = document.querySelector('.navbar')

    // menu.onclick = () => {
    //     menu.classList.toggle('fa-times')
    //     navbar.classList.toggle('active')
    // }

    console.log(menu)

    return (
        <div>
            <header>

                <a href="#" className="logo"><i className="fas fa-utensils"></i>food</a>

                <nav className="navbar">
                    <a href="#home" className="active">home</a>
                    <a href="#speciality">speciality</a>
                    <a href="#popular">popular</a>
                    <a href="#gallery">gallery</a>
                    <a href="#review">review</a>
                    <a href="#order">order</a>
                </nav>

                <div className="icons">
                    <i className="fas fa-bars" id="menu-bars"></i>                     
                    <i className="fas fa-search" id="search-icon"></i> 
                    <a href="#" className="fas fa-comment"></a>
                    <a href="#" className="fas fa-heart"></a>                     
                    <a href="#" className="fas fa-shopping-cart" ></a>    
                    <Link to='/signup'><a href="#" className="fas fa-user-circle"></a></Link>
                </div>
            </header>

            <div>
                <SearchForm />
            </div>
        </div>
    )
}

export default Navbar