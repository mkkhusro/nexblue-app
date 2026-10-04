import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import shared from "../diesel-exhaust-fluid/page.module.css";
import styles from "./page.module.css";

const capabilities = [
  { group: "Operate", items: [
    ["Fleet-management technology", "Coordinate vehicles, teams and operating workflows."],
    ["Digital maintenance platforms", "Organize service schedules, records and maintenance activity."],
    ["Vehicle service management", "Connect service requests, approvals and workshop execution."],
    ["Consumables tracking", "Improve visibility of recurring fleet product requirements."],
    ["Digital procurement", "Support a more connected path from requirement to purchase."],
  ] },
  { group: "Understand", items: [
    ["DEF consumption monitoring", "Track usage patterns to support planning and review."],
    ["Lubricant consumption tracking", "Make lubricant usage easier to assess across fleet assets."],
    ["Fleet analytics", "Bring operational data into clearer fleet performance views."],
    ["Mobility data solutions", "Organize useful data flows around mobility operations."],
  ] },
  { group: "Connect", items: [
    ["Telematics partnerships", "Explore connections with vehicle data and telematics providers."],
    ["EV fleet-management solutions", "Support oversight of electric vehicles within fleet operations."],
    ["Charging ecosystem integrations", "Connect charging services with fleet workflows."],
    ["B2B mobility platforms", "Explore platform opportunities for business mobility services."],
  ] },
];

export default function MobilityTechnologiesPage() {
  let capabilityIndex = 0;

  return (
    <main className={shared.page}>
      <header className={shared.header}>
        <div className={shared.headerInner}>
          <Brand />
          <nav className={shared.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link><Link href="/#industries">Solutions</Link>
            <Link className={shared.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Mobility Technologies" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={shared.hero}>
        <div className={shared.heroInner}>
          <div className={shared.heroCopy}>
            <div className={shared.breadcrumbs}><Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Mobility Technologies</span></div>
            <p className={shared.kicker}>09 / Connected mobility</p>
            <h1>Mobility Technologies</h1>
            <p className={shared.introduction}>Digital platforms, data and ecosystem connections that help businesses coordinate the moving parts of fleet and mobility operations.</p>
            <div className={shared.heroActions}>
              <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Mobility Technologies" } }}>Discuss a technology need <span>↗</span></Link>
              <a className={shared.secondaryLink} href="#capabilities">Explore capabilities <span>↓</span></a>
            </div>
          </div>
          <figure className={shared.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .04) 18%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Digital data visualization on a screen" />
        </div>
        <div className={shared.heroRule} />
      </section>

      <section className={shared.overview}>
        <div className={shared.overviewInner}>
          <p className={shared.sectionIndex}>01 / The opportunity</p>
          <div className={shared.overviewCopy}>
            <h2>Useful technology connects decisions to action.</h2>
            <p>Fleet tools create more value when they connect day-to-day activity with maintenance, procurement, consumption and partner systems. The right combination depends on the data available and the work teams need to accomplish.</p>
          </div>
        </div>
      </section>

      <section className={styles.capabilitySection} id="capabilities">
        <div className={styles.capabilityInner}>
          <div className={styles.capabilityHeading}>
            <p className={shared.sectionIndex}>02 / Capability matrix</p>
            <h2>Technology that works across the mobility stack.</h2>
          </div>
          <div className={styles.capabilityGroups}>
            {capabilities.map((group, groupIndex) => (
              <section className={styles.capabilityGroup} key={group.group}>
                <header><span>0{groupIndex + 1} /</span><h3>{group.group}</h3></header>
                <div>
                  {group.items.map(([title, copy]) => {
                    capabilityIndex += 1;
                    return (
                      <Link className={styles.capabilityRow} key={title} href={{ pathname: "/discuss-requirements", query: { solution: "Mobility Technologies", area: title } }}>
                        <span>{String(capabilityIndex).padStart(2, "0")}</span>
                        <section><h4>{title}</h4><p>{copy}</p></section>
                        <b aria-hidden="true">↗</b>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.strategicSection}>
        <div className={styles.strategicInner}>
          <p className={shared.sectionIndex}>03 / Strategic Role</p>
          <div className={styles.strategicCopy}>
            <h2>Make mobility systems easier to see, coordinate and improve.</h2>
            <p>Technology can connect fleet activity with maintenance, supply and partner ecosystems. NEXBLUE’s role is to help identify the useful connections, define the operating need and explore an implementation path with the right partners.</p>
            <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Mobility Technologies" } }}>Explore a partnership <span>↗</span></Link>
          </div>
          <div className={styles.roleIndex}><span>01</span><span>02</span><span>03</span><i aria-hidden="true" /></div>
        </div>
      </section>

      <section className={shared.selectionNote}>
        <div className={shared.selectionInner}>
          <p className={shared.sectionIndex}>04 / Begin with the workflow</p>
          <div><h2>Start with the work you want technology to improve.</h2><p>Tell us about your fleet, current tools, operational gaps and integration needs. We can use that context to explore a relevant platform or partnership opportunity.</p><Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Mobility Technologies" } }}>Discuss your requirements <span>↗</span></Link></div>
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