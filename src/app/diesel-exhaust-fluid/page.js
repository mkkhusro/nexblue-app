import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import styles from "./page.module.css";

const products = [
  {
    code: "AUS 32",
    title: "AUS 32",
    descriptor: "32.5% aqueous urea solution",
    copy: "For compatible selective catalytic reduction systems in diesel vehicles and equipment. Match the fluid specification to the requirements of the vehicle or system manufacturer.",
    application: "Compatible on-road and off-road SCR systems",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Commercial transport fleet prepared for operation",
  },
  {
    code: "AUS 40",
    title: "AUS 40",
    descriptor: "40% aqueous urea solution",
    copy: "A higher-concentration urea solution for SCR systems specifically designed for AUS 40. Confirm equipment approval, storage conditions and supply format before ordering.",
    application: "Equipment and systems specified for AUS 40",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Industrial equipment and fluid handling environment",
  },
];

export default function DieselExhaustFluidPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Diesel Exhaust Fluid" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Diesel Exhaust Fluid</span>
            </div>
            <p className={styles.kicker}>05 / Emissions fluid</p>
            <h1>Diesel Exhaust Fluid</h1>
            <p className={styles.introduction}>
              Urea solution options for compatible SCR systems, selected by the specification your vehicle or equipment requires.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Diesel Exhaust Fluid" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={styles.secondaryLink} href="#products">Explore AUS 32 and AUS 40 <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .04) 18%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Commercial transport vehicle" />
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <p className={styles.sectionIndex}>01 / Choose by specification</p>
          <div className={styles.overviewCopy}>
            <h2>The right fluid starts with the system requirement.</h2>
            <p>
              AUS 32 and AUS 40 are different concentration options, not interchangeable choices. Check the SCR system documentation and manufacturer guidance before selecting a product or planning a supply program.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.productSection} id="products">
        <div className={styles.productInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / Product range</p>
            <h2>Two specifications.<br /><em>One clear selection.</em></h2>
          </div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <article className={`${styles.productCard} ${index === 1 ? styles.productCardAlt : ""}`} key={product.code}>
                <div className={styles.productVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .08) 25%, rgba(12, 18, 22, .74) 100%), url("${product.image}")` }} role="img" aria-label={product.imageAlt}>
                  <span className={styles.productIndex}>0{index + 1} / NEXBLUE DEF</span>
                  <strong>{product.code}</strong>
                </div>
                <div className={styles.productContent}>
                  <p className={styles.productDescriptor}>{product.descriptor}</p>
                  <h3>{product.title}</h3>
                  <p className={styles.productCopy}>{product.copy}</p>
                  <div className={styles.application}>
                    <span>Application fit</span>
                    <p>{product.application}</p>
                  </div>
                  <Link className={styles.productLink} href={{ pathname: "/discuss-requirements", query: { solution: "Diesel Exhaust Fluid", area: product.title } }}>
                    Discuss {product.title} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.selectionNote}>
        <div className={styles.selectionInner}>
          <p className={styles.sectionIndex}>03 / Before you order</p>
          <div>
            <h2>Confirm compatibility, handling and delivery needs.</h2>
            <p>Share the required AUS grade, equipment specification, delivery location, expected volume and preferred packaging. The selection should always follow the system manufacturer’s requirements.</p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Diesel Exhaust Fluid" } }}>Plan a supply enquiry <span>↗</span></Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
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
          <div><Link href="/#home">Instagram</Link><Link href="/#home">LinkedIn</Link><Link href="/#home">Privacy</Link></div>
          <span>Made for the next horizon</span>
        </div>
      </footer>
    </main>
  );
}
