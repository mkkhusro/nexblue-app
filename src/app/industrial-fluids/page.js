import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import shared from "../diesel-exhaust-fluid/page.module.css";
import styles from "./page.module.css";

const products = [
  {
    title: "Hydraulic fluids",
    copy: "Fluid solutions for hydraulic equipment that depends on reliable power transfer, component protection and steady operation.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Industrial gear oils",
    copy: "Lubrication options for enclosed gear systems working under sustained loads and demanding operating conditions.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Compressor fluids",
    copy: "Fluids for compressor systems, selected around equipment type, operating temperature and service interval requirements.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Industrial lubricants",
    copy: "General and application-specific lubrication for plant equipment, moving assemblies and routine industrial operations.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Coolants",
    copy: "Cooling fluids for systems that need managed heat transfer and compatibility with their materials and operating conditions.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Metalworking fluids",
    copy: "Process fluids for machining applications, with selection guided by material, operation, equipment and shop-floor practice.",
    image: "https://images.unsplash.com/photo-1576176539998-0237d3c0f8d2?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Cutting fluids",
    copy: "Application-focused fluids for cutting operations where process demands and workpiece requirements guide product choice.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Specialty industrial fluids",
    copy: "Purpose-selected fluids for equipment and processes with specific performance, material or operating requirements.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Heavy-equipment fluids",
    copy: "Fluid support for mobile machinery operating through variable loads, environments and demanding work cycles.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Maintenance fluid",
    copy: "Everyday service fluids that support planned upkeep, equipment readiness and smoother maintenance routines.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function IndustrialFluidsPage() {
  return (
    <main className={shared.page}>
      <header className={shared.header}>
        <div className={shared.headerInner}>
          <Brand />
          <nav className={shared.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={shared.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Industrial Fluids" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={shared.hero}>
        <div className={shared.heroInner}>
          <div className={shared.heroCopy}>
            <div className={shared.breadcrumbs}>
              <Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Industrial Fluids</span>
            </div>
            <p className={shared.kicker}>06 / Industrial fluids</p>
            <h1>Industrial Fluids</h1>
            <p className={shared.introduction}>
              Fluid and lubrication categories for plant, process and mobile equipment, selected around the demands of each application.
            </p>
            <div className={shared.heroActions}>
              <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Industrial Fluids" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={shared.secondaryLink} href="#products">Explore the range <span>↓</span></a>
            </div>
          </div>
          <figure className={shared.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .04) 18%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Industrial equipment in a working facility" />
        </div>
        <div className={shared.heroRule} />
      </section>

      <section className={shared.overview}>
        <div className={shared.overviewInner}>
          <p className={shared.sectionIndex}>01 / The range</p>
          <div className={shared.overviewCopy}>
            <h2>Fluids selected for the job, not just the machine.</h2>
            <p>Equipment design, operating conditions, materials and service routines all influence fluid selection. Start with the manufacturer’s recommendation and the requirements of the process.</p>
          </div>
        </div>
      </section>

      <section className={styles.rangeSection} id="products">
        <div className={styles.rangeInner}>
          <div className={styles.rangeHeading}>
            <p className={shared.sectionIndex}>02 / Product categories</p>
            <h2>Industrial fluid support across the operating cycle.</h2>
          </div>
          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <article className={styles.productCard} key={product.title}>
                <div className={styles.productVisual} style={{ backgroundImage: `url("${product.image}")` }} role="img" aria-label={`${product.title} for industrial applications`}>
                  <span className={styles.productNumber}>0{index + 1}</span>
                  <span className={styles.imageLabel}>Industrial fluids</span>
                </div>
                <div className={styles.productContent}>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                  <Link className={styles.productLink} href={{ pathname: "/discuss-requirements", query: { solution: "Industrial Fluids", area: product.title } }}>
                    View details <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={shared.selectionNote}>
        <div className={shared.selectionInner}>
          <p className={shared.sectionIndex}>03 / Specify with confidence</p>
          <div>
            <h2>Bring the application details into the conversation.</h2>
            <p>Share the equipment or process, OEM specification, operating conditions, expected volume and preferred delivery format. That context helps narrow the fluid options to what the application actually requires.</p>
            <Link className={shared.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Industrial Fluids" } }}>Plan a supply enquiry <span>↗</span></Link>
          </div>
        </div>
      </section>

      <footer className={shared.footer}>
        <div className={shared.footerTop}>
          <div className={shared.footerBrandBlock}>
            <Brand />
            <p>Engineering the essential.<br />Building what comes next.</p>
          </div>
          <div className={shared.footerLinks}>
            <span>Explore</span>
            <div className={shared.footerLinkGrid}>
              <Link href="/">Home</Link>
              <Link href="/#industries">Solutions</Link>
              <Link href="/company">Company</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
          <div className={shared.footerAction}>
            <span>Have a challenge?</span>
            <Link href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></Link>
          </div>
        </div>
        <div className={shared.footerBottom}>
          <span>© 2025 NEXBLUE INDUSTRIES</span>
          <div><Link href="/#home">Instagram</Link><Link href="/#home">LinkedIn</Link><Link href="/#home">Privacy</Link></div>
          <span>Made for the next horizon</span>
        </div>
      </footer>
    </main>
  );
}