import React, { useState, useEffect, useRef } from 'react';
// Using a publicly available GIF for the bird cursor
import bird from './Assets/flyingbird.gif';

// --- BIRD CURSOR COMPONENT ---
// This component renders the bird that follows the mouse
const CursorBird = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <img
      src={bird}
      alt="Flying bird cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30vw',
        height: 'auto',
        transform: `translate3d(calc(${position.x}px - 15vw), calc(${position.y}px - 15vw), 0)`,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
        opacity: isVisible ? 1 : 0,
        filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))'
      }}
    />
  );
};


// --- SVG ICONS ---
const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .732.05c1.963-1.425 4.236-2.28 6.653-2.28s4.69 .855 6.653 2.28c.28.203.636.17.865-.05zm-7.383 2.17a.485.485 0 0 0-.047-.736A8.444 8.444 0 0 0 8 5.5c-1.8 0-3.43.525-4.74 1.449a.485.485 0 0 0-.048.736.518.518 0 0 0 .732.05c1.23-1.045 2.8-1.635 4.456-1.635s3.226.59 4.456 1.635c.28.203.636.17.865-.05zm-3.682 2.132A4.444 4.444 0 0 1 8 8.5c.78 0 1.5.212 2.132.559a.485.485 0 0 0 .638-.05.518.518 0 0 0 .05-.732A5.444 5.444 0 0 0 8 7.5a5.444 5.444 0 0 0-3.82 1.277.518.518 0 0 0 .5.732.485.485 0 0 0 .638-.05zM8 10.5a2.5 2.5 0 0 1 2.5 2.5.5.5 0 0 0 1 0 3.5 3.5 0 0 0-3.5-3.5C6.015 9.5 4.5 10.985 4.5 13a.5.5 0 0 0 1 0 2.5 2.5 0 0 1 2.5-2.5z"/>
  </svg>
);
const SpaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5Z"/><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v1.236a.5.5 0 0 0 1 0V4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-1Zm11 0h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v1.236a.5.5 0 0 0 1 0V4.5A1.5 1.5 0 0 0 13.5 3Z"/><path d="M11.5 15a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7Z"/><path d="M3.806 4.34A5.49 5.49 0 0 1 8 2.5c2.2 0 4.14.922 5.01 2.332a.5.5 0 0 0 .854-.522A6.49 6.49 0 0 0 8 1.5a6.49 6.49 0 0 0-5.845 3.15.5.5 0 0 0 .854.522ZM2.01 5.168A5.49 5.49 0 0 1 8 4.5c.57 0 1.125.084 1.658.243a.5.5 0 1 0 .342-.962A6.49 6.49 0 0 0 8 3.5a6.49 6.49 0 0 0-6.854 3.15.5.5 0 0 0 .854.522A5.488 5.488 0 0 1 2.01 5.168Z"/><path d="M2 13.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5Z"/><path d="M3 11.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5Zm-2 2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1H1.5a.5.5 0 0 0-.5.5Z"/></svg>
);
const PoolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8.537 3.654a.5.5 0 0 0-.537.446l-1.5 6a.5.5 0 0 0 .537.554l6-1.5a.5.5 0 0 0 .446-.537l-1.5-6a.5.5 0 0 0-.554-.446l-2.92 1.168L8.537 3.654Zm-.93 1.19a.5.5 0 0 1 .537-.446l.18.072 1.353 3.383-3.383-1.353-.072-.18a.5.5 0 0 1 .446-.537Z"/><path d="M13.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"/><path d="M2.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"/><path d="M1 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"/><path d="M12.5 2.5a.5.5 0 0 1 .5.5h2a.5.5 0 0 1 0-1h-2a.5.5 0 0 1-.5.5Z"/><path d="M12.5 13.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5Z"/><path d="M3.5 13.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5Z"/><path d="M15 12.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5Z"/><path d="M1 12.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5Z"/><path d="M6.354 8.646a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L9 7.207l-1.646 1.647a.5.5 0 0 1-.708 0Z"/></svg>
);
const DiningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v1.034a.5.5 0 0 1-.375.482l-2.32 1.16A1.5 1.5 0 0 0 7.5 5.348V15.5a.5.5 0 0 1-1 0V5.348a1.5 1.5 0 0 0-.795-1.332L3.375 2.982a.5.5 0 0 1-.375-.482V1.5Z"/><path d="m14.5 0-.5 16-2-1-2 1-.5-16h5Z"/></svg>
);

