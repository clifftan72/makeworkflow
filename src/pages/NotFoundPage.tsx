import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section
      id="not-found"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--color-paper)',
      }}
    >
      <div className="container-narrow">
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-faint)',
          marginBottom: '1.5rem',
        }}>
          404 — Page not found
        </p>
        <h1 style={{ marginBottom: '1.25rem', maxWidth: '480px' }}>
          This page does not exist.
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '460px', marginBottom: '2.5rem' }}>
          The page you are looking for may have moved or may not exist. Return to the
          homepage or explore the methodology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" id="not-found-home" className="btn btn-primary">
            Return to homepage
          </Link>
          <Link to="/method" id="not-found-method" className="btn btn-secondary">
            Read the Method
          </Link>
        </div>
      </div>
    </section>
  )
}
