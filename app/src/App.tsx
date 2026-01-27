import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Aerospace from './pages/Aerospace';
import Events from './pages/Events';
import Landscapes from './pages/Landscapes';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/aerospace" element={<Aerospace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/landscapes" element={<Landscapes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
