import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "../service-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.hero} Learn how JPC Tarping Company protects active residential and commercial projects.`,
    openGraph: {
      title: `${service.title} | JPC Tarping Company`,
      description: service.hero,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <main className="service-page">
      <section
        className="service-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(3,9,15,.98) 0%, rgba(3,9,15,.9) 42%, rgba(3,9,15,.3) 78%, rgba(3,9,15,.18) 100%), url('${service.image}')` }}
      >
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="JPC Tarping Company home">
            <span className="brand-mark">JPC</span>
            <span className="brand-name">Tarping Company</span>
          </a>
          <div className="nav-links">
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/#work">Our Work</a>
          </div>
          <a className="button button-small" href="/#quote">Get a free quote</a>
        </nav>

        <div className="service-hero-content shell">
          <div className="service-breadcrumb"><a href="/#services">Services</a><span>/</span><strong>{service.number}</strong></div>
          <div className="eyebrow"><span /> Interior protection specialists</div>
          <h1>{service.titleLines[0]}<br /><em>{service.titleLines[1]}</em></h1>
          <p>{service.hero}</p>
          <a className="button" href="/#quote">Plan this protection <span>↗</span></a>
        </div>

        <div className="service-hero-foot shell">
          <span>JPC service {service.number}</span>
          <span>Residential • Commercial</span>
          <span>Site-specific installation</span>
        </div>
      </section>

      <section className="service-intro section shell">
        <div className="section-kicker">What it solves</div>
        <div>
          <h2>{service.statement}</h2>
          <p>{service.detail}</p>
        </div>
      </section>

      <section className="service-lists section">
        <div className="shell service-list-grid">
          <div>
            <div className="section-kicker">What we protect</div>
            <h2>Coverage built<br /><em>around the risk.</em></h2>
          </div>
          <div className="coverage-list">
            {service.protects.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-approach section">
        <div className="shell">
          <div className="service-section-head">
            <div className="section-kicker">The JPC approach</div>
            <h2>Measured. Installed.<br /><em>Maintained.</em></h2>
            <p>Every system is planned around the actual site, the active trades, the project duration, and the finishes or operations that cannot be compromised.</p>
          </div>
          <div className="approach-grid">
            {service.approach.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-ideal section shell">
        <div>
          <div className="section-kicker">Best suited for</div>
          <h2>Protection that earns<br />its place <em>on site.</em></h2>
        </div>
        <div className="ideal-grid">
          {service.idealFor.map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="service-faq section">
        <div className="shell service-faq-grid">
          <div>
            <div className="section-kicker">Service questions</div>
            <h2>Before we<br /><em>install.</em></h2>
            <p>Exact materials and installation details are confirmed after reviewing the site, schedule, surfaces, and work taking place.</p>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="shell service-cta-grid">
          <div>
            <div className="section-kicker">Protect the project</div>
            <h2>Bring us in<br /><em>before the work.</em></h2>
          </div>
          <div>
            <p>Tell us what is staying, what work is happening, and when the site needs to be ready. We’ll help define the right protection scope.</p>
            <a className="button" href="/#quote">Request a protection plan <span>↗</span></a>
          </div>
        </div>
      </section>

      <a className="next-service" href={`/services/${nextService.slug}`}>
        <span>Next service</span>
        <strong>{nextService.number} — {nextService.title}</strong>
        <b>→</b>
      </a>

      <footer>
        <div className="shell footer-top">
          <a className="brand" href="/" aria-label="JPC Tarping Company home"><span className="brand-mark">JPC</span><span className="brand-name">Tarping Company</span></a>
          <p>Interior protection, installed with purpose.</p>
          <a href="/#quote">Get a quote <span>↗</span></a>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 JPC Tarping Company</span>
          <span>Residential • Commercial • Restoration</span>
          <a href="/#services">All services ↑</a>
        </div>
      </footer>
    </main>
  );
}
