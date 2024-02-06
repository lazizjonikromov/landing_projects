import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./footer.scss";

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
          <img src="/src/assets/footer-playstore.png" alt="" />
          <img src="/src/assets/footer-appstore.png" alt="" />
        </div>

        <div className="footer__logo">
          <img src="/src/assets/footer-logo.svg" alt="" />
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