// --- HEADER COMPONENT ---
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold text-success" href="#home">
        <img src="https://placehold.co/30x30/28a745/ffffff?text=H" alt="logo" className="me-2 rounded-circle"/>
        Hummingbird Hotel
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#rooms">Rooms</a></li>
          <li className="nav-item"><a className="nav-link" href="#philosophy">Philosophy</a></li>
          <li className="nav-item"><a className="nav-link" href="#experiences">Experiences</a></li>
          <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
          <li className="nav-item"><a className="nav-link" href="#sustainability">Sustainability</a></li>
          <li className="nav-item"><a className="nav-link" href="#map">Our Grounds</a></li>
          <li className="nav-item"><a className="nav-link" href="#amenities">Amenities</a></li>
          <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

// --- HERO SECTION ---
const Hero = () => (
  <section id="home" className="d-flex align-items-center justify-content-center text-center text-white vh-100 hero-section">
    <div className="hero-overlay"></div>
    <div className="container position-relative">
      <h1 data-aos="fade-up" className="display-3 fw-bold">Find Your Tranquility</h1>
      <p data-aos="fade-up" data-aos-delay="200" className="lead my-4">Nestled in the heart of nature, the Hummingbird Hotel is your perfect escape.</p>
      <a href="#rooms" data-aos="fade-up" data-aos-delay="400" className="btn btn-success btn-lg">Explore Our Rooms</a>
    </div>
  </section>
);

