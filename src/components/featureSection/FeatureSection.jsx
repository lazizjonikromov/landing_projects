import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./feature_section.scss";

const FeatureSection = () => {
  return (
    <section className="features">
      <Wrapper>
        <div className="features__text">
          <h3>Explore our amazing features</h3>
          <p>
            Lose john poor same it case do year we Full how way even the sigh
            Extremely nor furniture fat questions now provision incommode.
          </p>
        </div>

        <div className="features__container">
          <div className="features__feature dark-feature">
            <img src="/src/assets/feature-1.svg" alt="" />
            <h4 className="dark-feature-title">Free Enrollment</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>

          <div className="features__feature white-feature">
            <img src="/src/assets/feature-2.svg" alt="" />
            <h4 className="white-feature-title">Fast and easy registration</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>

          <div className="features__feature dark-feature">
            <img src="/src/assets/feature-3.svg" alt="" />
            <h4 className="dark-feature-title">Crypto Support</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>

          <div className="features__feature white-feature">
            <img src="/src/assets/feature-4.svg" alt="" />
            <h4 className="white-feature-title">No Hidden Fees</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>

          <div className="features__feature dark-feature">
            <img src="/src/assets/feature-5.svg" alt="" />
            <h4 className="dark-feature-title">Automatic card lock/unlock</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>

          <div className="features__feature white-feature">
            <img src="/src/assets/feature-6.svg" alt="" />
            <h4 className="white-feature-title">24/7 Customer Support</h4>
            <p>
              Engaged was the evident pleased husband. Ye goodness felicity does
              disposal dwelling no.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FeatureSection;
