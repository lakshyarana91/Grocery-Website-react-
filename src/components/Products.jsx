import { Nav } from "./Nav"
import { Nav2 } from "./Nav2"


export const Products = () => {


    return (
        <>
            <Nav2 />
            <div class="categories">
                <div class="small-container">
                    <h1 class="title">SHOP BY CATEGORY</h1>
                    <hr />
                    <div class="row">
                        <div class="col-4">
                            <a ><img src="vegetables.png" /></a>
                            <h3>Vegetables</h3>
                        </div>

                        <div class="col-4">
                            <a ><img src="fruits1.png" /></a>
                            <h3>Fruits</h3>
                        </div>
                        <div class="col-4">
                            <a ><img src="Frozen.png" /></a>
                            <h3>Summer Sorbet</h3>
                        </div>
                        <div class="col-4">
                            <a 
                            ><img src="Daily-Essentials.png" /></a>
                            <h3>Daily Essentials</h3>
                        </div>
                    </div>
                </div>
            </div></>
    )
}