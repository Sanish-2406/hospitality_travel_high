import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="/images/about-hero.jpg" alt="Aurelia Coast Landscape" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="about-hero-content container text-center">
          <AnimatedSection>
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-subtitle">A legacy of hospitality born from a love for the ocean.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="about-content section bg-ivory">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection className="about-text">
              <h2 className="text-obsidian mb-2">The Aurelia Vision</h2>
              <div className="title-separator" style={{ margin: '0 0 2rem 0' }}></div>
              <p>
                Founded on the principle that true luxury is found in harmony with nature, Aurelia Coast Resort was designed to blend seamlessly into its breathtaking coastal surroundings. Every architectural detail, every culinary creation, and every guest interaction is guided by our commitment to excellence and sustainability.
              </p>
              <p>
                We believe in creating spaces where time slows down, allowing our guests to reconnect with themselves, their loved ones, and the profound beauty of the natural world. Our dedicated team anticipates your every need, ensuring a bespoke experience that transcends the ordinary.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="about-image">
              <div className="img-zoom-container h-100">
                <img src="/images/about-vision.jpg" alt="Resort Architecture" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="philosophy-section section bg-stone text-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-obsidian mb-2">Our Philosophy</h2>
            <div className="title-separator"></div>
            <div className="philosophy-grid mt-4">
              <div className="philosophy-card">
                <h3 className="text-obsidian">Unobtrusive Luxury</h3>
                <p>Elegance that whispers, rather than shouts. Service that anticipates, rather than interrupts.</p>
              </div>
              <div className="philosophy-card">
                <h3 className="text-obsidian">Deep Connection</h3>
                <p>Fostering authentic relationships with our guests, our community, and our environment.</p>
              </div>
              <div className="philosophy-card">
                <h3 className="text-obsidian">Timeless Design</h3>
                <p>Spaces crafted from natural materials that age gracefully alongside the coastal landscape.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
