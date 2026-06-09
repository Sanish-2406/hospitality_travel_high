import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Villas from './pages/Villas';
import VillaDetails from './pages/VillaDetails';
import Experiences from './pages/Experiences';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/villas/:id" element={<VillaDetails />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppBtn />
    </Router>
  );
}

export default App;
