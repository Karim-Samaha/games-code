const Footer = () => {
   
    return <footer>
        <div className="sectionOne">
            <span>Payment Methods:</span>
            <img src="/assets/visa.png" alt="Visa" />
            <img src="/assets/master.png" alt="Master Card" />
        </div>
        <div className="sectionTwo">
            <div>
                <h2>GamesStation</h2>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <h2>Our Products</h2>
                <ul>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Xbox Products</a></li>
                    <li><a href="#">Playstation Products</a></li>
                    <li><a href="#">Steam Codes</a></li>
                </ul>
            </div>
            <div>
                <h2>Help</h2>
                <ul>
                    <li><a href="#">Support Help</a></li>
                    <li><a href="#">Stay Safe</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                </ul>
            </div>
            <div>
                <h2>Business</h2>
                <ul>
                    <li><a href="#">Business Center</a></li>
                    <li><a href="#">Selling on Our Website</a></li>
                    <li><a href="#">Marketing Partnership</a></li>
                </ul>
            </div>
        </div>
        <div className="sectionThree">
            <span>Follow Us:</span>
            <img src="/assets/facebook.webp" alt="Facebook" />
            <img src="/assets/twiiter.webp" alt="Twitter" />
            <img src="/assets/youtube.webp" alt="Youtube" />
            <img src="/assets/insta.webp" alt="Insta" />
            <img src="/assets/twitch.webp" alt="Twitch" />
        </div>
        <div className="sectionFour">
            Use of this Web site constitutes acceptance
            of the Terms and Conditions and Privacy policy.
            All copyrights, trade marks, service marks belong
            to the corresponding owners.
        </div>
    </footer>
}
export default Footer;