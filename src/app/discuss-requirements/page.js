"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Brand } from "../solutions/automotive/AutomotiveSolutionPage";
import { automotiveSolutions } from "../solutions/automotive/data";
import styles from "./page.module.css";

const requirementOptions = automotiveSolutions.flatMap((solution) => [
  {
    value: solution.title,
    label: solution.title,
  },
  ...solution.areas.map((area) => ({
    value: `${solution.title} / ${area.title}`,
    label: `${solution.title} / ${area.title}`,
  })),
]);

export default function DiscussRequirementsPage() {
  return (
    <Suspense fallback={<div className={styles.loadingState}>Loading enquiry form…</div>}>
      <DiscussRequirementsContent />
    </Suspense>
  );
}

function DiscussRequirementsContent() {
  const searchParams = useSearchParams();
  const solutionParam = searchParams.get("solution") || "Automotive solutions";
  const areaParam = searchParams.get("area");
  const initialTopic = areaParam && areaParam !== "General enquiry"
    ? `${solutionParam} / ${areaParam}`
    : solutionParam;
  const enquiryOptions = requirementOptions.some((option) => option.value === initialTopic)
    ? requirementOptions
    : [{ value: initialTopic, label: initialTopic }, ...requirementOptions];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: initialTopic,
    timeline: "Within 1-3 months",
    message: "",
  });

  useEffect(() => {
    setForm((current) => ({
      ...current,
      enquiryType: initialTopic,
    }));
  }, [initialTopic]);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Enquiry type: ${form.enquiryType}`,
      `Timeline: ${form.timeline}`,
      "",
      "Requirements:",
      form.message || "No additional project detail provided.",
    ].join("\n");

    const subject = encodeURIComponent(`Requirement enquiry for ${form.enquiryType}`);
    const href = `mailto:hello@nexblue.in?subject=${subject}&body=${encodeURIComponent(body)}`;

    if (typeof window !== "undefined") {
      window.location.href = href;
    }

    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.headerNav} aria-label="Page navigation">
            <Link href="/">Home</Link>
            <Link href="/#industries">Solutions</Link>
            <Link className={styles.headerCta} href="#enquiry-form">Talk to our team <span>↗</span></Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Discuss your requirements</p>
          <h1>Tell us about your challenge.</h1>
          <p className={styles.introduction}>
            Share your operating context, vehicle requirements or service needs and we’ll help guide the next conversation.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formShell}>
          <aside className={styles.infoPanel}>
            <p className={styles.panelLabel}>Enquiry context</p>
            <h2>{solutionParam === "Automotive solutions" ? "For your next step" : `For ${solutionParam}`}</h2>
            <div className={styles.summary}>
              <div>
                <span>Focus</span>
                <strong>{initialTopic}</strong>
              </div>
              <div>
                <span>Typical response</span>
                <strong>Within 1–2 business days</strong>
              </div>
            </div>

            <ul className={styles.checklist}>
              <li>Vehicle, fleet, workshop or operating requirements</li>
              <li>Current product or solution challenge</li>
              <li>Timeline, scope and preferred next step</li>
            </ul>
          </aside>

          <form id="enquiry-form" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldRow}>
              <label>
                <span>Full name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                <span>Company</span>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company or organisation" />
              </label>
            </div>

            <div className={styles.fieldRow}>
              <label>
                <span>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@email.com" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
              </label>
            </div>

            <label>
              <span>Relevant solution or product</span>
              <select name="enquiryType" value={form.enquiryType} onChange={handleChange}>
                {enquiryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className={styles.fieldRow}>
              <label>
                <span>Timeline</span>
                <select name="timeline" value={form.timeline} onChange={handleChange}>
                  <option>Within 1-3 months</option>
                  <option>Within 3-6 months</option>
                  <option>Exploring options</option>
                  <option>Urgent requirement</option>
                </select>
              </label>
            </div>

            <label>
              <span>Tell us about your requirements</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share details about your use case, vehicle or operating context, current challenge, and any important requirements."
                rows={7}
                required
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              Send enquiry <span>↗</span>
            </button>
          </form>
        </div>

        {submitted && (
          <div className={styles.successBanner} role="status">
            Your enquiry is ready to send via your email app. We’ll review the details and be in touch soon.
          </div>
        )}
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
            <a href="mailto:hello@nexblue.in">hello@nexblue.in <b>↗</b></a>
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