// --- ABOUT SECTION ---
const About = () => (
  <section id="about" className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
          <img src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Hotel garden"/>
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <h2 className="fw-bold mb-3">Welcome to Paradise</h2>
          <p className="text-muted">The Hummingbird Hotel Stay is more than just a place to sleep. It’s an experience. Surrounded by lush greenery and the soothing sounds of nature, we offer a serene retreat from the hustle and bustle of city life. Our commitment is to provide unparalleled comfort and a deep connection with the natural world.</p>
          <p className="text-muted">From our eco-friendly practices to our locally sourced cuisine, every detail is crafted to ensure a stay that is both luxurious and sustainable.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- ROOMS SECTION ---
const RoomCard = ({ img, title, text, delay }) => (
  <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={delay}>
    <div className="card h-100 shadow-sm border-0 overflow-hidden">
      <img src={img} className="card-img-top" alt={title} style={{transition: 'transform 0.3s ease'}} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-success fw-bold">{title}</h5>
        <p className="card-text text-muted small">{text}</p>
        <a href="#" className="btn btn-outline-success mt-auto align-self-start">Book Now</a>
      </div>
    </div>
  </div>
);

const Rooms = () => (
  <section id="rooms" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Our Accommodations</h2>
      <div className="row">
        <RoomCard img="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60" title="Canopy Suite" text="Wake up to the rustling leaves in our spacious suite with a private balcony overlooking the forest." delay="0" />
        <RoomCard img="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60" title="Garden View Room" text="Enjoy beautiful views of our curated gardens. Perfect for nature lovers and morning birds." delay="200" />
        <RoomCard img="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=800&auto=format&fit=crop&q=60" title="Creek Cottage" text="A cozy, private cottage by the gentle creek. Ideal for a romantic and secluded getaway." delay="400" />
        <RoomCard img="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60" title="Forest Bungalow" text="A rustic yet luxurious bungalow deep within the trees, offering ultimate privacy and immersion in nature." delay="600" />
      </div>
    </div>
  </section>
);

// --- NEW PHILOSOPHY SECTION ---
const Philosophy = () => (
    <section id="philosophy" className="py-5">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-duration="1000">
                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Person meditating in nature"/>
            </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <h2 className="fw-bold mb-3">Rooted in Nature</h2>
            <p className="text-muted">Our philosophy is simple: harmony. We believe in creating a space where luxury and nature coexist peacefully. We practice sustainable tourism, protect our local ecosystem, and invite our guests to reconnect with the earth. This is a place for quiet reflection, rejuvenation, and appreciating the simple beauties of the world around us.</p>
          </div>
        </div>
      </div>
    </section>
);

// --- NEW EXPERIENCES SECTION ---
const ExperienceCard = ({ icon, title, text }) => (
    <div className="experience-card card h-100 shadow-sm border-0 text-center p-4 m-2">
        <div className="display-4 text-success mb-3">{icon}</div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted small">{text}</p>
    </div>
);

const Experiences = () => (
    <section id="experiences" className="py-5 bg-light">
        <div className="container">
            <h2 className="text-center fw-bold mb-3" data-aos="zoom-in">Signature Experiences</h2>
            <p className="text-center text-muted mb-5" data-aos="fade-up">Immerse yourself in activities that heal the soul and excite the spirit.</p>
        </div>
        <div className="horizontal-scroll-container">
            <div className="horizontal-scroll d-flex">
                <ExperienceCard icon="🌳" title="Guided Forest Hikes" text="Explore hidden trails and waterfalls with our expert local guides."/>
                <ExperienceCard icon="🧘" title="Yoga & Meditation" text="Join daily sessions in our open-air shala overlooking the valley."/>
                <ExperienceCard icon="🐦" title="Bird Watching Tours" text="Discover the diverse avian life that calls our pristine forest home."/>
                <ExperienceCard icon="🍳" title="Local Cuisine Class" text="Learn the secrets of regional cooking using fresh, organic ingredients."/>
                <ExperienceCard icon="✨" title="Stargazing Nights" text="Witness the magic of the cosmos with our powerful telescope and guide."/>
                <ExperienceCard icon="🎨" title="Nature Art Workshop" text="Unleash your creativity using natural materials in our guided art sessions."/>
            </div>
        </div>
    </section>
);

// --- NEW GALLERY SECTION ---
const Gallery = () => (
    <section id="gallery" className="py-5">
        <div className="container">
            <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Moments in Nature</h2>
            <div className="row g-4">
                <div className="col-md-4" data-aos="zoom-in-up"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Forest path"/></div>
                <div className="col-md-4" data-aos="zoom-in-up" data-aos-delay="200"><img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="River in forest"/></div>
                <div className="col-md-4" data-aos="zoom-in-up" data-aos-delay="400"><img src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Waterfall"/></div>
                <div className="col-md-6" data-aos="fade-right" data-aos-delay="100"><img src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Abstract nature colors"/></div>
                <div className="col-md-6" data-aos="fade-left" data-aos-delay="100"><img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=60" className="img-fluid rounded shadow" alt="Green leaves"/></div>
            </div>
        </div>
    </section>
);

// --- NEW SUSTAINABILITY SECTION ---
const Sustainability = () => (
    <section id="sustainability" className="py-5 bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="fw-bold mb-3">Our Green Promise</h2>
                    <p className="text-muted mb-4">We are deeply committed to preserving the beauty that surrounds us. Our operations are designed to be as low-impact as possible, ensuring that future generations can enjoy this natural paradise.</p>
                    <div className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="fs-3 text-success me-3">☀️</div>
                        <div>
                            <h5 className="fw-bold">Solar Powered</h5>
                            <p className="text-muted small">Over 80% of our energy needs are met by our on-site solar farm.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="200">
                         <div className="fs-3 text-success me-3">💧</div>
                        <div>
                            <h5 className="fw-bold">Water Conservation</h5>
                            <p className="text-muted small">We harvest rainwater and use advanced filtration systems to minimize our water footprint.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
                         <div className="fs-3 text-success me-3">♻️</div>
                        <div>
                            <h5 className="fw-bold">Zero-Waste Initiative</h5>
                            <p className="text-muted small">We compost all organic waste and are committed to eliminating single-use plastics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="https://plus.unsplash.com/premium_photo-1678743133491-dc8b8713daa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvbGFyJTIwcGFuZWxzfGVufDB8fDB8fHww" className="img-fluid rounded shadow" alt="Solar panels in a green field"/>
                </div>
            </div>
        </div>
    </section>
);


// --- NEW INTERACTIVE MAP SECTION ---
const InteractiveMap = () => (
    <section id="map" className="py-5">
        <div className="container">
            <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Explore Our Grounds</h2>
            <div className="map-container" data-aos="fade-up">
                <svg viewBox="0 0 800 500" className="img-fluid rounded shadow border">
                    {/* Background */}
                    <rect width="800" height="500" fill="#f0f7f2" />
                    
                    {/* Creek */}
                    <path d="M 0,150 Q 100,120 200,160 T 400,150 T 600,160 T 800,140 L 800,180 Q 700,220 600,200 T 400,190 T 200,200 T 0,190 Z" fill="#aadaff" />
                    <text x="350" y="180" fontFamily="Poppins" fontSize="14" fill="#005a9e">Whispering Creek</text>

                    {/* Main Lodge */}
                    <g className="map-location">
                        <rect x="350" y="250" width="100" height="60" fill="#28a745" rx="5"/>
                        <circle cx="400" cy="280" r="25" fill="white" />
                        <text x="400" y="285" textAnchor="middle" fill="#28a745" fontSize="24">🏠</text>
                        <text x="400" y="330" textAnchor="middle" fontFamily="Poppins" fontSize="14" fill="#333">Main Lodge</text>
                    </g>
                    
                    {/* Creek Cottages */}
                     <g className="map-location">
                        <circle cx="550" cy="190" r="20" fill="#6c757d"/>
                        <text x="550" y="196" textAnchor="middle" fill="white">🏡</text>
                        <text x="550" y="235" textAnchor="middle" fontFamily="Poppins" fontSize="12" fill="#333">Creek Cottages</text>
                    </g>
                    
                    {/* Canopy Suites */}
                    <g className="map-location">
                        <circle cx="200" cy="350" r="20" fill="#6c757d"/>
                        <text x="200" y="356" textAnchor="middle" fill="white">🌳</text>
                        <text x="200" y="395" textAnchor="middle" fontFamily="Poppins" fontSize="12" fill="#333">Canopy Suites</text>
                    </g>

                    {/* Hiking Trail */}
                    <path d="M 50,450 Q 150,400 250,440 T 450,400 T 650,460" stroke="#8B4513" strokeWidth="3" strokeDasharray="5,5" fill="none"/>
                    <text x="350" y="460" fontFamily="Poppins" fontSize="12" fill="#8B4513">Sunrise Trail</text>

                    {/* Yoga Shala */}
                    <g className="map-location">
                        <circle cx="680" cy="300" r="20" fill="#17a2b8"/>
                        <text x="680" y="306" textAnchor="middle" fill="white">🧘</text>
                        <text x="680" y="345" textAnchor="middle" fontFamily="Poppins" fontSize="12" fill="#333">Yoga Shala</text>
                    </g>
                </svg>
            </div>
        </div>
    </section>
);


// --- AMENITIES SECTION ---
const Amenity = ({ icon, title, delay }) => (
    <div className="col-lg-2 col-md-4 col-6 text-center mb-4" data-aos="fade-up" data-aos-delay={delay}>
        <div className="p-4 bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm mb-2 text-success" style={{width: '90px', height: '90px'}}>
            {icon}
        </div>
        <h6 className="fw-normal mt-2">{title}</h6>
    </div>
);

const Amenities = () => (
    <section id="amenities" className="py-5">
        <div className="container">
            <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Guest Amenities</h2>
            <div className="row justify-content-center">
                <Amenity icon={<WifiIcon />} title="Free High-Speed WiFi" delay="0"/>
                <Amenity icon={<SpaIcon />} title="Nature Spa" delay="100"/>
                <Amenity icon={<PoolIcon />} title="Infinity Pool" delay="200"/>
                <Amenity icon={<DiningIcon />} title="Fine Dining" delay="300"/>
                <Amenity icon={<div className="fs-3">🚲</div>} title="Bike Rentals" delay="400"/>
                <Amenity icon={<div className="fs-3">📚</div>} title="Library Lounge" delay="500"/>
            </div>
        </div>
    </section>
);


// --- TESTIMONIALS SECTION ---
const TestimonialCard = ({ text, author, delay }) => (
    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={delay}>
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
                <p className="card-text fst-italic text-muted">"{text}"</p>
            </div>
            <div className="card-footer bg-transparent border-0">
                <p className="fw-bold text-success mb-0">- {author}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
    <section id="testimonials" className="py-5 bg-light">
        <div className="container">
            <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">What Our Guests Say</h2>
            <div className="row">
                <TestimonialCard text="An unforgettable experience. The most peaceful place I have ever stayed. I felt completely rejuvenated." author="Alex Johnson" delay="0"/>
                <TestimonialCard text="The attention to detail is incredible. From the locally sourced food to the stunning architecture, everything was perfect." author="Maria Garcia" delay="200"/>
                <TestimonialCard text="Waking up to the sound of birds instead of traffic was magical. We will definitely be coming back next year!" author="Sam Chen" delay="400"/>
            </div>
        </div>
    </section>
);


// --- NEW FAQ SECTION ---
const FaqItem = ({ q, a, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <h2 className="accordion-header">
                <button className={`accordion-button ${isOpen ? '' : 'collapsed'}`} type="button" onClick={() => setIsOpen(!isOpen)}>
                    {q}
                </button>
            </h2>
            {isOpen && (
                <div className="accordion-collapse show">
                    <div className="accordion-body text-muted">{a}</div>
                </div>
            )}
        </div>
    );
};

const Faq = () => {
    const faqData = [
        { q: "What are the check-in and check-out times?", a: "Check-in is from 3:00 PM onwards, and check-out is until 11:00 AM. Late check-out may be available upon request for an additional fee." },
        { q: "Are pets allowed at the hotel?", a: "Unfortunately, to protect the local wildlife and ensure the comfort of all our guests, we do not allow pets." },
        { q: "Do you offer airport transportation?", a: "Yes, we can arrange private airport transfers for an additional cost. Please contact our concierge at least 48 hours before your arrival to book this service." },
        { q: "Is the hotel wheelchair accessible?", a: "Our main lodge, restaurant, and several Garden View rooms are fully wheelchair accessible. Please let us know of any special requirements when booking." },
        { q: "What is your cancellation policy?", a: "We offer free cancellation up to 7 days before the check-in date. For cancellations made within 7 days, a fee equivalent to the first night's stay will be charged." }
    ];

    return (
        <section id="faq" className="py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5" data-aos="zoom-in">Frequently Asked Questions</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="accordion">
                            {faqData.map((item, index) => (
                                <FaqItem key={index} q={item.q} a={item.a} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- FOOTER COMPONENT ---
const Footer = () => (
  <footer id="contact" className="py-5 bg-dark text-white">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up">
                <h5 className="text-success mb-3">Hummingbird Hotel</h5>
                <p className="text-muted small">A sanctuary where luxury meets wilderness. Find your peace, find your center, find yourself.</p>
                <p className="text-muted small mb-0">123 Nature Lane, Serenity Valley</p>
            </div>
             <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <h5 className="text-success mb-3">Contact Us</h5>
                <form>
                    <div className="mb-2">
                        <input type="email" className="form-control form-control-sm" placeholder="Your Email" />
                    </div>
                    <div className="mb-2">
                        <textarea className="form-control form-control-sm" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Send Message</button>
                </form>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <h5 className="text-success mb-3">Newsletter</h5>
                 <p className="text-muted small">Stay updated with our latest offers and events.</p>
                <div className="input-group">
                    <input type="email" className="form-control form-control-sm" placeholder="Enter your email"/>
                    <button className="btn btn-sm btn-outline-success">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="text-center text-muted border-top border-secondary mt-4 pt-4">
            <p className="small mb-0">&copy; 2025 Hummingbird Hotel Stay. All Rights Reserved.</p>
        </div>
    </div>
  </footer>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  const horizontalScrollRef = useRef(null);
  
  useEffect(() => {
    // --- LOAD AOS ---
    const aosScript = document.createElement('script');
    aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    aosScript.onload = () => {
      if (typeof window.AOS !== 'undefined') {
        window.AOS.init({ duration: 800, once: true, offset: 50 });
      }
    };
    document.body.appendChild(aosScript);

    const aosStyles = document.createElement('link');
    aosStyles.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    aosStyles.rel = "stylesheet";
    document.head.appendChild(aosStyles);

    // --- LOAD GSAP & SCROLLTRIGGER ---
    const gsapScript = document.createElement('script');
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js";
    document.body.appendChild(gsapScript);

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js";
    scrollTriggerScript.onload = () => {
      if (typeof window.gsap !== 'undefined') {
        window.gsap.registerPlugin(window.ScrollTrigger);

        // GSAP Parallax animation for Hero section
        window.gsap.to(".hero-section", {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // GSAP Horizontal scroll for Experiences section
        const scrollContainer = horizontalScrollRef.current;
        if (scrollContainer) {
            const sections = window.gsap.utils.toArray(".experience-card");
            window.gsap.to(sections, {
                xPercent: -100 * (sections.length - 3), // Adjust based on number of visible cards
                ease: "none",
                scrollTrigger: {
                    trigger: ".horizontal-scroll-container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + scrollContainer.offsetWidth
                }
            });
        }
      }
    }
    document.body.appendChild(scrollTriggerScript);

  }, []);

  return (
    <>
      <style>{`
        body {
          padding-top: 56px;
          cursor: none;
          font-family: 'Poppins', sans-serif;
          background-color: #fdfdfd;
        }
        .hero-section {
          background: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=60') no-repeat center center;
          background-size: cover;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        section {
          scroll-margin-top: 56px;
          overflow: hidden; /* Prevent AOS overflow issues */
        }
        .card-img-top {
            height: 200px;
            object-fit: cover;
        }
        #gallery .img-fluid {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        #gallery .img-fluid:hover {
            transform: scale(1.03);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .horizontal-scroll-container {
            width: 100%;
            overflow: hidden;
        }
        .horizontal-scroll {
            width: 300%; /* Adjust based on content */
            will-change: transform;
        }
        .experience-card {
            width: 350px;
            flex-shrink: 0;
        }
        .map-location {
            cursor: pointer;
            transition: transform 0.2s ease-out;
        }
        .map-location:hover {
            transform: scale(1.1);
        }
        .accordion-button:not(.collapsed) {
            color: #0c63e4;
            background-color: #e7f1ff;
        }
        .accordion-button:focus {
            box-shadow: none;
        }
      `}</style>

      <CursorBird />
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Philosophy />
        <div ref={horizontalScrollRef}>
            <Experiences />
        </div>
        <Gallery />
        <Sustainability />
        <InteractiveMap />
        <Amenities />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

