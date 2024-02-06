import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./plans_section.scss";

const PlansSection = () => {
  return (
    <section className="plans">
      <Wrapper>
        <h3>Choose a plan for your budget</h3>

        <div className="plans__container">
          <div className="plans__card">
            <div className="plans__card-left">
              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Free and without documents</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Bonuses for payment by card</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Valid only selected country</p>
              </div>

              <a href="#" className="button-primary">
                Get a card online
              </a>
            </div>

            <div className="plans__card-right">
              <img src="/src/assets/plan-1.jpg" alt="" />
              <div className="plans__card-title">
                <h6>Standard Card</h6>
                <span>$ 0.00 USD / Month</span>
              </div>
            </div>
          </div>

          <div className="plans__card">
            <div className="plans__card-left">
              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Free and without documents</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Card current to USD</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Bonuses for payment by card</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Valid only selected country</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Unlimited transaction</p>
              </div>

              <a href="#" className="button-primary">
                Get a card online
              </a>
            </div>

            <div className="plans__card-right">
              <img src="/src/assets/plan-2.jpg" alt="" />
              <div className="plans__card-title">
                <h6>Universal Card</h6>
                <span>$ 10.00 USD / Month</span>
              </div>
            </div>
          </div>

          <div className="plans__card">
            <div className="plans__card-left">
              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Free and without documents</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Card current to USD</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Bonuses for payment by card</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Valid only selected country</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Unlimited transaction</p>
              </div>

              <div className="plans__card-feature">
                <img src="/src/assets/plans-tick.svg" alt="" />
                <p>Accepted cash reward</p>
              </div>

              <a href="#" className="button-primary">
                Get a card online
              </a>
            </div>

            <div className="plans__card-right">
              <img src="/src/assets/plan-3.jpg" alt="" />
              <div className="plans__card-title">
                <h6>Premium Card</h6>
                <span>$ 50.00 USD / Month</span>
              </div>
            </div>
          </div>

          <div className="plans__last-card">
            <h3>Custom Plan</h3>
            <a href="#" className="button-outline-2">
              Fill out our form for your custom plan
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PlansSection;
