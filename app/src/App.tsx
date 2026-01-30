import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Weddings = lazy(() => import('./pages/Weddings'));
const Aerospace = lazy(() => import('./pages/Aerospace'));
const Events = lazy(() => import('./pages/Events'));
const Landscapes = lazy(() => import('./pages/Landscapes'));
const Portraits = lazy(() => import('./pages/Portraits'));
const Abstract = lazy(() => import('./pages/Abstract'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="w-8 h-8 border-2 border-[#c9a962] border-t-transparent rounded-full animate-spin" />
    <span className="sr-only">Loading...</span>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <SkipLink />
          <Navigation />
          <main id="main-content" tabIndex={-1}>
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/weddings" element={<Weddings />} />
                  <Route path="/aerospace" element={<Aerospace />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/landscapes" element={<Landscapes />} />
                  <Route path="/portraits" element={<Portraits />} />
                  <Route path="/abstract" element={<Abstract />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
