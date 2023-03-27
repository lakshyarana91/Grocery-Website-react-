import { Footer } from "./Footer"
import { Nav2 } from "./Nav2"
import './../Ustyle.css'


export const Signup = () => {

    return (
        <>
            <Nav2 />
            <div class="signupContainer">
                <div class="contact-box">
                    <div class="left"></div>
                    <div class="right">
                        <h2>Contact Us</h2>
                        <input type="text" class="field" placeholder="Your Name" required />
                        <input type="email" class="field" placeholder="Your Email" required />
                        <input type="text" class="field" placeholder="Phone" required />
                        <textarea placeholder="Message" class="field"></textarea>
                        <button class="btnn">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}