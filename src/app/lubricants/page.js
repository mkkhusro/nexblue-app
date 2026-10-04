import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import styles from "./page.module.css";

const categories = [
  {
    title: "Engine oils",
    copy: "Lubrication systems designed to support engine durability, thermal stability and cleaner operation across everyday and demanding service cycles.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gear oils",
    copy: "High-performance gear protection for driving systems requiring dependable load handling, reduced wear and stable operating temperatures.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Transmission fluids",
    copy: "Precision fluid solutions that support smooth shifting, thermal balance and long-term performance in transmission systems.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hydraulic oils",
    copy: "Reliable hydraulic lubrication for equipment and systems where pressure control, efficiency and protection are essential to performance.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Greases",
    copy: "Purpose-designed lubrication for bearings, joints and components where long lubrication life and mechanical protection are critical.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Compressor oils",
    copy: "Specialized compressor lubrication to support operational efficiency, lower wear and dependable service life in fixed and mobile systems.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automotive specialty fluids",
    copy: "Targeted formulations for systems that require more specific fluid behavior, whether due to application, temperature or equipment design.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heavy-equipment lubricants",
    copy: "Heavy-duty lubricant programs engineered for machinery operating under challenging load, climate and service conditions.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agricultural lubricants",
    copy: "Field-ready lubricants to support tractors, harvesting equipment and agricultural systems that need resilient performance in demanding environments.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial lubricants",
    copy: "Broad-use industrial lubrication solutions for plant, rotating equipment and mechanical systems requiring stability, efficiency and consistency.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function LubricantsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Lubricants" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Lubricants</span>
            </div>
            <p className={styles.kicker}>03 / Lubrication</p>
            <h1>Lubricants</h1>
            <p className={styles.introduction}>
              Engineered lubrication support for engines, moving systems and industrial equipment where pressure, temperature and performance matter every day.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Lubricants" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={styles.secondaryLink} href="#categories">Explore the range <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .06) 10%, rgba(12, 18, 22, .64) 100%), url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Modern machinery and lubricant systems in operation" />
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.overview} id="categories">
        <div className={styles.overviewInner}>
          <p className={styles.sectionIndex}>01 / The portfolio</p>
          <div className={styles.overviewCopy}>
            <h2>Lubrication that keeps systems moving with confidence.</h2>
            <p>
              Surface protection, thermal control and mechanical efficiency all rely on the right lubricant. This portfolio is built to support engine systems, industrial equipment and high-demand operations with practical, application-aware performance.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / Product categories</p>
            <h2>Precision lubrication for every operating need.</h2>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <article className={styles.categoryCard} key={category.title}>
                <div className={styles.categoryVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .12) 5%, rgba(12, 18, 22, .2) 38%, rgba(12, 18, 22, .92) 100%), url("${category.image}")` }} aria-hidden="true">
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryType}>Lubrication range</span>
                  <h3>{category.title}</h3>
                  <p>{category.copy}</p>
                  <Link className={styles.cardLink} href={{ pathname: "/discuss-requirements", query: { solution: "Lubricants", area: category.title } }}>
                    <span>View details</span><b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.dutyGuide}>
        <div className={styles.dutyGuideInner}>
          <div className={styles.dutyGuideHeading}>
            <p className={styles.sectionIndex}>03 / Match fluid to duty</p>
            <h2>Start with the operating conditions.</h2>
            <p>Load, temperature, equipment design and service intervals all shape the right lubrication decision.</p>
          </div>
          <div className={styles.dutyTableWrap}>
            <table className={styles.dutyTable}>
              <thead><tr><th>Operating need</th><th>Product families</th><th>Performance priority</th></tr></thead>
              <tbody>
                <tr><th scope="row">Engines and drivetrains</th><td>Engine oils, gear oils, transmission fluids</td><td>Wear control and thermal stability</td></tr>
                <tr><th scope="row">High-pressure equipment</th><td>Hydraulic oils and greases</td><td>Protection under load and reliable movement</td></tr>
                <tr><th scope="row">Continuous plant operation</th><td>Industrial and compressor oils</td><td>Consistent operation and planned maintenance</td></tr>
                <tr><th scope="row">Variable field conditions</th><td>Heavy-equipment and agricultural lubricants</td><td>Durability across changing duty cycles</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.dutyNote}>Final selection should always follow the equipment manufacturer’s specifications and the conditions of use.</p>
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportInner}>
          <p className={styles.sectionIndex}>04 / Performance under pressure</p>
          <div className={styles.supportContent}>
            <h2>Lubrication strategy built around operating reality.</h2>
            <p>
              The right lubricant improves efficiency, reduces wear and extends service life across engines, drivetrains, industrial equipment and field operations.
            </p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Lubricants" } }}>Start a conversation <span>↗</span></Link>
          </div>
          <p className={styles.supportAside}>NEXBLUE<br />Lubricants</p>
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
