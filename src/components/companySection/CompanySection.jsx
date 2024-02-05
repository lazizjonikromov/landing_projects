import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./company_section.scss";

const CompanySection = () => {
  return (
    <section className="company">
      <Wrapper>
        <h4>Trusted by over 30,000 companies</h4>

        <div className="company__companies">
          <img src="src/assets/company-1.svg" alt="" />
          <img src="src/assets/company-2.svg" alt="" />
          <img src="src/assets/company-3.svg" alt="" />
          <img src="src/assets/company-4.svg" alt="" />
          <img src="src/assets/company-5.svg" alt="" />
        </div>

        <div className="company__container">
          <div className="company__left">
            <img
              src="src/assets/companies-phone.png"
              alt=""
              className="img-1"
            />

            <div className="img-2">
              <img src="src/assets/appstore.svg" alt="" />
            </div>

            <div className="img-3">
              <img src="src/assets/playstore.svg" alt="" />
            </div>
          </div>

          <div className="company__right">
            <h3>Sascard work process</h3>
            <p>
              We so entreaties cultivated astonished is. Offered chiefly farther
              of my no colonel shyness. Such on help ye some door if in.
            </p>

            <div className="company__points-container">
              <div className="company__point">
                <div className="company__point-icon">
                  <div>1</div>
                </div>
                <div className="company__point-text">
                  Download & Register App
                </div>
              </div>

              <div className="company__point">
                <div className="company__point-icon">
                  <div>2</div>
                </div>
                <div className="company__point-text">
                  Personal information & form submit
                </div>
              </div>

              <div className="company__point">
                <div className="company__point-icon">
                  <div>3</div>
                </div>
                <div className="company__point-text">
                  Approved & get a digital card
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* <img src="src/assets/companies-bg.png" alt="" className="company__bg" /> */}
    </section>
  );
};

export default CompanySection;
