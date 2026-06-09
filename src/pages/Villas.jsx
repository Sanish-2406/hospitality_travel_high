import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Villas.css';

const villasData = [
  {
    id: 'oceanfront-grand',
    name: 'Oceanfront Grand Villa',
    image: '/images/villa-ocean.jpg',
    desc: 'Our signature villa featuring a private infinity pool seamlessly blending with the horizon.',
    size: '250 sqm',
    guests: 'Up to 4 Guests'
  },
  {
    id: 'royal-garden',
    name: 'Royal Garden Retreat',
    image: '/images/villa-garden.jpg',
    desc: 'Secluded luxury amidst lush tropical foliage, complete with an outdoor stone bath.',
    size: '180 sqm',
    guests: 'Up to 2 Guests'
  },
  {
    id: 'cliffside-suite',
    name: 'Cliffside Panorama Suite',
    image: '/images/villa-cliff.jpg',
    desc: 'Elevated views of the coastline from your private expansive terrace and plunge pool.',
    size: '210 sqm',
    guests: 'Up to 3 Guests'
  }
];

const Villas = () => {
  return (
    <div className="villas-page">
      <section className="page-header text-center">
        <div className="page-header-bg">
          <img src="/images/gallery-2.jpg" alt="Villas & Suites" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative-content">
          <AnimatedSection>
            <h1 className="section-title text-champagne-gold">Villas & Suites</h1>
            <div className="title-separator"></div>
            <p className="section-text text-pearl-ivory">
              Discover unparalleled comfort in our meticulously designed spaces, each offering absolute privacy and breathtaking views.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="villas-list section bg-ivory">
        <div className="container">
          {villasData.map((villa, index) => (
            <AnimatedSection key={villa.id} delay={0.2} className="villa-list-item">
              <div className={`villa-item-image ${index % 2 !== 0 ? 'image-right' : ''}`}>
                <div className="img-zoom-container">
                  <img src={villa.image} alt={villa.name} loading="lazy" />
                </div>
              </div>
              <div className="villa-item-content">
                <h2 className="text-obsidian">{villa.name}</h2>
                <div className="villa-meta">
                  <span>{villa.size}</span>
                  <span className="meta-dot">•</span>
                  <span>{villa.guests}</span>
                </div>
                <p>{villa.desc}</p>
                <div className="villa-actions">
                  <Link to={`/villas/${villa.id}`} className="btn btn-outline-gold">View Details</Link>
                  <Link to="/contact" className="btn btn-gold">Book Now</Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Villas;
