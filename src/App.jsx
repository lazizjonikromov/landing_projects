import CompanySection from "./components/companySection/CompanySection"
import CtaSection from "./components/ctaSection/CtaSection"
import FeatureSection from "./components/featureSection/FeatureSection"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import PaymentSection from "./components/paymentSection/PaymentSection"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <FeatureSection />
      <PaymentSection />
      <CtaSection />
    </>
  )
}

export default App
