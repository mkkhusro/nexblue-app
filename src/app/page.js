"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const industries = [
  { number: "01", title: "Aerospace", copy: "Critical cast and machined components for flight, space and the most demanding environments.", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85" },
  { number: "02", title: "Automotive", copy: "High-performance precision parts, from alloy making to finishing, built for the road ahead.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85" },
  { number: "03", title: "Energy", copy: "Reliable metallurgy and manufacturing for turbines, power systems and a changing planet.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85" },
];

const capabilities = ["Alloy development", "Investment casting", "CNC machining", "Inspection & testing"];

const heroSlides = [
  {
    id: "aerospace",
    eyebrow: "Advanced manufacturing / Est. 1990",
    title: "Engineered",
    emphasis: "for the next",
    ending: "horizon.",
    copy: "Precision components for aerospace, automotive and energy. Made with intent in India, trusted everywhere.",
    image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "precision",
    eyebrow: "Shaping what is possible",
    title: "Powering the",
    emphasis: "Complete Automotive",
    ending: "Ecosystem",
    copy: "From first pour to final inspection, every decision is measured against the future our customers are building.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: "energy",
    eyebrow: "Material intelligence / Made in India",
    title: "Powering",
    emphasis: "the next",
    ending: "move.",
    copy: "Advanced alloys and dependable processes for the systems that keep our world moving forward.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90",
  },
];

const verticals = [
  "Automotive Solutions",
  "Automobile Care Products",
  "Lubricants",
  "Petrochemicals",
  "Diesel Exhaust Fluid",
  "Industrial Fluids",
  "EV Solutions",
  "Fleet Support Services",
  "Mobility Technologies",
];

const verticalSubmenus = {
  "Automotive Solutions": [
    "Passenger vehicle solutions",
    "Commercial vehicle solutions",
    "Heavy vehicle solutions",
    "Automotive maintenance products",
    "Workshop solutions",
    "Automotive consumables",
    "Vehicle operating fluids",
    "Dealership and service-centre solutions",
    "Institutional automotive supply",
    "Automotive aftermarket distribution",
  ],
  "Automobile Care Products": [
    "Exterior cleaning solutions",
    "Interior cleaning products",
    "Car-care chemicals",
    "Degreasers",
    "Detailing products",
    "Vehicle protection products",
    "Workshop consumables",
    "Automotive accessories",
    "Commercial vehicle care",
    "Professional car-care solutions",
  ],
  Lubricants: [
    "Engine oils",
    "Gear oils",
    "Transmission fluids",
    "Hydraulic oils",
    "Greases",
    "Compressor oils",
    "Automotive specialty fluids",
    "Heavy-equipment lubricants",
    "Agricultural lubricants",
    "Industrial lubricants",
  ],
  Petrochemicals: [
    "Petrochemical products",
    "Industrial chemicals",
    "Specialty chemicals",
    "Specialty fluids",
    "Chemical intermediates",
    "Process materials",
    "Industrial consumables",
    "Bulk supply",
    "Institutional procurement",
    "Import and export opportunities",
  ],
  "Diesel Exhaust Fluid": [
    "AUS 32",
    "AUS 40",
  ],
  "Industrial Fluids": [
    "Hydraulic fluids",
    "Industrial gear oils",
    "Compressor fluids",
    "Industrial lubricants",
    "Coolants",
    "Metalworking fluids",
    "Cutting fluids",
    "Specialty industrial fluids",
    "Heavy-equipment fluids",
    "Maintenance fluids",
  ],
  "EV Solutions": [
    "EV fluids",
    "EV coolants",
    "Thermal-management solutions",
    "EV maintenance products",
    "EV consumables",
    "EV workshop solutions",
    "EV fleet support",
    "Charging ecosystem partnerships",
    "EV aftermarket products",
    "Electric commercial mobility solutions",
    "EV infrastructure opportunities",
  ],
  "Fleet Support Services": [
    "Fleet consumables management",
    "DEF supply programs",
    "Lubricant supply programs",
    "Preventive maintenance support",
    "Scheduled replenishment",
    "Fleet service coordination",
    "Workshop network support",
    "Vehicle inspection coordination",
    "Maintenance tracking",
    "Fleet procurement programs",
    "Bulk supply contracts",
    "Fleet operating analytics",
    "Business Model",
  ],
  "Mobility Technologies": [
    "Fleet-management technology",
    "Digital maintenance platforms",
    "Vehicle service management",
    "Consumables tracking",
    "DEF consumption monitoring",
    "Lubricant consumption tracking",
    "Digital procurement",
    "Fleet analytics",
    "Telematics partnerships",
    "EV fleet-management solutions",
    "Charging ecosystem integrations",
    "Mobility data solutions",
    "B2B mobility platforms",
    "Strategic Role",
  ],
};

