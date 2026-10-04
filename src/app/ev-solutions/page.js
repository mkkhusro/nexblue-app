import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import shared from "../diesel-exhaust-fluid/page.module.css";
import styles from "./page.module.css";

const solutions = [
  { title: "EV fluids", copy: "Application-specific fluids selected for electric vehicle systems and manufacturer requirements.", image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV coolants", copy: "Coolant options for compatible battery, power electronics and thermal circuits.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85" },
  { title: "Thermal-management solutions", copy: "Fluid and service considerations for managing heat across connected EV systems.", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV maintenance products", copy: "Maintenance essentials chosen for electric vehicles, compatible workshop practice and service needs.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV consumables", copy: "Workshop and fleet consumables to support routine service and operational readiness.", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV workshop solutions", copy: "Products and coordination support for workshops maintaining electric vehicles.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV fleet support", copy: "Service and supply planning for operators introducing or scaling electric fleets.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1100&q=85" },
  { title: "Charging ecosystem partnerships", copy: "Partner opportunities across charging operations, deployment and supporting services.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV aftermarket products", copy: "Aftermarket products for the evolving needs of EV owners, service teams and distributors.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85" },
  { title: "Electric commercial mobility solutions", copy: "Support for commercial operators evaluating electric vehicles and day-to-day deployment.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=85" },
  { title: "EV infrastructure opportunities", copy: "Exploration of infrastructure partnerships and services that enable electric mobility.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=85" },
];

export default function EvSolutionsPage() {
  return (
    <main className={shared.page}>
      <header className={shared.header}>
        <div className={shared.headerInner}>
          <Brand />
          <nav className={shared.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link><Link href="/#industries">Solutions</Link>
            <Link className={shared.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "EV Solutions" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={shared.hero}>
        <div className={shared.heroInner}>
          <div className={shared.heroCopy}>
            <div className={shared.breadcrumbs}><Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>EV Solutions</span></div>
            <p className={shared.kicker}>07 / Electric mobility</p>
            <h1>EV Solutions</h1>
            <p className={shared.introduction}>Products, services and partnership opportunities for electric vehicles, workshops, fleets and the infrastructure around them.</p>
            <div className={shared.heroActions}>
              <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "EV Solutions" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={shared.secondaryLink} href="#solutions">Explore EV solutions <span>↓</span></a>
            </div>
          </div>
          <figure className={shared.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .04) 18%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Electric vehicle connected to a charging station" />
        </div>
        <div className={shared.heroRule} />
      </section>

      <section className={shared.overview}>
        <div className={shared.overviewInner}>
          <p className={shared.sectionIndex}>01 / The transition</p>
          <div className={shared.overviewCopy}>
            <h2>Support for the vehicle and the ecosystem around it.</h2>
            <p>Electric mobility brings together vehicle systems, service readiness, fleet operations and charging infrastructure. NEXBLUE connects product needs with practical support and partnership conversations.</p>
          </div>
        </div>
      </section>

      <section className={styles.solutionSection} id="solutions">
        <div className={styles.solutionInner}>
          <div className={styles.solutionHeading}>
            <p className={shared.sectionIndex}>02 / EV portfolio</p>
            <h2>Built around the way electric mobility works.</h2>
          </div>
          <div className={styles.solutionGrid}>
            {solutions.map((solution, index) => (
              <article className={styles.solutionCard} key={solution.title}>
                <div className={styles.solutionVisual} style={{ backgroundImage: `url("${solution.image}")` }} role="img" aria-label={`${solution.title} application`}>
                  <span>0{index + 1}</span>
                </div>
                <div className={styles.solutionContent}>
                  <p className={styles.solutionType}>{index < 6 ? "Vehicle and service" : "Fleet and ecosystem"}</p>
                  <h3>{solution.title}</h3>
                  <p>{solution.copy}</p>
                  <Link href={{ pathname: "/discuss-requirements", query: { solution: "EV Solutions", area: solution.title } }} aria-label={`Discuss ${solution.title}`}><span>Explore solution</span><b aria-hidden="true">↗</b></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.electricSystem}>
        <div className={styles.electricInner}>
          <p className={shared.sectionIndex}>03 / Connected opportunities</p>
          <div className={styles.electricCopy}>
            <h2>Move from a vehicle decision to an operating plan.</h2>
            <p>Discuss the duty cycle, service model, charging needs and rollout priorities together. A connected view helps identify which products, partners and support programs fit the next stage of your transition.</p>
            <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "EV Solutions" } }}>Plan an EV conversation <span>↗</span></Link>
          </div>
          <span className={styles.systemMark}>EV<br />/ NEXT</span>
        </div>
      </section>

      <section className={shared.selectionNote}>
        <div className={shared.selectionInner}>
          <p className={shared.sectionIndex}>04 / Start with the application</p>
          <div><h2>Tell us where you are in the transition.</h2><p>Share the vehicle or fleet type, service environment, operating requirements and partnership goals. We can use that context to shape a relevant discussion.</p><Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "EV Solutions" } }}>Discuss your requirements <span>↗</span></Link></div>
        </div>
      </section>

      <footer className={shared.footer}>
        <div className={shared.footerTop}>
          <div className={shared.footerBrandBlock}><Brand /><p>Engineering the essential.<br />Building what comes next.</p></div>
          <div className={shared.footerLinks}><span>Explore</span><div className={shared.footerLinkGrid}><Link href="/">Home</Link><Link href="/#industries">Solutions</Link><Link href="/company">Company</Link><Link href="/#contact">Contact</Link></div></div>
          <div className={shared.footerAction}><span>Have a challenge?</span><Link href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></Link></div>
        </div>
        <div className={shared.footerBottom}><span>© 2025 NEXBLUE INDUSTRIES</span><div><Link href="/#home">Instagram</Link><Link href="/#home">LinkedIn</Link><Link href="/#home">Privacy</Link></div><span>Made for the next horizon</span></div>
      </footer>
    </main>
  );
}