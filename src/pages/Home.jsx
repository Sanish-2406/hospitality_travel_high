import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const heroImages = [
  '/images/hero-bg.jpg',
  '/images/about-hero.jpg',
  '/images/gallery-1.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-slider">
          {heroImages.map((src, index) => (
            <div 
              key={index}
              className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
            >
              <img src={src} alt="Aurelia Coast Resort" />
            </div>
          ))}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <AnimatedSection>
            <h1 className="hero-title">Discover Uncharted Luxury</h1>
            <p className="hero-subtitle">Escape to a world of refined elegance and pristine coastal beauty.</p>
            <Link to="/villas" className="btn btn-gold">Explore Villas</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section section bg-ivory text-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-obsidian">Welcome to Aurelia</h2>
            <div className="title-separator"></div>
            <p className="section-text text-obsidian">
              Nestled on the edge of the pristine coastline, Aurelia Coast Resort offers a sanctuary for those seeking the ultimate escape. Immerse yourself in breathtaking panoramas, exquisite culinary journeys, and unparalleled personalized service.
            </p>
            <Link to="/about" className="btn btn-outline-gold" style={{ marginTop: '2rem' }}>Our Story</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="featured-villas section bg-obsidian">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-title text-ivory">Signature Suites</h2>
              <Link to="/villas" className="view-all-link">View All Suites</Link>
            </div>
          </AnimatedSection>

          <div className="villas-grid">
            <AnimatedSection delay={0.2} className="villa-card">
              <div className="img-zoom-container">
                <img src="/images/villa-ocean.jpg" alt="Oceanfront Villa" loading="lazy" />
              </div>
              <div className="villa-card-content">
                <h3>Oceanfront Grand Villa</h3>
                <p>Private infinity pool with panoramic sea views.</p>
                <Link to="/villas/oceanfront-grand" className="discover-link">Discover</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="villa-card">
              <div className="img-zoom-container">
                <img src="/images/villa-garden.jpg" alt="Garden Retreat" loading="lazy" />
              </div>
              <div className="villa-card-content">
                <h3>Royal Garden Retreat</h3>
                <p>Secluded luxury amidst lush tropical foliage.</p>
                <Link to="/villas/royal-garden" className="discover-link">Discover</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="featured-experiences section bg-stone">
        <div className="container experience-flex">
          <AnimatedSection className="experience-text">
            <h2 className="section-title text-obsidian">Curated Experiences</h2>
            <div className="title-separator"></div>
            <p className="section-text text-obsidian">
              From rejuvenating spa therapies using ancient marine minerals to private dining under the stars, every moment at Aurelia is crafted to create unforgettable memories.
            </p>
            <Link to="/experiences" className="btn btn-outline-light" style={{ marginTop: '2rem', borderColor: 'var(--obsidian)', color: 'var(--obsidian)' }}>Explore More</Link>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="experience-image">
            <div className="img-zoom-container">
              <img src="/images/experience-spa.jpg" alt="Luxury Spa" loading="lazy" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
