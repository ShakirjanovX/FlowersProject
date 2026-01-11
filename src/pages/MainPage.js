import React from "react";
// import { useDispatch } from "react-redux";
import FooterComponent from "../components/footer/FooterComponent";
import Header from "../components/header/Header";

import SeasonFlowersComponent from "../components/SeasonFlowersComponent";
const MainPage = () => {
  const section2reasons = [
    {image:'./images/creditcart.png',title:'Easy payment'},
    {image:'./images/car.png',title:'Delivery on time'},
    {image:'./images/photo.png',title:'Real photo'},
    {image:'./images/message.png',title:'Help with the selections'}
  ]
 
  return (
    <div className="main_block">
      <main className="main">
               <Header/>
        <div className="main_container">
          <h1 className="main_h1">House with flowers</h1>
          <p className="main_p">Decorate your life with flowers</p>
          <button className="main_btn">Shop now</button>
        </div>
      </main>
      <section className="section_1">
        <div className="section1_container">
          <div className="section1_content">
            <p className="section1_text">
              The House with flowers welcomes you! We create beautiful decor,
              make beautiful bouquets for the holidays. Our friendly and
              creative team will be happy to work with you! You can learn more
              about our company by clicking on the link
            </p>
            <button className="learn_more_btn">Learn more</button>
          </div>
          <img src="./images/flower10.png" alt="" />
          <div className="section1_border">
          
          </div>
        </div>
      </section>
      <section className="section_2">
      <div className="section2_container">
      <h1 className="section2_h1">Why us?</h1>
     <div className="section2_flex">
     {section2reasons.map((reason,i) => (
        <div key={i} className="section2_images">
          <img src={reason.image} alt="" />
          <p className="section2_title">{reason.title}</p>
        </div>
      ))}
     </div>
      <p className="section2_text">And other reasons</p>
      </div>
      <div className="section2_border"></div>
      </section>
      <section className="section_3">
      <h1 className="section3_title">Popular choice</h1>
      <div className="section3_container">
       <SeasonFlowersComponent/>
      </div>
      </section>
      <FooterComponent/>
    </div>
  );
};

export default MainPage;
