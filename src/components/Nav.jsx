import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import pv from './../PV.mp4'


export const Nav = () => {

    return (



        <div class="header">
            <div class="container">
                <video class="back-video" autoPlay={"autoplay"} preLoad="auto" loop muted>
                    <source src={pv} type="video/mp4" />
                </video>
                <div class="navbar">
                    <div class="logo">
                        <a href="Index.html"><img src="images/logo.png" height="85px" width="180px" /></a>
                    </div>
                    <nav>
                        <ul><li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/Revolution">Revolution</Link></li> */}
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/Advantages">Advantages</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <a href="Cart.html"><img src="cart.png" width="30px" height="30px" /></a>

                </div>
                <div class="row">
                    <div class="col-2">
                        <h1><span>Eat</span> Healthy! <br /> Stay <span>Healthy!</span></h1>
                        <a href="SignUp.html" class="btn ab">Apply For Free Sample &#8594;</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
