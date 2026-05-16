import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="about-hero"
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
            About
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '660px' }}>
            Where this thinking came from.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}>
            Make Work Flow™ is a methodology, not a product. This page explains what it
            is, how it came to exist, and where the commercial work happens.
          </p>
        </div>
      </section>

      {/* ── About content ── */}
      <section id="about-content" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>
              Make Work Flow™
            </h2>
            <p>
              Make Work Flow™ was created by Clifford Tan as a way to explain the workflow-first
              thinking behind practical AI and automation. It is a way of approaching operational
              problems that starts with observation, not tools.
            </p>
            <p>
              The core argument is simple: most automation fails not because the technology
              is wrong, but because the workflow was never properly understood before the tool
              was introduced. Make Work Flow™ addresses that gap.
            </p>
            <p>
              The methodology is public. The thinking is shared openly because it is useful
              to organisations that are trying to figure out what AI and automation should
              actually do inside their operations — before they commit to a tool, a platform,
              or a vendor.
            </p>
          </div>

          {/* ── Divider ── */}
          <div style={{
            borderTop: '1px solid var(--color-paper-border)',
            paddingTop: '3rem',
            marginBottom: '3rem',
          }}>
            <h2 style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>
              Harvest Point Consulting
            </h2>
            <div className="prose-site" style={{ maxWidth: '600px' }}>
              <p>
                For consulting and implementation support, Harvest Point Consulting is the
                commercial firm that applies this methodology to real business operations.
              </p>
              <p>
                Make Work Flow™ is the thinking. Harvest Point Consulting is the practice.
                They are related but distinct. This site is not a sales channel for the
                consulting firm — it is a place to engage with the methodology.
              </p>
            </div>
          </div>

          {/* ── Principle statement ── */}
          <div style={{
            borderTop: '3px solid var(--color-ink)',
            paddingTop: '2rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              color: 'var(--color-ink-faint)',
              lineHeight: 2,
            }}>
              Workflow first &nbsp;·&nbsp; Agent second &nbsp;·&nbsp; Human decision protected
            </p>
          </div>

          {/* ── CTAs ── */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="about-hpc-cta"
              className="btn btn-primary"
            >
              Visit Harvest Point Consulting ↗
            </a>
            <Link
              to="/method"
              id="about-method-link"
              className="btn btn-secondary"
            >
              Read the Method
            </Link>
            <Link
              to="/field-notes"
              id="about-field-notes-link"
              className="btn btn-secondary"
            >
              Field Notes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
