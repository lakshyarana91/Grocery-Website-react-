import {Link} from 'react-router-dom'
import React from 'react'


export const Nav2 = () => {

    return (
        <div className="navbar" style={{background:"black"}}>
            <div className="logo">
                <a href="Index.html"><img src="images/logo.png" height="85px" width="180px" /></a>
            </div>
            <nav>
                <ul>
                    {/* <Link  to="/">Home</Link> */}
                    <li  ><Link to="/">Home</Link></li>
                    {/* <li><Link to="/Revolution">Revolution</Link></li> */}
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Advantages">Advantages</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
            <a href="Cart.html"><img src="cart.png" width="30px" height="30px" /></a>
        </div>
    )
}