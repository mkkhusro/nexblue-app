import Link from "next/link";
import styles from "./AutomotiveSolutionPage.module.css";
import { automotiveSolutions, getAutomotiveOfferingPath } from "./data";

export function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="NEXBLUE home">
      <span className={styles.brandMain}>
        <span className={styles.brandWord}><span>NEX</span><span className={styles.brandBlue}>BLUE</span></span>
        <span className={styles.brandAccent} aria-hidden="true" />
      </span>
      <span className={styles.brandVariants}>
        <span>NEXBLUE <b className={styles.brandBlue}>GO</b></span>
        <span>NEXBLUE <b className={styles.brandGreen}>FLEET</b></span>
      </span>
    </Link>
  );
}

export default function AutomotiveSolutionPage({ solution }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/#home">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: solution.title } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/#home">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Automotive</span>
            </div>
            <p className={styles.kicker}>{solution.eyebrow}</p>
            <h1>{solution.title}</h1>
            <p className={styles.introduction}>{solution.introduction}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: solution.title } }}>Discuss your requirements <span>↗</span></Link>
              <a className={styles.secondaryLink} href="#solution">Explore the solution <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .04) 20%, rgba(12, 18, 22, .62) 100%), url("${solution.heroImage}")` }} role="img" aria-label={solution.heroAlt}>
            <figcaption><span>Automotive solutions</span><span>{solution.eyebrow.split(" /")[0]}</span></figcaption>
          </figure>
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.overview} id="solution">
        <div className={styles.overviewInner}>
          <p className={styles.sectionIndex}>01 / The solution</p>
          <div className={styles.overviewCopy}>
            <h2>{solution.overviewTitle}</h2>
            <p>{solution.overview}</p>
          </div>
        </div>
      </section>

      <section className={styles.offerings}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / What we bring together</p>
            <h2>Thoughtful support.<br /><em>Made for real use.</em></h2>
          </div>
          <div className={styles.offeringGrid}>
            {solution.areas.map((area, index) => (
              <article className={styles.offering} key={area.title}>
                <div className={styles.offeringVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .04) 25%, rgba(12, 18, 22, .5) 100%), url("${solution.areaImages[index].url}")` }} role="img" aria-label={solution.areaImages[index].alt}>
                  <span className={styles.offeringNumber}>0{index + 1}</span>
                </div>
                <div className={styles.offeringContent}>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                  <Link className={styles.offeringDetails} href={getAutomotiveOfferingPath(solution, area)}>
                    <span>View details</span><b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={styles.workflowInner}>
          <div className={styles.workflowHeader}>
            <p className={styles.sectionIndex}>03 / In practice</p>
            <div>
              <h2>{solution.workflow.title}</h2>
              <p>{solution.workflow.introduction}</p>
            </div>
          </div>
          <ol className={styles.workflowSteps}>
            {solution.workflow.steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.workflowNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.applications}>
        <div className={styles.applicationInner}>
          <figure className={styles.supportVisual} style={{ backgroundImage: `linear-gradient(0deg, rgba(12, 18, 22, .42), transparent 56%), url("${solution.supportImage}")` }} role="img" aria-label={solution.supportAlt}>
            <span>Designed around the operation</span>
          </figure>
          <div className={styles.applicationCopy}>
            <p className={styles.sectionIndex}>04 / Where it works</p>
            <h2>One solution.<br /><em>Many ways forward.</em></h2>
            <ul>
              {solution.applications.map((application) => <li key={application}><span>{application}</span><b aria-hidden="true">↗</b></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportInner}>
          <p className={styles.sectionIndex}>05 / A partner in motion</p>
          <div className={styles.supportContent}>
            <h2>{solution.supportTitle}</h2>
            <p>{solution.supportCopy}</p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: solution.title } }}>Start a conversation <span>↗</span></Link>
          </div>
          <p className={styles.supportAside}>NEXBLUE<br />Automotive solutions</p>
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerTop}>
          <div className={styles.footerBrandBlock}>
            <Brand />
            <p>Engineering the essential.<br />Building what comes next.</p>
          </div>

          <div className={styles.footerLinks}>
            <span>Explore</span>
            <div className={styles.footerLinkGrid}>
              <Link href="/">Home</Link>
              <Link href="/#industries">Solutions</Link>
              <Link href="/company">Company</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <div className={styles.footerAction}>
            <span>Have a challenge?</span>
            <Link href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2025 NEXBLUE INDUSTRIES</span>
          <div>
            <Link href="/#home">Instagram</Link>
            <Link href="/#home">LinkedIn</Link>
            <Link href="/#home">Privacy</Link>
          </div>
          <span>Made for the next horizon</span>
        </div>
      </footer>
    </main>
  );
}