import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import styles from "./page.module.css";

const categories = [
  {
    title: "Petrochemical products",
    copy: "Core industrial input materials selected for stability, reliability and easy integration into process-driven supply chains.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial chemicals",
    copy: "Dependable chemical materials that support manufacturing, processing and operational requirements across structured production environments.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Specialty chemicals",
    copy: "Targeted formulations designed to address performance-critical tasks where efficiency, safety and material compatibility matter most.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Specialty fluids",
    copy: "Application-specific fluid solutions engineered for controlled performance in demanding industrial and transport settings.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chemical intermediates",
    copy: "The essential inputs that help manufacturers maintain continuity, quality and process performance in prepared production programs.",
    image: "https://images.unsplash.com/photo-1576176539998-0237d3c0f8d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Process materials",
    copy: "Operational materials chosen to sustain processing stability, efficient flow and higher readiness across industrial workflows.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial consumables",
    copy: "Regular-use production inputs that keep maintenance, operations and service continuity easier to plan and manage.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bulk supply",
    copy: "Supply arrangements shaped for scale, continuity and commercially practical replenishment across production and distribution networks.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Institutional procurement",
    copy: "Structured sourcing support aligned to procurement requirements, specification expectations and dependable operational continuity.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Import and export opportunities",
    copy: "Cross-border supply opportunities designed around quality assurance, commercial alignment and reliable global coordination.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PetrochemicalsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Petrochemicals" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Petrochemicals</span>
            </div>
            <p className={styles.kicker}>04 / Petrochemicals</p>
            <h1>Petrochemicals</h1>
            <p className={styles.introduction}>
              Industrial chemical and supply support built around performance, sourcing continuity and dependable quality in complex operational environments.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Petrochemicals" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={styles.secondaryLink} href="#categories">Explore the range <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .08) 10%, rgba(12, 18, 22, .66) 100%), url('https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Industrial chemical production and storage" />
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.overview} id="categories">
        <div className={styles.overviewInner}>
          <p className={styles.sectionIndex}>01 / The portfolio</p>
          <div className={styles.overviewCopy}>
            <h2>Purposeful materials for more consistent operations.</h2>
            <p>
              Petrochemical and industrial input programs need clarity, material reliability and smart procurement support. This portfolio is structured to help customers connect supply quality with operational continuity and long-term planning.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / Product categories</p>
            <h2>Materials built for continuity and performance.</h2>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <article className={styles.categoryCard} key={category.title}>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <div className={styles.categoryVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .04) 25%, rgba(12, 18, 22, .3) 100%), url("${category.image}")` }} aria-hidden="true" />
                <div className={styles.categoryContent}>
                  <span className={styles.categoryType}>Supply category</span>
                  <h3>{category.title}</h3>
                  <p>{category.copy}</p>
                  <Link className={styles.cardLink} href={{ pathname: "/discuss-requirements", query: { solution: "Petrochemicals", area: category.title } }}>
                    <span>View details</span><b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sourcing}>
        <div className={styles.sourcingInner}>
          <div className={styles.sourcingIntro}>
            <p className={styles.sectionIndex}>03 / A clearer supply brief</p>
            <h2>Good sourcing begins with the details that keep material moving.</h2>
            <p>Aligning a supply program around specifications, handling needs and demand patterns helps reduce friction from initial enquiry through replenishment.</p>
          </div>
          <div className={styles.sourcingCriteria}>
            <div><span>01</span><section><h3>Material specification</h3><p>Identify the required grade, composition, technical documentation and acceptable equivalents.</p></section></div>
            <div><span>02</span><section><h3>Handling and compliance</h3><p>Set expectations for packaging, storage, transport conditions and applicable documentation.</p></section></div>
            <div><span>03</span><section><h3>Volume and timing</h3><p>Share order quantities, delivery cadence, destination requirements and forecast visibility.</p></section></div>
            <div><span>04</span><section><h3>Supply continuity</h3><p>Plan for replenishment, alternate sourcing options and the commercial terms that support reliable supply.</p></section></div>
          </div>
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportInner}>
          <p className={styles.sectionIndex}>04 / Supply with confidence</p>
          <div className={styles.supportContent}>
            <h2>Making industrial sourcing clearer and more reliable.</h2>
            <p>
              Whether the need is a proven industrial material, a specialty formulation or a broader supply program, the focus stays on dependable quality, practical availability and clear commercial alignment.
            </p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Petrochemicals" } }}>Start a conversation <span>↗</span></Link>
          </div>
          <p className={styles.supportAside}>NEXBLUE<br />Petrochemicals</p>
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
