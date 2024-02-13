import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./company_section.scss";
import company1 from '../../assets/company-1.svg';
import company2 from '../../assets/company-2.svg';
import company3 from '../../assets/company-3.svg';
import company4 from '../../assets/company-4.svg';
import company5 from '../../assets/company-5.svg';
import companyPhone from '../../assets/companies-phone.png';
import appstore from '../../assets/appstore.svg';
import playstore from '../../assets/playstore.svg';

const CompanySection = () => {
  return (
    <section className="company">
      <Wrapper>
        <h4>Trusted by over 30,000 companies</h4>

        <div className="company__companies">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
        </div>

        <div className="company__container">
          <div className="company__left">
            <img
              src={companyPhone}
              alt=""
              className="img-1"
            />

            <div className="img-2">
              <img src={appstore} alt="" />
            </div>

            <div className="img-3">
              <img src={playstore} alt="" />
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

      {/* <img src="/companies-bg.png" alt="" className="company__bg" /> */}
    </section>
  );
};

export default CompanySection;
