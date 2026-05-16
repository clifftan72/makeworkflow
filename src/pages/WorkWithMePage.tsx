export default function WorkWithMePage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="work-with-me-hero"
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-paper)',
          padding: '6rem 0 5rem',
          borderBottom: '4px solid var(--color-accent)',
        }}
      >
        <div className="container-narrow">
          <span className="tag" style={{
            backgroundColor: 'rgba(250,250,248,0.08)',
            color: 'rgba(250,250,248,0.55)',
            borderColor: 'rgba(250,250,248,0.1)',
            marginBottom: '1.75rem',
            display: 'inline-block',
          }}>
            Work With Me
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '680px' }}>
            Apply this thinking inside your business.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.8,
          }}>
            Make Work Flow™ is the methodology. Harvest Point Consulting is where that
            methodology is applied to real operational problems.
          </p>
        </div>
      </section>

      {/* ── Main message ── */}
      <section id="work-with-me-main" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1.5rem', maxWidth: '580px' }}>
              This methodology is public. The application is consulting work.
            </h2>
            <div className="prose-site" style={{ maxWidth: '580px' }}>
              <p>
                The thinking on this site — the Five Moves, the use case patterns, the field
                notes — is published here because it is useful to read and consider. Understanding
                how workflows break and how to think before automating is valuable on its own.
              </p>
              <p>
                But applying it inside a real business is different from reading about it.
                It requires someone who understands the context, can ask the right questions,
                and can help turn observations into decisions.
              </p>
              <p>
                That is what Harvest Point Consulting does. It is a consulting firm that applies
                this methodology to real operational problems in SMEs and professional services
                organisations.
              </p>
            </div>
          </div>

          {/* ── Relationship Card ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            marginBottom: '3rem',
          }}>
            <div style={{
              backgroundColor: 'var(--color-paper-warm)',
              border: '1px solid var(--color-paper-border)',
              borderTop: '3px solid var(--color-ink)',
              padding: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-faint)',
                marginBottom: '0.75rem',
              }}>
                Make Work Flow™
              </p>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>The methodology</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                Public thinking about workflow-first AI, automation, and operational
                clarity. Articles, frameworks, use case patterns. Available to anyone.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-accent-pale)',
              border: '1px solid rgba(26,58,42,0.15)',
              borderTop: '3px solid var(--color-accent)',
              padding: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
              }}>
                Harvest Point Consulting
              </p>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>The practice</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                Applied consulting work. Workflow reviews, operational clarity,
                and structured implementation support inside real businesses.
              </p>
            </div>
          </div>

          {/* ── Primary CTA ── */}
          <div style={{
            borderTop: '1px solid var(--color-paper-border)',
            paddingTop: '3rem',
          }}>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '2rem',
            }}>
              If you want help applying Make Work Flow™ inside your business,
              the starting point is a workflow clarity conversation with Harvest Point Consulting.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.harvestpointconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                id="work-with-me-primary-cta"
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.9rem 1.75rem' }}
              >
                Visit Harvest Point Consulting ↗
              </a>
              <a
                href="https://calendar.app.google/nm2skoXfuhwzAgALA"
                target="_blank"
                rel="noopener noreferrer"
                id="work-with-me-book-call"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.9rem 1.75rem' }}
              >
                Book a Workflow Clarity Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── What not to expect ── */}
      <section id="work-with-me-scope" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.5rem', maxWidth: '480px' }}>
            What this site is not.
          </h2>
          <div className="prose-site" style={{ maxWidth: '560px' }}>
            <p>
              There are no service packages listed here, no pricing, no timelines, and no
              promises about outcomes. That information belongs in a consulting conversation,
              not on a public website.
            </p>
            <p>
              This site is a place to think, not a place to buy. If the thinking here is
              useful and you want to go further, Harvest Point Consulting is where that
              conversation happens.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
