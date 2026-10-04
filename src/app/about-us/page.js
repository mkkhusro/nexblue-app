import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import styles from "./page.module.css";

const values = [
  { number: "01", title: "Precision", copy: "We measure every decision against the demands of the application and the standard the component must meet." },
  { number: "02", title: "Accountability", copy: "Connected stages, clear ownership and disciplined inspection keep quality visible throughout the process." },
  { number: "03", title: "Partnership", copy: "We work alongside customers to understand constraints early and build solutions around real operating needs." },
  { number: "04", title: "Progress", copy: "Material intelligence and continuous improvement help us contribute to the systems shaping what comes next." },
];

const capabilities = [
  { title: "Alloy development", copy: "Material development guided by performance requirements and application context.", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85" },
  { title: "Investment casting", copy: "Precision casting capability for components with demanding geometries and specifications.", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85" },
  { title: "CNC machining", copy: "Controlled machining processes that bring cast components to precise final requirements.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85" },
  { title: "Inspection & testing", copy: "Verification and testing that support dependable quality at every critical stage.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85" },
];

export const metadata = {
  title: "About Us | NEXBLUE",
  description: "Learn about NEXBLUE's precision manufacturing, capabilities, values and approach to engineering for the next horizon.",
};

export default function AboutUsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/about-us" aria-current="page">About Us</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href="/#contact">Start a conversation <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}><Link href="/">NEXBLUE</Link><span>/</span><span>About Us</span></div>
            <p className={styles.kicker}>The NEXBLUE standard / Est. 1990</p>
            <h1>Built with precision.<br /><em>Focused on what comes next.</em></h1>
            <p className={styles.heroIntro}>We bring material science, precision manufacturing and human expertise together to engineer components for the systems that move the world forward.</p>
            <Link className={styles.heroLink} href="#story">Discover who we are <span>↓</span></Link>
          </div>
          <figure className={styles.heroImage} role="img" aria-label="Precision manufacturing environment" />
          <div className={styles.heroFoot}><span>Made with intent in India</span><span>Trusted everywhere</span></div>
        </div>
      </section>

      <section className={styles.story} id="story">
        <div className={styles.storyInner}>
          <p className={styles.sectionLabel}>01 / Our story</p>
          <div className={styles.storyContent}>
            <h2>Decades of making the essential, with care in every detail.</h2>
            <div className={styles.storyCopy}>
              <p>NEXBLUE has grown around a simple belief: the components behind progress deserve the same thought and discipline as the systems they serve. Since 1990, we have brought material understanding and manufacturing expertise together to solve demanding engineering challenges.</p>
              <p>From the first material decision to final inspection, our work is built on connected processes, clear accountability and close collaboration with customers.</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div><strong>1990</strong><span>Established</span></div>
            <div><strong>35<span>+</span></strong><span>Years of precision</span></div>
            <div><strong>04</strong><span>Core capabilities</span></div>
          </div>
        </div>
      </section>

      <section className={styles.purpose}>
        <div className={styles.purposeImage} role="img" aria-label="Advanced industrial engineering and manufacturing" />
        <div className={styles.purposeContent}>
          <p className={styles.sectionLabel}>02 / Vision & purpose</p>
          <h2>Engineering the essential.<br /><em>Building what comes next.</em></h2>
          <p>Our vision is to help build a more capable future through precise, dependable components. We bring the right materials, processes and people together to turn complex requirements into real-world performance.</p>
          <div className={styles.purposeNote}><span>Our point of view</span><strong>Progress is made<br />one considered detail at a time.</strong></div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <div className={styles.valuesHeading}>
            <p className={styles.sectionLabel}>03 / What guides us</p>
            <h2>Our values are built into the work.</h2>
          </div>
          <div className={styles.valueList}>
            {values.map((value) => (
              <article className={styles.valueRow} key={value.number}>
                <span>{value.number}</span><h3>{value.title}</h3><p>{value.copy}</p><b aria-hidden="true">↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.capabilityInner}>
          <div className={styles.capabilityHeading}>
            <p className={styles.sectionLabel}>04 / What we do</p>
            <h2>Connected capabilities.<br /><em>One considered process.</em></h2>
            <p>Our vertically integrated capabilities make complex manufacturing clear, connected and accountable.</p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability, index) => (
              <article className={styles.capabilityCard} key={capability.title}>
                <div className={styles.capabilityImage} style={{ backgroundImage: `url("${capability.image}")` }} role="img" aria-label={`${capability.title} capability`}><span>0{index + 1}</span></div>
                <div><h3>{capability.title}</h3><p>{capability.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectors}>
        <div className={styles.sectorsInner}>
          <p className={styles.sectionLabel}>05 / Where we contribute</p>
          <div className={styles.sectorsCopy}>
            <h2>Made for demanding industries.</h2>
            <p>We serve the systems and sectors where precision, reliability and material performance matter.</p>
          </div>
          <div className={styles.sectorList}>
            <Link href="/#industries"><span>01</span>Aerospace<b>↗</b></Link>
            <Link href="/#industries"><span>02</span>Automotive<b>↗</b></Link>
            <Link href="/#industries"><span>03</span>Energy<b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <p className={styles.sectionLabel}>06 / Let’s build what’s next</p>
          <div><h2>Have a challenge worth solving?</h2><p>Bring us your application, performance target or manufacturing challenge. We’ll start with the details.</p><Link href="mailto:hello@nexblue.in">Start a conversation <span>↗</span></Link></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrandBlock}><Brand /><p>Engineering the essential.<br />Building what comes next.</p></div>
          <div className={styles.footerLinks}><span>Explore</span><div className={styles.footerLinkGrid}><Link href="/">Home</Link><Link href="/#industries">Solutions</Link><Link href="/company">Company</Link><Link href="/#contact">Contact</Link></div></div>
          <div className={styles.footerAction}><span>Have a challenge?</span><Link href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></Link></div>
        </div>
        <div className={styles.footerBottom}><span>© 2025 NEXBLUE INDUSTRIES</span><div><Link href="/#home">Instagram</Link><Link href="/#home">LinkedIn</Link><Link href="/#home">Privacy</Link></div><span>Made for the next horizon</span></div>
      </footer>
    </main>
  );
}