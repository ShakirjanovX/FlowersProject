import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const FooterComponent = () => {
    return (
        <footer>
            <div className='footer_container'>
                <ul className='footer_ul_links'>
                    <li className='footer_li_link'>
                        <Link to='about'>About us</Link>
                    </li>
                    <li className='footer_li_link'>
                        <Link to='catalogs'>Catalog</Link>
                    </li>
                    <li className='footer_li_link'>
                        <button type="button" className="footer_btn">Delivery</button>
                    </li>
                    <li className='footer_li_link'>
                        <button type="button" className="footer_btn">Contacts</button>
                    </li>
                </ul>
            <div className='footer_link'>
                <div className='footer_flex footer_location'>
                    <img src="../images/location.svg" alt="" width={15} />
                    <a href='https://www.google.com/mymaps/viewer?mid=1vwMNLM4vqfSXc7m6Wz8pWmLoNH8&hl=en'>Amsterdam</a>
                </div>
                <div className=' footer_flex footer_phone'>
                    <img src="../images/phone.svg" alt="" width={20} />
                  <a href="tel:+998337757701">+7 (495) 699-84-93</a>
                </div>
                <div className='footer_flex footer_images'>
                    <a href="https://www.facebook.com/profile.php?id=100075873653352" >
                    <img  src="../images/facebook.png" alt="" />
                    </a>
                    <a href="https://vk.com/candy_flowers.uzhgorod">
                    <img src="../images/vk.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/uzflower_/">
                    <img src="../images/insta.png" alt="" />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default FooterComponent;