import Link from "next/link";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import styles from "./page.module.css";

const categories = [
  {
    title: "Exterior cleaning solutions",
    copy: "High-performance wash and finish systems for vehicles, fleet depots and service environments requiring consistent appearance and dependable results.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior cleaning products",
    copy: "Purpose-built cleaners for cabin surfaces, trim, fabrics and touchpoints that need a clean, careful and low-residue finish.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Car-care chemicals",
    copy: "Everyday vehicle care formulations designed for routine cleaning, preparation and finish support across personal and commercial use.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Degreasers",
    copy: "Targeted degreasing products for workshop surfaces, engine bays and stubborn contamination without compromising equipment or process safety.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Detailing products",
    copy: "A refined selection of finishing, polishing and surface-care essentials that support a premium vehicle presentation and consistent upkeep.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vehicle protection products",
    copy: "Protective solutions that help preserve paint, trim, rubber and serviceable surfaces against daily wear, exposure and maintenance cycles.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Workshop consumables",
    copy: "Essential consumables for garages, service teams and depots that need cleaner work areas, better handling and smoother operations.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automotive accessories",
    copy: "Functional, presentation-focused accessories and support items that improve daily vehicle care and workshop usability.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial vehicle care",
    copy: "Fleet-oriented solutions for heavy use, consistent upkeep and operational readiness across transport, logistics and service fleets.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Professional car-care solutions",
    copy: "Pro-grade programs and products for business operators, service centres and detail specialists who need quality, consistency and process support.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AutomobileCareProductsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href={{ pathname: "/discuss-requirements", query: { solution: "Automobile Care Products" } }}>Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs}>
              <Link href="/">NEXBLUE</Link><span>/</span><Link href="/#industries">Solutions</Link><span>/</span><span>Automobile Care Products</span>
            </div>
            <p className={styles.kicker}>02 / Automobile care</p>
            <h1>Automobile Care Products</h1>
            <p className={styles.introduction}>
              Thoughtful care solutions for vehicles, fleets and service teams that want dependable upkeep, a stronger finish and cleaner day-to-day operations.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Automobile Care Products" } }}>Discuss your requirements <span>↗</span></Link>
              <a className={styles.secondaryLink} href="#categories">Explore the range <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroVisual} style={{ backgroundImage: "linear-gradient(180deg, rgba(12, 18, 22, .08) 10%, rgba(12, 18, 22, .65) 100%), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90')" }} role="img" aria-label="Vehicle care and detailing products arranged for professional use" />
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.overview} id="categories">
        <div className={styles.overviewInner}>
          <p className={styles.sectionIndex}>01 / The range</p>
          <div className={styles.overviewCopy}>
            <h2>Caring for the vehicle, the fleet and the finish.</h2>
            <p>
              From exterior care to workshop-ready essentials, this product group brings together the materials and routines that keep vehicles looking sharp, operating cleanly and staying ready for the next service or route.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / Product categories</p>
            <h2>Built for every stage of care.</h2>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <article className={styles.categoryCard} key={category.title}>
                <div className={styles.categoryVisual} style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 22, .04) 25%, rgba(12, 18, 22, .5) 100%), url("${category.image}")` }} aria-hidden="true">
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryType}>Vehicle care / {String(index + 1).padStart(2, "0")}</span>
                  <h3>{category.title}</h3>
                  <p>{category.copy}</p>
                  <Link className={styles.cardLink} href={{ pathname: "/discuss-requirements", query: { solution: "Automobile Care Products", area: category.title } }}>
                    <span>View details</span><b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.carePath}>
        <div className={styles.carePathInner}>
          <div className={styles.carePathHeading}>
            <p className={styles.sectionIndex}>03 / Care in practice</p>
            <h2>A repeatable routine, from first wash to lasting protection.</h2>
            <p>Build a care program around vehicle use, surface condition and the time available to maintain it.</p>
          </div>
          <ol className={styles.careSteps}>
            <li>
              <span>01</span>
              <div><h3>Clean</h3><p>Lift road film and everyday soil with a wash approach suited to the vehicle and finish.</p></div>
              <b>Exterior and interior cleaners</b>
            </li>
            <li>
              <span>02</span>
              <div><h3>Prepare</h3><p>Address stubborn deposits and surface imperfections before applying finishing products.</p></div>
              <b>Degreasers and detailing products</b>
            </li>
            <li>
              <span>03</span>
              <div><h3>Protect</h3><p>Choose protective treatments for the surfaces and exposure conditions that matter most.</p></div>
              <b>Paint, trim and surface protection</b>
            </li>
            <li>
              <span>04</span>
              <div><h3>Maintain</h3><p>Keep results consistent with practical replenishment and a routine teams can repeat.</p></div>
              <b>Workshop and fleet consumables</b>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportInner}>
          <p className={styles.sectionIndex}>04 / A cleaner standard</p>
          <div className={styles.supportContent}>
            <h2>Professional care, designed for real operating conditions.</h2>
            <p>
              Whether you are running a dealership, service centre, workshop or fleet operation, the right care program supports presentation, maintenance and day-to-day confidence.
            </p>
            <Link className={styles.primaryButton} href={{ pathname: "/discuss-requirements", query: { solution: "Automobile Care Products" } }}>Start a conversation <span>↗</span></Link>
          </div>
          <p className={styles.supportAside}>NEXBLUE<br />Automobile care</p>
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
