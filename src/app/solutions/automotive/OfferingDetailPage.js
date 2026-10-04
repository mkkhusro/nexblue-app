import Link from "next/link";
import { Brand } from "./AutomotiveSolutionPage";
import { getAutomotiveOfferingPath } from "./data";
import styles from "./OfferingDetailPage.module.css";

export default function OfferingDetailPage({ solution, area, areaImage, relatedAreas }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/#home">Home</Link>
            <Link href={`/solutions/automotive/${solution.slug}`}>Automotive Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: solution.title, area: area.title } }}>Enquire now <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/#home">NEXBLUE</Link><span>/</span>
              <Link href={`/solutions/automotive/${solution.slug}`}>Automotive Solutions</Link><span>/</span>
              <span>{area.title}</span>
            </div>
            <p className={styles.kicker}>{solution.title}</p>
            <h1>{area.title}</h1>
            <p className={styles.introduction}>{area.copy}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: solution.title, area: area.title } }}>Enquire now <span>↗</span></Link>
              <Link className={styles.secondaryLink} href={`/solutions/automotive/${solution.slug}`}>Back to {solution.title} <span>↗</span></Link>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .04) 20%, rgba(12, 18, 22, .62) 100%), url("${areaImage.url}")` }} role="img" aria-label={areaImage.alt}>
            <figcaption><span>{solution.title}</span><span>NEXBLUE / {area.title}</span></figcaption>
          </figure>
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.detail}>
        <div className={styles.detailInner}>
          <p className={styles.sectionIndex}>01 / Solution detail</p>
          <div className={styles.detailCopy}>
            <h2>{area.title}: a considered fit for the job.</h2>
            <p>{area.details}</p>
            <p className={styles.detailContext}>{solution.overview}</p>
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className={styles.applicationsInner}>
          <div>
            <p className={styles.sectionIndex}>02 / Application contexts</p>
            <h2>Where this solution fits.</h2>
          </div>
          <ul>
            {solution.applications.map((application, index) => (
              <li key={application}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{application}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {relatedAreas.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <div className={styles.relatedHeading}>
              <p className={styles.sectionIndex}>03 / Related offerings</p>
              <h2>Explore more of {solution.title.toLowerCase()}.</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedAreas.map((related) => (
                <Link className={styles.relatedItem} href={getAutomotiveOfferingPath(solution, related.area)} key={related.area.title}>
                  <span className={styles.relatedVisual} style={{ backgroundImage: `linear-gradient(0deg, rgba(12, 18, 22, .5), transparent 70%), url("${related.image.url}")` }} role="img" aria-label={related.image.alt} />
                  <span className={styles.relatedTitle}>{related.area.title}<b aria-hidden="true">↗</b></span>
                  <span className={styles.relatedCopy}>{related.area.copy}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.enquiry}>
        <div className={styles.enquiryInner}>
          <p className={styles.sectionIndex}>04 / Talk to NEXBLUE</p>
          <div>
            <h2>Need support with {area.title.toLowerCase()}?</h2>
            <p>Share your application and operating requirements with our team. We’ll help you identify the right next conversation.</p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: solution.title, area: area.title } }}>Enquire now <span>↗</span></Link>
          </div>
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
              <Link href="/#home">Home</Link>
              <Link href="/#industries">Solutions</Link>
              <Link href={`/solutions/automotive/${solution.slug}`}>Back to {solution.title}</Link>
              <Link href="/company">Company</Link>
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