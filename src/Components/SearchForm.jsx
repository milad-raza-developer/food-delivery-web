import React from "react";
import './searchForm.css';

const SearchForm = () => {
    return (
        <div>
            <form action="" id="search-form">
                <input type="search" placeholder="search here..." name="" id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                    <i className="fas fa-times" id="close"></i>
            </form>
        </div>
    )
}


export default SearchForm