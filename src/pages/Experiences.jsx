import AnimatedSection from '../components/AnimatedSection';
import './Experiences.css';

const experiencesData = [
  {
    id: 'dining',
    title: 'Gastronomic Journeys',
    image: '/images/experience-dining.jpg',
    desc: 'Savor Michelin-starred culinary artistry at our signature restaurant, where local coastal ingredients meet international flair. Enjoy private dining on the beach or a curated wine tasting in our cellar.',
    features: ['Oceanfront Restaurant', 'Private Beach Dining', 'Sommelier Classes']
  },
  {
    id: 'spa',
    title: 'The Aurelia Spa',
    image: '/images/experience-spa.jpg',
    desc: 'Rejuvenate your mind and body with ancient healing traditions combined with modern holistic practices. Our therapists use organic, marine-based products tailored to your unique wellness needs.',
    features: ['Couples Massage', 'Hydrotherapy Circuit', 'Sunrise Yoga']
  },
  {
    id: 'excursions',
    title: 'Coastal Adventures',
    image: '/images/experience-yacht.jpg',
    desc: 'Explore the uncharted beauty of the riviera. Charter our private yacht for a sunset cruise, engage in guided snorkeling tours through vibrant coral reefs, or hike secluded coastal trails.',
    features: ['Private Yacht Charter', 'Guided Snorkeling', 'Coastal Hiking']
  }
];

const Experiences = () => {
  return (
    <div className="experiences-page">
      <section className="page-header text-center">
        <div className="page-header-bg">
          <img src="/images/gallery-7.jpg" alt="Curated Experiences" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative-content">
          <AnimatedSection>
            <h1 className="section-title text-champagne-gold">Curated Experiences</h1>
            <div className="title-separator"></div>
            <p className="section-text text-pearl-ivory">
              Transform your stay into a collection of unforgettable memories with our bespoke offerings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="experiences-list section bg-stone">
        <div className="container">
          {experiencesData.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={0.2} className={`experience-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}>
              <div className="experience-image-col">
                <div className="img-zoom-container">
                  <img src={exp.image} alt={exp.title} loading="lazy" />
                </div>
              </div>
              <div className="experience-content-col">
                <h2 className="text-obsidian">{exp.title}</h2>
                <p className="text-charcoal">{exp.desc}</p>
                <ul className="experience-features">
                  {exp.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
