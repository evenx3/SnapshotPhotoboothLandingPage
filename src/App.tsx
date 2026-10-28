const Logo = () => (
  <span className="logo-lockup">
    <svg viewBox="0 0 44 34" aria-hidden="true">
      <path d="M3 9h8l3-5h16l3 5h8v22H3Z" />
      <circle cx="22" cy="20" r="8" />
      <path d="M7 6h5" />
    </svg>
    <span>SNAPSHOT</span>
  </span>
)

function Polaroid({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`polaroid ${className}`}>
      <div className="photo-placeholder">
        <span>PHOTO</span>
        <small>PLACEHOLDER</small>
      </div>
      <div className="polaroid-caption">{label}</div>
    </div>
  )
}

function Phone({ className = '' }: { className?: string }) {
  return (
    <div className={`phone ${className}`} aria-label="Phone preview placeholder">
      <div className="phone-screen">
        <small>SNAPSHOT / 2025</small>
        <strong>PLACEHOLDER</strong>
        <span>EVENT PREVIEW</span>
      </div>
    </div>
  )
}

const features = [
  ['01', 'Portable setup', 'We bring the booth, backdrop, and good energy.'],
  ['02', 'Made for you', 'Colors, frames, and screens styled to your event.'],
  ['03', 'QR access', 'Guests get a simple digital route to their memories.'],
  ['04', 'Event branding', 'Turn every keepsake into a piece of your identity.'],
]

export default function App() {
  return (
    <main>
      <nav>
        <a className="brand" href="#top" aria-label="Snapshot home">
          <Logo />
        </a>
        <a className="nav-cta" href="#booking">BOOK A DATE</a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">PORTABLE PHOTOBOOTH / DIGITAL MEMORIES</div>
        <div className="hero-copy">
          <h1>MORE THAN<br />A PHOTO<br /><em>BOOTH.</em></h1>
          <p>We turn club events into physical receipt-style keepsakes captured on-site, accessible digitally, and remembered long after.</p>
          <div className="actions">
            <a className="button secondary" href="#demo">SEE DEMO</a>
            <div className="scribble cta-note">We bring the camera,<br />you make the memories</div>
          </div>
        </div>
        <div className="hero-art" id="demo">
          <Phone className="phone-one" />
          <Phone className="phone-two" />
          <Polaroid label="FRIDAY, 11:48 PM" className="p-one" />
          <Polaroid label="BEST NIGHT EVER" className="p-two" />
        </div>
        <div className="ticker">
          <span>✦</span><span>KEEP THE MOMENT ALIVE</span><span>✦</span><span>CLUBS / FORMALS / LAUNCHES</span><span>✦</span><span>KEEP THE MOMENT ALIVE</span><span>✦</span><span>CLUBS / FORMALS / LAUNCHES</span><span>✦</span>
        </div>
      </section>

      <section className="different">
        <div className="sticker sticker-real" aria-hidden="true">KEEP IT REAL</div>
        <div className="section-label light">[ WHY IT'S DIFFERENT ]</div>
        <div className="different-heading">
          <h2>NOT A PHOTO<br />STRIP FACTORY.</h2>
        </div>
        <div className="reason-grid">
          <article>
            <span className="reason-icon">♡</span>
            <h3>MEMORY FIRST</h3>
            <p>Designed to preserve the tiny moments that make an event yours.</p>
          </article>
          <article>
            <span className="reason-icon">✦</span>
            <h3>OWN THE LOOK</h3>
            <p>A visual world shaped around your club, campaign, or theme.</p>
          </article>
          <article>
            <span className="reason-icon people-icon" aria-hidden="true">
              <svg viewBox="0 0 66 44">
                <circle cx="16" cy="10" r="6" />
                <circle cx="50" cy="10" r="6" />
                <path d="M2 42c0-13 6-21 14-21s14 8 14 21" />
                <path d="M36 42c0-13 6-21 14-21s14 8 14 21" />
              </svg>
            </span>
            <h3>MADE TO SHARE</h3>
            <p>Easy access that keeps your event moving beyond the venue.</p>
          </article>
        </div>
      </section>

      <section className="proof">
        <div className="sticker sticker-approved" aria-hidden="true">SNAPSHOT<br />APPROVED</div>
        <div className="section-label">[ SAMPLE CLIENTS / PLACEHOLDERS ]</div>
        <h2>SEEN AT <span>GOOD NIGHTS.</span></h2>
        <div className="logo-tape">
          <span>CLUB LOGO 01</span><span>EVENT NAME</span><span>CLUB LOGO 03</span><span>FORMAL ’25</span>
        </div>
        <div className="testimonial">
          <span className="quote-mark">“</span>
          <blockquote>“PLACEHOLDER TESTIMONIAL ABOUT HOW SNAPSHOT MADE THE EVENT UNFORGETTABLE.”</blockquote>
          <p>— SAMPLE ORGANIZER, SAMPLE CLUB</p>
        </div>
      </section>

      <section className="capabilities">
        <div className="section-label">[ THE DETAILS ]</div>
        <div className="cap-heading">
          <h2>WE BRING<br />THE MAGIC.</h2>
          <p>Flexible enough for your floor plan. Distinct enough to become part of the night.</p>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <aside className="reality-check">
          <strong>REALITY CHECK / GOOD TO KNOW</strong>
          <p>Final setup depends on venue access, power, Wi-Fi, and floor space. Digital delivery timing may vary with connectivity. Exact inclusions are confirmed before booking.</p>
        </aside>
      </section>

      <section className="booking" id="booking">
        <div className="final-cta">
          <h2>LET’S MAKE<br />IT A NIGHT<br />TO KEEP.</h2>
          <a className="button final" href="mailto:hello@snapshot.example">INQUIRE NOW</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><Logo /></a>
        <p>PORTABLE PHOTOBOOTH / MEMORY MAKERS</p>
        <p>© 2025 SNAPSHOT — PROTOTYPE CONTENT</p>
      </footer>
    </main>
  )
}
