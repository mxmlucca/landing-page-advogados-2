import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NewHero } from './components/NewHero';
import { NewAbout } from './components/NewAbout';
import { RecentCases } from './components/RecentCases';
import { NewServices } from './components/NewServices';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { NewFooter } from './components/NewFooter';
import { NewNavbar } from './components/NewNavbar';
import { Work } from './components/Work';
import { ProjectDetail } from './components/ProjectDetail';

// Preloader Component
const Preloader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    className="fixed inset-0 z-[999] bg-gradient-to-br from-neutral-50 to-amber-50/30 flex items-center justify-center"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900">
        STERLING <span className="text-amber-600">&</span> ASSOCIATES
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-64"
      />
    </motion.div>
  </motion.div>
);

// Enhanced ScrollToTop to handle both routes and hash anchors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <NewHero />
    <NewAbout />
    <RecentCases />
    <NewServices />
    <Testimonials />
    <ContactSection />
    <NewFooter />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intro animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-white min-h-screen text-neutral-900 selection:bg-amber-200/50">
          <NewNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;