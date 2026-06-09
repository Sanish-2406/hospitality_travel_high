import { useParams, Link } from 'react-router-dom';
import { Wifi, Coffee, Wind, Tv, Anchor, Map } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './VillaDetails.css';

const villaDatabase = {
  'oceanfront-grand': {
    name: 'Oceanfront Grand Villa',
    heroImage: '/images/villa-ocean.jpg',
    price: '$1,200',
    description: 'Experience the pinnacle of luxury in our Oceanfront Grand Villa. Wake up to the sound of crashing waves and step out onto your private terrace featuring a heated infinity pool that seemingly merges with the ocean. The spacious interior boasts a master suite with a king-sized bed, an opulent marble bathroom with a deep soaking tub, and a fully equipped kitchenette.',
    amenities: ['Private Infinity Pool', 'Ocean View', 'Butler Service', 'Outdoor Rain Shower', 'King Size Bed', 'Premium Minibar']
  },
  'royal-garden': {
    name: 'Royal Garden Retreat',
    heroImage: '/images/villa-garden.jpg',
    price: '$850',
    description: 'A sanctuary of peace nestled within our lush tropical gardens. The Royal Garden Retreat offers absolute privacy, featuring a private walled courtyard with a plunge pool and an outdoor stone bath. The interior is designed with natural materials, creating a calming, earthy ambiance perfect for ultimate relaxation.',
    amenities: ['Private Plunge Pool', 'Outdoor Stone Bath', 'Garden View', 'Espresso Machine', 'King Size Bed', 'In-Villa Spa Space']
  },
  'cliffside-suite': {
    name: 'Cliffside Panorama Suite',
    heroImage: '/images/villa-cliff.jpg',
    price: '$1,050',
    description: 'Perched high above the ocean, the Cliffside Panorama Suite offers dramatic, sweeping views of the coastline. The suite features floor-to-ceiling windows, an expansive private deck with a jacuzzi, and elegant modern furnishings. Perfect for romantic getaways and watching spectacular sunsets.',
    amenities: ['Private Jacuzzi', 'Panoramic Ocean View', 'Telescope', 'Walk-in Wardrobe', 'King Size Bed', 'Smart Home Controls']
  }
};

const VillaDetails = () => {
  const { id } = useParams();
  const villa = villaDatabase[id] || villaDatabase['oceanfront-grand']; // fallback

  return (
    <div className="villa-details-page">
      <div className="vd-hero">
        <img src={villa.heroImage} alt={villa.name} loading="lazy" />
        <div className="vd-hero-overlay"></div>
        <div className="vd-hero-content container">
          <AnimatedSection>
            <h1>{villa.name}</h1>
            <p className="vd-price">From {villa.price} / night</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="vd-content section bg-ivory">
        <div className="container vd-grid">
          <AnimatedSection className="vd-main">
            <h2 className="text-obsidian mb-2">About The Villa</h2>
            <div className="title-separator" style={{ margin: '0 0 2rem 0' }}></div>
            <p className="vd-desc text-charcoal">{villa.description}</p>
            
            <h3 className="text-obsidian mt-4 mb-2">Premium Amenities</h3>
            <ul className="vd-amenities">
              {villa.amenities.map((item, index) => (
                <li key={index}>
                  <div className="amenity-icon"></div>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="vd-sidebar">
            <div className="booking-card bg-obsidian">
              <h3 className="text-champagne-gold">Reserve Your Stay</h3>
              <p className="text-pearl-ivory mb-2">Contact our reservations team to check availability and secure your booking.</p>
              <Link to="/contact" className="btn btn-gold w-100">Enquire Now</Link>
              <div className="vd-features mt-3">
                <div className="feature-item"><Wifi size={18}/> Free High-Speed WiFi</div>
                <div className="feature-item"><Coffee size={18}/> Daily Breakfast Included</div>
                <div className="feature-item"><Wind size={18}/> Climate Control</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default VillaDetails;
