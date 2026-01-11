import React from "react";
import FooterComponent from "../../components/footer/FooterComponent";
import Header from "../../components/header/Header";
import "./AboutUsPage.css";
const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <div className="about_container">
        <div className="history_container">
          <div className="history_content">
            <p>
              A house with flowers is our dream come true. We, Lana and
              Victoria, started to create our company in order to make every
              home more beautiful.
            </p>
            <p>
              We really love flowers, their combination, their influence on the
              atmosphere of the room. Our florists and designers are very
              attentive to the wishes of customers, they always try to create a
              unique bouquet, it is important for them to complement your home
              with a suitable decor. We have been creating beautiful bouquets
              for more than 10 years. Our mission is to make this world a better
              place.
            </p>
          </div>
          <p className="down_text">
            Our clients are real aesthetes. We really appreciate it. And that's
            why we solve the problem of remoteness from our store: we deliver
            flowers anywhere in the world! We are inspired by your ideas that we
            embody!
            <br />
            We are waiting for your order!
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AboutUsPage;
<h1>About us</h1>;
