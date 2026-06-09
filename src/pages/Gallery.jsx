import AnimatedSection from '../components/AnimatedSection';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Resort Pool at Dusk', className: 'tall' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Ocean View Balcony', className: 'wide' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Fine Dining Dish', className: '' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Spa Treatment Room', className: '' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Beach Loungers', className: 'large' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Villa Interior', className: 'wide' },
  { id: 7, src: '/images/gallery-7.jpg', alt: 'Cocktails at Sunset', className: 'tall' },
  { id: 8, src: '/images/gallery-8.jpg', alt: 'Lush Gardens', className: '' },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="page-header text-center">
        <div className="page-header-bg">
          <img src="/images/gallery-8.jpg" alt="Gallery" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative-content">
          <AnimatedSection>
            <h1 className="section-title text-champagne-gold">Visual Journey</h1>
            <div className="title-separator"></div>
            <p className="section-text text-pearl-ivory">
              A glimpse into the extraordinary moments that await you at Aurelia Coast Resort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gallery-grid-section section bg-obsidian">
        <div className="container">
          <div className="masonry-grid">
            {galleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id} 
                delay={index * 0.1} 
                className={`grid-item ${image.className}`}
              >
                <div className="img-zoom-container h-100">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
