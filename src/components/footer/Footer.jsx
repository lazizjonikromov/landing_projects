import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./footer.scss";
import footPlay from "../../assets/footer-playstore.png";
import footApp from "../../assets/footer-appstore.png";
import footLogo from "../../assets/footer-logo.svg";


const Footer = () => {
  return (
    <section className="footer">
      <Wrapper>
        <div className="footer__text">
          <h3>The feature of strategic finance</h3>
          <p>
            Does he part last in? Merits ye if Mr narrow points. Melancholy
            particularly Devonshire alteration its favorable appearance up.
          </p>
        </div>

        <div className="footer__stores">
          <img src={footPlay} alt="" />
          <img src={footApp} alt="" />
        </div>

        <div className="footer__logo">
          <img src={footLogo} alt="" />
        </div>

        <ul className="footer__links">
          <li>Services</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Footer;
