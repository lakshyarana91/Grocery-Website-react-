import { Nav } from "./Nav"
import {Link} from 'react-router-dom';
import { Nav2 } from "./Nav2";
// import pv from './../PV.mp4'


export const Home = () => {

    return (
        <>
            <Nav />


            <div class="categories">
                <div class="small-container">
                    <h1 class="title">Today's Offers</h1>
                    <div class="row">
                        <div class="col-3">
                            <img src="Home/image1.jpg" />
                            <p>Kwality Walls</p>
                            <h4>Magnum Tub Milk Chocolate Vanilla Ice Cream 440ml</h4>
                            <p class="star">4.5 </p>
                            <p>MRP ₹<del>330</del>&nbsp ₹297</p>
                        </div>
                        <div class="col-3">
                            <img src="Home/image2.jpg" />
                            <p>Kwality Walls</p>
                            <h4>Magnum Tub  Double Mocha Ice Cream 440ml</h4>
                            <p class="star">4.2 </p>
                            <p>MRP ₹<del>470</del>&nbsp ₹423</p>
                        </div>
                        <div class="col-3">
                            <img src="Home/image3.jpg" />
                            <p>Kwality Walls</p>
                            <h4>Magnum Tub White Ice Cream 440ml</h4>
                            <p class="star">4.1 </p>
                            <p>MRP ₹<del>370</del>&nbsp ₹333</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="small-container">
                <h2 class="title_1">Featured Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src="Home/Product 1.jpg" />
                        <p>Healthy Alternatives</p>
                        <h4>Tapioca Flour 40gm</h4>
                        <p class="star">4.0 </p>
                        <p>MRP ₹210</p>
                    </div>
                    <div class="col-4">
                        <img src="Home/Product 2.jpg" />
                        <p>Healthy Alternatives</p>
                        <h4>Raw Chia Seeds 175gm</h4>
                        <p class="star">3.9 </p>
                        <p>MRP ₹240</p>
                    </div>
                    <div class="col-4">
                        <img src="Home/Product 3.jpg" />
                        <p>Healthy Alternatives</p>
                        <h4>Organic Sugar 500gm</h4>
                        <p class="star">4.9 </p>
                        <p>MRP ₹99</p>
                    </div>
                    <div class="col-4">
                        <img src="Home/Product 4.jpg" />
                        <p>Healthy Alternatives</p>
                        <h4>Rolled Oats 500gm</h4>
                        <p class="star">4.2 </p>
                        <p>MRP ₹215</p>
                    </div>
                </div>
            </div>

            <div class="small-container">
                <h2 class="title_1">Latest Products</h2>
                <div class="row">
                    <div class="col-5">
                        <img src="Home/LP-1.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Pomegranate Juice 200ml</h4>
                        <p class="star">4.3 </p>
                        <p>MRP ₹<del>50</del>&nbsp ₹35</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-2.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Guava Juice 200ml</h4>
                        <p class="star">4.5 </p>
                        <p>MRP ₹<del>50</del>&nbsp ₹35</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-3.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Grapefruit Juice 200ml</h4>
                        <p class="star">4.2 </p>
                        <p>MRP ₹<del>60</del>&nbsp ₹40</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-4.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Coconut Water 200ml</h4>
                        <p class="star">4.4 </p>
                        <p>MRP ₹<del>60</del>&nbsp ₹40</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-5.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Protein Milkshake - Banana + Honey 200ml</h4>
                        <p class="star">4.0 </p>
                        <p>MRP ₹90</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-6.jpg" />
                        <p>Raw Pressery</p>
                        <h4>Protein Milkshake - Choco Mint 200ml</h4>
                        <p class="star">3.9 </p>
                        <p>MRP ₹90</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-7.jpg" />
                        <p>Paper Boat</p>
                        <h4>Southern Masala Buttermilk 250ml</h4>
                        <p class="star">3.9 </p>
                        <p>MRP ₹30</p>
                    </div>
                    <div class="col-5">
                        <img src="Home/LP-8.jpg" />
                        <p>Paper Boat</p>
                        <h4>Flavoured Milk - Thandai 180ml</h4>
                        <p class="star">3.8 </p>
                        <p>MRP ₹50</p>
                    </div>
                </div>
            </div>



            <div class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col-6">
                            <img src="Home/logo-aashirvad.png" />
                        </div>
                        <div class="col-6">
                            <img src="Home/logo-coca-cola.png" />
                        </div>
                        <div class="col-6">
                            <img src="Home/logo-amul.png" />
                        </div>
                        <div class="col-6">
                            <img src="Home/logo-raw-pressery.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 