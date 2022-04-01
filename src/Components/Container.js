import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx'

const Container = ({children ,}) => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                { children }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Container