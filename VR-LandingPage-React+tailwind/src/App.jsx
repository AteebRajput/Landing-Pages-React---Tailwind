import Feature from "./components/Feature"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import WorkflowSection from "./components/workflowSection"

function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-3">
        <HeroSection/>
        <Feature />
        <WorkflowSection />
        <Pricing />
        <Testimonials />
        <Footer />
        
    </div>
    </>
  )
}
export default App