export default function Home() {
  return (
    <div className={styles.siteShell}>
      <Hero />
      <main>
        <section className={styles.introSection} id="company">
          <div className={styles.sectionLabel}>01 / The NEXBLUE standard</div>
          <div className={styles.introGrid}><h2>Made for the moments that matter.</h2><div className={styles.introCopy}><p>We engineer the components behind progress. NEXBLUE brings material science, precision manufacturing and human expertise together under one roof.</p><a className={styles.textLink} href="#capability">Discover our approach <span>↗</span></a></div></div>
          <div className={styles.stats}><div><strong>35<span>+</span></strong><small>years of precision</small></div><div><strong>3</strong><small>industries, one standard</small></div><div><strong>24<span>/7</span></strong><small>quality mindset</small></div></div>
        </section>
        <section className={styles.industrySection} id="industries"><div className={styles.sectionHeader}><div className={styles.sectionLabel}>02 / Where we work</div><p>One disciplined process, adapted to the demands of every frontier.</p></div><div className={styles.industryGrid}>{industries.map((industry) => <article className={styles.industryCard} key={industry.number}><div className={styles.industryImage} style={{ backgroundImage: `url(${industry.image})` }}><span>{industry.number}</span></div><div className={styles.industryMeta}><h3>{industry.title}</h3><p>{industry.copy}</p><a href="#contact" aria-label={`Learn more about ${industry.title}`}>Explore <span>↗</span></a></div></article>)}</div></section>
        <section className={styles.capabilitySection} id="capability"><div className={styles.capabilityVisual}><div className={`${styles.ring} ${styles.ringOne}`}></div><div className={`${styles.ring} ${styles.ringTwo}`}></div><span className={styles.visualTag}>NEXBLUE / LAB 01</span><span className={styles.visualCaption}>Material intelligence<br />in every detail.</span></div><div className={styles.capabilityContent}><div className={styles.sectionLabel}>03 / How we make</div><h2>From raw potential<br /><em>to real performance.</em></h2><p>Our vertically integrated capabilities make complexity feel simple. Every stage is connected, measured and made accountable.</p><ul>{capabilities.map((capability, index) => <li key={capability}><span>0{index + 1}</span>{capability}<b>↗</b></li>)}</ul></div></section>
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openVertical, setOpenVertical] = useState(null);
  const [submenuLeft, setSubmenuLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const navRef = useRef(null);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const showVerticalSubmenu = (vertical, trigger) => {
    const navBounds = navRef.current?.getBoundingClientRect();
    if (navBounds) {
      const panelWidth = Math.min(560, window.innerWidth - 72);
      const triggerLeft = trigger.getBoundingClientRect().left - navBounds.left;
      setSubmenuLeft(Math.max(0, Math.min(triggerLeft, navBounds.width - panelWidth)));
    }
    setOpenVertical(vertical);
  };

  return <header className={styles.hero} id="home" style={{ "--hero-image": `url(${slide.image})` }}><nav ref={navRef} className={styles.nav} onMouseLeave={() => { if (window.matchMedia("(min-width: 801px)").matches) setOpenVertical(null); }}>
  <a className={styles.brand} href="#home" aria-label="NEXBLUE, NEXBLUE GO, NEXBLUE FLEET"><span className={styles.brandMain}><span className={styles.brandWord}><span>NEX</span><span className={styles.brandBlue}>BLUE</span></span><span className={styles.brandAccent} aria-hidden="true"></span></span><span className={styles.brandVariants}><span>NEXBLUE <b className={styles.brandBlue}>GO</b></span><span>NEXBLUE <b className={styles.brandGreen}>FLEET</b></span></span></a>
  <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span></span><span></span></button>
  <div className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}>
    <div className={styles.navTop}>
      <div className={styles.navUtility}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#company" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <a className={styles.navCta} href="#contact">Start a conversation <span>↗</span></a>
    </div>
    <div className={styles.navLinks}>
      {verticals.map((vertical) => verticalSubmenus[vertical] ? <div key={vertical} className={styles.automotiveItem}><button className={styles.verticalTrigger} type="button" aria-expanded={openVertical === vertical} onPointerEnter={(event) => { if (event.pointerType === "mouse") showVerticalSubmenu(vertical, event.currentTarget); }} onClick={(event) => { if (window.matchMedia("(max-width: 800px)").matches) setOpenVertical((open) => open === vertical ? null : vertical); else showVerticalSubmenu(vertical, event.currentTarget); }}>{vertical}<span className={styles.mobileSubmenuIndicator} aria-hidden="true">{openVertical === vertical ? "−" : "+"}</span></button><div className={`${styles.mobileVerticalSubmenu} ${openVertical === vertical ? styles.mobileVerticalSubmenuOpen : ""}`}>{verticalSubmenus[vertical].map((submenu) => <a key={submenu} href="#industries" onClick={() => { setOpenVertical(null); setMenuOpen(false); }}>{submenu}</a>)}</div></div> : <a key={vertical} href="#industries" onClick={() => setMenuOpen(false)}>{vertical}</a>)}
    </div>
  </div>
  {openVertical && <div className={styles.verticalSubmenu} style={{ left: `${submenuLeft}px` }} aria-label={`${openVertical} submenu`}>{verticalSubmenus[openVertical].map((submenu) => <a key={submenu} href="#industries" onClick={() => { setOpenVertical(null); setMenuOpen(false); }}>{submenu}</a>)}</div>}
</nav><div className={`${styles.heroContent} ${slide.id === "precision" ? styles.automotiveSlide : ""}`} key={slide.id}><p className={styles.eyebrow}><span></span> {slide.eyebrow}</p><h1><span>{slide.title}</span><br /><em>{slide.emphasis}</em><br /><span>{slide.ending}</span></h1><div className={styles.heroBottom}><p>{slide.copy}</p><a href="#company" className={styles.circleButton} aria-label="Scroll to introduction">↓</a></div></div><div className={styles.heroControls}><button onClick={() => changeSlide(-1)} aria-label="Previous slide">←</button><div className={styles.slideDots}>{heroSlides.map((item, index) => <button key={item.id} className={index === activeSlide ? styles.activeDot : ""} onClick={() => setActiveSlide(index)} aria-label={`Show ${item.id} slide`}><span></span></button>)}</div><button onClick={() => changeSlide(1)} aria-label="Next slide">→</button></div><div className={styles.heroAside}><span>Scroll to explore</span><i></i></div></header>;
}

function Footer() {
  return <footer className={styles.footer} id="contact"><div className={styles.footerTop}><div><a className={styles.brand} href="#home" aria-label="NEXBLUE, NEXBLUE GO, NEXBLUE FLEET"><span className={styles.brandMain}><span className={styles.brandWord}><span>NEX</span><span className={styles.brandBlue}>BLUE</span></span><span className={styles.brandAccent} aria-hidden="true"></span></span><span className={styles.brandVariants}><span>NEXBLUE <b className={styles.brandBlue}>GO</b></span><span>NEXBLUE <b className={styles.brandGreen}>FLEET</b></span></span></a><p>Engineering the essential.<br />Building what comes next.</p></div><div className={styles.footerAction}><span>Have a challenge?</span><a href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></a></div></div><div className={styles.footerBottom}><span>© 2025 NEXBLUE INDUSTRIES</span><div><a href="#home">Instagram</a><a href="#home">LinkedIn</a><a href="#home">Privacy</a></div><span>Made for the next horizon</span></div></footer>;
}
