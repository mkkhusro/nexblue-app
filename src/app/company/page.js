import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import Reveal from "./Reveal";
import styles from "./page.module.css";

const capabilities = [
  { number: "01", title: "Alloy development", copy: "Material development shaped around application demands and performance targets.", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1100&q=85" },
  { number: "02", title: "Investment casting", copy: "Precision casting for complex forms and demanding component requirements.", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1100&q=85" },
  { number: "03", title: "CNC machining", copy: "Controlled machining that brings components to precise final specifications.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85" },
  { number: "04", title: "Inspection & testing", copy: "Verification throughout the process to support consistent quality.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85" },
];

const values = [
  { title: "Precision", copy: "We focus on the details that determine whether a component performs as intended." },
  { title: "Accountability", copy: "Connected stages and clear ownership keep work measured and quality visible." },
  { title: "Partnership", copy: "We listen closely and shape our work around the requirements customers bring." },
  { title: "Progress", copy: "We apply material and manufacturing expertise to the systems moving industries forward." },
];

export const metadata = {
  title: "Company | NEXBLUE",
  description: "Explore NEXBLUE's company profile, manufacturing journey, capabilities, business areas and values.",
};

export default function CompanyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/company" aria-current="page">Company</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href="/discuss-requirements?solution=Company">Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}><Link href="/">NEXBLUE</Link><span>/</span><span>Company</span></div>
            <p className={styles.kicker}>Company profile / Est. 1990</p>
            <h1>Engineering capability.<br /><em>Built for what comes next.</em></h1>
            <p className={styles.heroIntro}>We bring material science, precision manufacturing and human expertise together to engineer components for aerospace, automotive and energy.</p>
            <div className={styles.heroLinks}><Link href="#overview">Explore our company <span>↓</span></Link><Link href="/discuss-requirements?solution=Company">Talk with our team <b>↗</b></Link></div>
          </div>
          <figure className={styles.heroImage} role="img" aria-label="Precision manufacturing and engineering environment"><figcaption><span>Made with intent in India</span><span>Trusted everywhere</span></figcaption></figure>
          <div className={styles.heroStamp}><span>Since</span><strong>35<span>+</span></strong><small>years of precision</small></div>
          <div className={styles.heroFoot}><span>01 / Company</span><span>Material intelligence · Precision · Partnership</span></div>
        </div>
      </section>

      <Reveal as="section" id="overview" className={`${styles.overview} ${styles.reveal}`}>
        <div className={styles.overviewInner}>
          <p className={styles.sectionLabel}>01 / Company overview</p>
          <div className={styles.overviewContent}>
            <h2>A precision manufacturing partner, from material to finished component.</h2>
            <p>NEXBLUE combines alloy development, investment casting, CNC machining, inspection and testing in a connected manufacturing approach. Our work begins with understanding the application and carries that context through each stage.</p>
            <p>Established in 1990, we bring more than three decades of experience to customers building for demanding operating environments.</p>
          </div>
          <div className={styles.overviewStats}>
            <div><strong>1990</strong><span>Established</span></div>
            <div><strong>35<span>+</span></strong><span>Years of precision</span></div>
            <div><strong>04</strong><span>Core capabilities</span></div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.journey} ${styles.reveal}`}>
        <div className={styles.journeyInner}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>02 / Our journey</p>
            <h2>Experience built over time.<br /><em>Capability built together.</em></h2>
            <p>Our story is one of growing manufacturing depth while holding to a consistent standard: understand the material, control the process and verify the result.</p>
          </div>
          <div className={styles.timeline}>
            <article><span>1990</span><div><h3>Company established</h3><p>NEXBLUE begins its journey in precision manufacturing.</p></div></article>
            <article><span>Capability</span><div><h3>Connected expertise</h3><p>Alloy development, investment casting, machining and inspection form an integrated capability base.</p></div></article>
            <article><span>Today</span><div><h3>Serving essential industries</h3><p>We contribute to aerospace, automotive and energy through material and manufacturing expertise.</p></div></article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.capabilitySection} ${styles.reveal}`}>
        <div className={styles.capabilityInner}>
          <div className={styles.capabilityHeading}>
            <p className={styles.sectionLabel}>03 / Our capabilities</p>
            <h2>Four strengths.<br /><em>One connected process.</em></h2>
            <p>Vertical integration links material decisions to finished-part quality, with each capability supporting the next.</p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article className={styles.capabilityCard} key={capability.number}>
                <div className={styles.capabilityImage} style={{ backgroundImage: `url("${capability.image}")` }} role="img" aria-label={`${capability.title} manufacturing capability`}><span>{capability.number}</span></div>
                <div><h3>{capability.title}</h3><p>{capability.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.businessAreas} ${styles.reveal}`}>
        <div className={styles.businessInner}>
          <p className={styles.sectionLabel}>04 / Our business areas</p>
          <div className={styles.businessHeading}><h2>Supporting industries that move the world.</h2><p>Precision components and dependable processes for demanding applications.</p></div>
          <div className={styles.businessGrid}>
            <article className={styles.businessCard}><div className={styles.businessImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85')" }} role="img" aria-label="Aircraft in flight"><span>01</span></div><div><h3>Aerospace</h3><p>Critical cast and machined components for flight, space and demanding environments.</p></div></article>
            <article className={styles.businessCard}><div className={styles.businessImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85')" }} role="img" aria-label="Automotive engineering"><span>02</span></div><div><h3>Automotive</h3><p>High-performance precision parts, from alloy making through finishing, built for the road ahead.</p></div></article>
            <article className={styles.businessCard}><div className={styles.businessImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85')" }} role="img" aria-label="Renewable energy infrastructure"><span>03</span></div><div><h3>Energy</h3><p>Reliable metallurgy and manufacturing for turbines, power systems and a changing planet.</p></div></article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.technology} ${styles.reveal}`}>
        <div className={styles.technologyInner}>
          <div className={styles.technologyVisual} role="img" aria-label="Industrial materials testing and engineering"><span>PROCESS / QUALITY / PERFORMANCE</span></div>
          <div className={styles.technologyContent}>
            <p className={styles.sectionLabel}>05 / Technology & innovation</p>
            <h2>Innovation grounded in the realities of making.</h2>
            <p>We apply material knowledge, process control and inspection through a connected manufacturing chain. The goal is practical: solve the specification, understand the variables and verify quality at every critical stage.</p>
            <ul><li><span>01</span>Material and alloy development</li><li><span>02</span>Process engineering and casting</li><li><span>03</span>Precision machining</li><li><span>04</span>Inspection and testing</li></ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.principles} ${styles.reveal}`}>
        <div className={styles.principlesInner}>
          <p className={styles.sectionLabel}>06 / Vision, mission & values</p>
          <div className={styles.principlesHeading}><h2>A clear purpose.<br /><em>A consistent standard.</em></h2><p>Our identity is shaped by the work we do and the way we do it.</p></div>
          <div className={styles.principleGrid}>
            <article><span>VISION</span><h3>Engineering the next horizon.</h3><p>Contribute to a more capable future through precise, dependable manufacturing.</p></article>
            <article><span>MISSION</span><h3>Make complexity perform.</h3><p>Bring materials, processes and people together to meet demanding requirements.</p></article>
            <article className={styles.valuesCard}><span>VALUES</span><div>{values.map((value) => <p key={value.title}><b>{value.title}</b><span>{value.copy}</span></p>)}</div></article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={`${styles.achievements} ${styles.reveal}`}>
        <div className={styles.achievementsInner}>
          <p className={styles.sectionLabel}>07 / At a glance</p>
          <h2>Experience, expertise and an integrated point of view.</h2>
          <div className={styles.achievementStats}>
            <div><strong>1990</strong><span>Established</span></div>
            <div><strong>35<span>+</span></strong><span>Years of precision</span></div>
            <div><strong>04</strong><span>Core capabilities</span></div>
            <div><strong>03</strong><span>Business areas</span></div>
          </div>
          <p className={styles.achievementNote}>Figures and milestones reflect the company profile presented across NEXBLUE’s current materials.</p>
        </div>
      </Reveal>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.sectionLabel}>08 / Build what comes next</p>
          <div><h2>Bring us the challenge behind your next component.</h2><p>From material selection to final verification, let’s explore how NEXBLUE’s capabilities can support your application.</p><div className={styles.closingLinks}><Link href="/#industries">Explore our industries <span>↗</span></Link><Link href="/discuss-requirements?solution=Company">Discuss a requirement <span>↗</span></Link></div></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrandBlock}><Brand /><p>Engineering the essential.<br />Building what comes next.</p></div>
          <div className={styles.footerLinks}><span>Explore</span><div className={styles.footerLinkGrid}><Link href="/">Home</Link><Link href="/#industries">Solutions</Link><Link href="/about-us">About Us</Link><Link href="/company">Company</Link><Link href="/#contact">Contact</Link></div></div>
          <div className={styles.footerAction}><span>Have a challenge?</span><Link href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></Link></div>
        </div>
        <div className={styles.footerBottom}><span>© 2025 NEXBLUE INDUSTRIES</span><div><Link href="/#home">Instagram</Link><Link href="/#home">LinkedIn</Link><Link href="/#home">Privacy</Link></div><span>Made for the next horizon</span></div>
      </footer>
    </main>
  );
}