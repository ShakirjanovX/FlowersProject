import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeIsShowAction } from "../../store/todoReducer";
import BasketComponent from "../basket/BasketComponent";
import LoginForm from "../LoginForm/LoginForm";
import './Header.css'
const Header = () => {
  const dispatch = useDispatch()
  const {isShow} = useSelector(state => state.todoReducer)
  const { basketModal } = useSelector((state) => state.basketReducer);

  function login(){
   dispatch(changeIsShowAction(true))
   
  }
  function opnenModal(){
   dispatch({type:"BASKET",payload: true})
  }
  return (
    <header className="header_component">
      <nav className="nav_header">
         {JSON.parse(localStorage.getItem('test')) ?  <>
            <ul className="header_ul">
              <li className="header_li">
                <Link to='/'>Main</Link>
              </li>
              <li className="header_li">
                <Link to="/catalogs">Catalog</Link>
              </li>
              <li className="header_li">
                <a href="/about">About us</a>
              </li>
              <li className="header_li">
                <button type="button" className="header_btn">Contacts</button>
              </li>
            </ul>
            <div className="header_images">
            <a href="tel:+998337757701">
            <img src="./images/phone.svg" alt="" className="header_image" />
            </a>
             <a href="https://www.google.com/mymaps/viewer?mid=1vwMNLM4vqfSXc7m6Wz8pWmLoNH8&hl=en">
             <img
                src="./images/location.svg"
                alt=""
                className="header_image"
              />
             </a>
             <button className="basket_btn" onClick={() => opnenModal()}>
             <img src="./images/cart.svg" alt="" className="header_image"  />
             </button>
            </div> 
           </>: <div></div>}
            <div className="header_login_block">

              <Link to="/profil">
                <img
                  src="./images/singlepeople.svg"
                  alt=""
                  className="header_image_login"
                />
              </Link>
              {JSON.parse(localStorage.getItem('test')) ? <Link to="/profil" className="header_login_text">{JSON.parse(localStorage.getItem('user')).name}</Link> : <p onClick={login}  className="header_login_text">Login in</p>}
              
            </div>
            {isShow ? (<LoginForm/>) : ''}
      </nav>
      {basketModal ?   <BasketComponent/> : <div></div>}
    
    </header>
  );
};
export default Header;
