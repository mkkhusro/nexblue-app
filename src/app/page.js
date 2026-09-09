"use client";

import { useEffect, useState } from "react";
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
    eyebrow: "Precision engineering / Built to perform",
    title: "Shaping",
    emphasis: "what is",
    ending: "possible.",
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
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return <header className={styles.hero} id="home" style={{ "--hero-image": `url(${slide.image})` }}><nav className={styles.nav}><a className={styles.brand} href="#home"><span className={styles.brandMark}>N</span><span>NEX<span>BLUE</span></span></a><button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span></span><span></span></button><div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#company" onClick={() => setMenuOpen(false)}>Company</a><a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a><a href="#industries" onClick={() => setMenuOpen(false)}>Products</a><a href="#capability" onClick={() => setMenuOpen(false)}>Capability</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div><a className={styles.navCta} href="#contact">Start a conversation <span>↗</span></a></nav><div className={styles.heroContent} key={slide.id}><p className={styles.eyebrow}><span></span> {slide.eyebrow}</p><h1><span>{slide.title}</span><br /><em>{slide.emphasis}</em><br /><span>{slide.ending}</span></h1><div className={styles.heroBottom}><p>{slide.copy}</p><a href="#company" className={styles.circleButton} aria-label="Scroll to introduction">↓</a></div></div><div className={styles.heroControls}><button onClick={() => changeSlide(-1)} aria-label="Previous slide">←</button><div className={styles.slideDots}>{heroSlides.map((item, index) => <button key={item.id} className={index === activeSlide ? styles.activeDot : ""} onClick={() => setActiveSlide(index)} aria-label={`Show ${item.id} slide`}><span></span></button>)}</div><button onClick={() => changeSlide(1)} aria-label="Next slide">→</button></div><div className={styles.heroAside}><span>Scroll to explore</span><i></i></div></header>;
}

function Footer() {
  return <footer className={styles.footer} id="contact"><div className={styles.footerTop}><div><a className={styles.brand} href="#home"><span className={styles.brandMark}>N</span><span>NEX<span>BLUE</span></span></a><p>Engineering the essential.<br />Building what comes next.</p></div><div className={styles.footerAction}><span>Have a challenge?</span><a href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></a></div></div><div className={styles.footerBottom}><span>© 2025 NEXBLUE INDUSTRIES</span><div><a href="#home">Instagram</a><a href="#home">LinkedIn</a><a href="#home">Privacy</a></div><span>Made for the next horizon</span></div></footer>;
}
