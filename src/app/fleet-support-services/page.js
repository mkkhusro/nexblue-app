import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import shared from "../diesel-exhaust-fluid/page.module.css";
import styles from "./page.module.css";

const serviceLanes = [
  {
    title: "Plan and replenish",
    code: "SUPPLY / 01",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85",
    services: ["Fleet consumables management", "DEF supply programs", "Lubricant supply programs", "Scheduled replenishment"],
  },
  {
    title: "Coordinate service",
    code: "OPERATIONS / 02",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85",
    services: ["Preventive maintenance support", "Fleet service coordination", "Workshop network support", "Vehicle inspection coordination"],
  },
  {
    title: "Manage and improve",
    code: "CONTROL / 03",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    services: ["Maintenance tracking", "Fleet procurement programs", "Bulk supply contracts", "Fleet operating analytics"],
  },
];

const businessModels = [
  ["Program supply", "Planned consumables and fluid supply aligned to fleet needs."],
  ["Scheduled replenishment", "Recurring delivery planning based on agreed volumes and cadence."],
  ["Service coordination", "Coordination across procurement, workshops and maintenance activity."],
  ["Performance review", "Operational visibility to support review and continuous improvement."],
];

export default function FleetSupportServicesPage() {
  return (
    <main className={shared.page}>
      <header className={shared.header}>
        <div className={shared.headerInner}>
          <Brand />
          <nav className={shared.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link><Link href="/#industries">Solutions</Link>
            <Link className={shared.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Fleet Support Services" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={shared.hero}>
        <div className={shared.heroInner}>
          <div className={shared.heroCopy}>
            <div className={shared.breadcrumbs}><Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Fleet Support Services</span></div>
            <p className={shared.kicker}>08 / Fleet operations</p>
            <h1>Fleet Support Services</h1>
            <p className={shared.introduction}>A coordinated approach to supply, service planning and day-to-day fleet readiness across vehicles, teams and operating locations.</p>
            <div className={shared.heroActions}>
              <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Fleet Support Services" } }}>Discuss your fleet <span>↗</span></Link>
              <a className={shared.secondaryLink} href="#service-lanes">Explore support areas <span>↓</span></a>
            </div>
          </div>
          <figure className={shared.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .04) 18%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Commercial fleet vehicles ready for service" />
        </div>
        <div className={shared.heroRule} />
      </section>

      <section className={shared.overview}>
        <div className={shared.overviewInner}>
          <p className={shared.sectionIndex}>01 / Fleet support</p>
          <div className={shared.overviewCopy}>
            <h2>Bring recurring fleet needs into one operating rhythm.</h2>
            <p>Consumables, maintenance and procurement are easier to coordinate when they are planned together. Support can be shaped around fleet size, service locations, operating hours and internal workflows.</p>
          </div>
        </div>
      </section>

      <section className={styles.laneSection} id="service-lanes">
        <div className={styles.laneInner}>
          <div className={styles.laneHeading}>
            <p className={shared.sectionIndex}>02 / Service lanes</p>
            <h2>From planned supply to fleet-wide coordination.</h2>
          </div>
          <div className={styles.laneGrid}>
            {serviceLanes.map((lane) => (
              <section className={styles.lane} key={lane.code}>
                <div className={styles.laneImage} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .06), rgba(12, 18, 22, .7)), url("${lane.image}")` }} role="img" aria-label={`${lane.title} fleet service`}>
                  <span>{lane.code}</span><h3>{lane.title}</h3>
                </div>
                <div className={styles.laneServices}>
                  {lane.services.map((service, index) => (
                    <Link key={service} href={{ pathname: "/discuss-requirements", query: { solution: "Fleet Support Services", area: service } }}>
                      <span>{String(index + 1).padStart(2, "0")}</span><b>{service}</b><i aria-hidden="true">↗</i>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.modelSection}>
        <div className={styles.modelInner}>
          <div className={styles.modelIntro}>
            <p className={shared.sectionIndex}>03 / Business Model</p>
            <h2>Support shaped around how your fleet operates.</h2>
            <p>Engagements can combine supply, service coordination and operational review, with scope and cadence defined around the customer’s requirements.</p>
          </div>
          <div className={styles.modelList}>
            {businessModels.map(([title, copy], index) => (
              <div key={title}><span>0{index + 1}</span><section><h3>{title}</h3><p>{copy}</p></section></div>
            ))}
          </div>
        </div>
      </section>

      <section className={shared.selectionNote}>
        <div className={shared.selectionInner}>
          <p className={shared.sectionIndex}>04 / Build a support plan</p>
          <div><h2>Start with the pressure points in your operation.</h2><p>Tell us about your fleet, locations, service cadence, procurement needs and current supply challenges. We can use those details to frame a practical discussion.</p><Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Fleet Support Services" } }}>Discuss your fleet <span>↗</span></Link></div>
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