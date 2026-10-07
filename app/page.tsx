import { services } from "./services/service-data";

const steps = [
  ["01", "Walk the site", "We identify finished surfaces, traffic paths, work zones, and site-specific risks."],
  ["02", "Build the plan", "You get a clear protection scope designed around your schedule and the work ahead."],
  ["03", "Install clean", "Our crew fits, secures, and seals every layer with disciplined attention to detail."],
  ["04", "Remove clean", "When the work is done, protection comes down carefully and the space is left ready."],
];

const faqs = [
  ["When should tarping be installed?", "Before demolition, painting, restoration, mechanical work, material movement, or any trade enters a finished area. The earlier protection is planned, the cleaner the project runs."],
  ["Can you work in occupied buildings?", "Yes. We can create contained work zones, protected access routes, and phased installations designed to reduce disruption in homes, offices, retail, and shared buildings."],
  ["What surfaces can you protect?", "Hardwood, tile, stone, carpet, walls, millwork, glazing, stairs, elevators, fixtures, furniture, equipment, and other finished or sensitive surfaces."],
  ["What is open-decking ceiling protection?", "It is a suspended interior tarping system installed below exposed roof decking or active overhead work. It creates a protective ceiling that helps contain dust, insulation, debris, and incidental water before they reach the occupied space below."],
  ["Do you remove the protection afterward?", "Yes. Removal can be included in the scope so materials come down carefully and the protected space is returned clean and ready."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="JPC Tarping Company home">
            <span className="brand-mark">JPC</span>
            <span className="brand-name">Tarping Company</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Our Work</a>
          </div>
          <a className="button button-small" href="#quote">Get a free quote</a>
        </nav>

        <div className="hero-content shell">
          <div className="eyebrow"><span /> Interior protection specialists</div>
          <h1>We protect the space.<br /><em>You handle the work.</em></h1>
          <p className="hero-copy">
            Professional interior tarping and containment for renovations,
            restoration, and construction. Clean installs. Complete coverage.
            Zero shortcuts.
          </p>
          <div className="hero-actions">
            <a className="button" href="#quote">Protect your project <span>↗</span></a>
            <a className="text-link" href="#services">Explore our services <span>↓</span></a>
          </div>
        </div>

        <div className="hero-proof shell" aria-label="Service highlights">
          <div><strong>01</strong><span>Residential<br />interiors</span></div>
          <div><strong>02</strong><span>Commercial<br />spaces</span></div>
          <div><strong>03</strong><span>Dust &amp; debris<br />containment</span></div>
          <p>Built around your site.<br />Installed around your schedule.</p>
        </div>
      </section>

      <section className="statement section shell" aria-labelledby="statement-title">
        <div className="section-kicker">Protection is part of the build</div>
        <div>
          <h2 id="statement-title">The best work starts<br />with what you <em>don’t damage.</em></h2>
          <p>JPC creates a controlled layer between active work and finished space—so crews move confidently, clients stay comfortable, and every surface is treated like it matters.</p>
        </div>
      </section>

      <section className="services section" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-head light-head">
            <div className="section-kicker">What we protect</div>
            <h2 id="services-title">Coverage that fits<br /><em>the job.</em></h2>
            <p>From one finished room to an entire occupied building, every installation is shaped to the site—not pulled from a template.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <a className={`service-item${index === services.length - 1 ? " featured-service" : ""}`} href={`/services/${service.slug}`} key={service.number} aria-label={`Learn about ${service.title}`}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="split-feature" id="work">
        <div className="feature-image commercial-image" role="img" aria-label="Commercial interior with floor-to-ceiling construction containment" />
        <div className="feature-copy">
          <div className="section-kicker">Commercial protection</div>
          <h2>Keep the project moving.<br /><em>Keep business protected.</em></h2>
          <p>Contain active work, preserve client-facing areas, and maintain cleaner movement through offices, retail, hospitality, and multi-unit properties.</p>
          <ul>
            <li><span>01</span> Occupied-space containment</li>
            <li><span>02</span> Protected traffic routes</li>
            <li><span>03</span> Interior roof &amp; open-deck protection</li>
            <li><span>04</span> Phased installation &amp; removal</li>
          </ul>
          <a className="dark-link" href="#quote">Plan commercial protection <span>↗</span></a>
        </div>
      </section>

      <section className="precision section shell">
        <div className="precision-copy">
          <div className="section-kicker">Precision, not plastic</div>
          <h2>Protection should look<br />as considered as <em>the work.</em></h2>
          <p>Clean seams, tight edges, correct materials, and thoughtful access points. JPC installs protection that feels intentional because it is.</p>
          <div className="mini-metrics">
            <div><strong>Custom-fit</strong><span>for the surface</span></div>
            <div><strong>Site-ready</strong><span>for every trade</span></div>
            <div><strong>Clean removal</strong><span>when work is done</span></div>
          </div>
        </div>
        <div className="precision-image">
          <img src="/images/detail.png" alt="Technician sealing protective tarp around cabinetry and hardwood flooring" />
          <div className="image-label"><span>JPC standard</span> Sharp lines. Sealed edges.</div>
        </div>
      </section>

      <section className="process section" id="process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-head process-head">
            <div className="section-kicker">How we work</div>
            <h2 id="process-title">Simple from scope<br />to <em>strip-down.</em></h2>
            <p>One protection partner. One clear plan. A cleaner jobsite from the first sheet down to the final removal.</p>
          </div>
          <div className="process-line">
            {steps.map(([number, title, copy]) => (
              <article key={number}>
                <div className="step-dot"><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blue-banner">
        <div className="shell banner-inner">
          <p>Renovation <span>•</span> Roofing <span>•</span> Open Decking <span>•</span> Restoration <span>•</span> Construction</p>
        </div>
      </section>

      <section className="faq section shell" aria-labelledby="faq-title">
        <div>
          <div className="section-kicker">Straight answers</div>
          <h2 id="faq-title">Before the first<br /><em>sheet goes down.</em></h2>
          <p>Have a site-specific question? Send the scope and a few photos. We’ll help you identify what needs protection.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="quote" id="quote">
        <div className="shell quote-grid">
          <div className="quote-intro">
            <div className="section-kicker">Start with the space</div>
            <h2>Tell us what<br />needs <em>protecting.</em></h2>
            <p>Share the project type, timing, and surfaces involved. We’ll help shape the right protection plan.</p>
            <div className="quote-note"><strong>For faster scoping</strong><span>Include approximate square footage and photos of finished areas.</span></div>
          </div>
          <form className="quote-form" action="mailto:quotes@jpctarping.com" method="post" encType="text/plain">
            <label>
              <span>Your name</span>
              <input name="name" type="text" placeholder="Full name" required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" placeholder="Best number to reach you" />
            </label>
            <label>
              <span>Project type</span>
              <select name="project-type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Residential renovation</option>
                <option>Commercial construction</option>
                <option>Restoration project</option>
                <option>Other interior protection</option>
              </select>
            </label>
            <label className="full-field">
              <span>What needs protecting?</span>
              <textarea name="details" placeholder="Tell us about the space, timing, and work being completed" rows={4} required />
            </label>
            <button className="button full-field" type="submit">Request my estimate <span>↗</span></button>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark">JPC</span><span className="brand-name">Tarping Company</span></a>
          <p>Interior protection, installed with purpose.</p>
          <a href="#quote">Get a quote <span>↗</span></a>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 JPC Tarping Company</span>
          <span>Residential • Commercial • Restoration</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
