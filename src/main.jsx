import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import PrintingXerox from './pages/PrintingXerox'
import PrintBinding from './pages/PrintBinding'
import StationeryDesign from './pages/StationeryDesign'
import TypingProjects from './pages/TypingProjects'
import AstrologyBabyNames from './pages/AstrologyBabyNames'
import PanIdServices from './pages/PanIdServices'
import OnlineGovtServices from './pages/OnlineGovtServices'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './index.css'

// Initialize AOS with enhanced settings
AOS.init({
  duration: 1000,
  easing: 'ease-in-out-cubic',
  once: true,
  mirror: false,
  offset: 100,
  delay: 0
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/printing-xerox" element={<PrintingXerox />} />
            <Route path="/print-binding" element={<PrintBinding />} />
            <Route path="/stationery-design" element={<StationeryDesign />} />
            <Route path="/typing-documents" element={<TypingProjects />} />
            <Route path="/astrology-services" element={<AstrologyBabyNames />} />
            <Route path="/pan-id-services" element={<PanIdServices />} />
            <Route path="/online-govt-services" element={<OnlineGovtServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
