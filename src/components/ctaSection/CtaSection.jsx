import React, { useState } from "react";
import ctaPhone from "../../assets/cta-phone.png";
import Wrapper from "../wrapper/Wrapper";
import "./cta_section.scss";
import axios from "axios";
import { toast } from "react-toastify";

const CtaSection = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  let bot = {
    TOKEN: "6644731026:AAHHIpzKhwNkhukFBXubBzYNtYY5fxIKT4o",
    chatID: "638726464",
  };

  const sendForm = (e) => {
    const user = bot.chatID;

    e.preventDefault();

    axios
      .get(
        `https://api.telegram.org/bot${
          bot.TOKEN
        }/sendMessage?chat_id=${user}&text=${
          "Email: " + email
        }`
      )
      .then((res) => {
        toast.success("Sended successfully");
        setEmail('');
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section className="cta">
      <Wrapper className="cta__container">
        <div className="cta__left">
          <img src={ctaPhone} alt="" />
        </div>

        <div className="cta__right">
          <h3>Take control of your finances today</h3>

          <p>
            One-click Apps & Integrations to help you supercharge your teams
            workflow. Attended overcame repeated it is perceived Marianne in.
          </p>

          <form onSubmit={sendForm}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="email"
              name="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={() => setLoading(true)} type="submit" className="button-primary">
              {loading ? "sending..." : "submit"}
            </button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default CtaSection;
