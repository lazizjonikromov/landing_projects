import { ToastContainer } from "react-toastify"
import BlogSection from "./components/blogSection/BlogSection"
import CompanySection from "./components/companySection/CompanySection"
import CtaSection from "./components/ctaSection/CtaSection"
import FeatureSection from "./components/featureSection/FeatureSection"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import PaymentSection from "./components/paymentSection/PaymentSection"
import PlansSection from "./components/plansSection.jsx/PlansSection"

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Hero />
      <CompanySection />
      <FeatureSection />
      <PaymentSection />
      <CtaSection />
      <PlansSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default App
