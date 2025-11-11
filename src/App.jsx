import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import ServicesSection from './components/ServicesSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import SEO from './components/SEO'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsConditionsPage from './components/TermsConditionsPage'
import CookiePolicyPage from './components/CookiePolicyPage'
import RefundPolicyPage from './components/RefundPolicyPage'
import ContactPage from './components/ContactPage'
import BlogPage from './components/BlogPage'
import ServicesPage from './components/ServicesPage'
import PlatformsPage from './components/PlatformsPage'
import SolutionsPage from './components/SolutionsPage'
import SitemapPage from './components/SitemapPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Routes>
          <Route path="/" element={<><HeroSection /><SectionTwo /> <ServicesSection /><SectionThree /><NewsletterSection /><Footer /></>} />
          <Route path="/home" element={<><HeroSection /><SectionTwo /> <ServicesSection /><SectionThree /><NewsletterSection /><Footer /></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
