import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/method', label: 'Method' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/field-notes', label: 'Field Notes' },
  { to: '/resources', label: 'Resources' },
  { to: '/work-with-me', label: 'Work With Me' },
]

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)' }}>
      {/* ── Nav ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'var(--color-paper)' : 'var(--color-paper)',
          borderBottom: scrolled ? '1px solid var(--color-paper-border)' : '1px solid transparent',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <nav
          className="container-wide"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
          aria-label="Main navigation"
        >
          {/* Logo / Wordmark */}
          <Link
            to="/"
            id="nav-logo"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              color: 'var(--color-ink)',
              lineHeight: 1.2,
            }}>
              Make Work Flow™
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
              lineHeight: 1,
            }}>
              Methodology
            </span>
          </Link>

          {/* Desktop Links */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                style={({ isActive }) => ({
                  padding: '0.5rem 0.85rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid var(--color-ink)' : '2px solid transparent',
                  transition: 'all 0.15s ease',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-hpc-cta"
              className="btn btn-primary"
              style={{ marginLeft: '1rem', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            >
              Harvest Point Consulting ↗
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--color-ink)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="nav-mobile-menu"
            style={{
              backgroundColor: 'var(--color-paper)',
              borderTop: '1px solid var(--color-paper-border)',
              padding: '1rem 1.5rem 1.5rem',
            }}
          >
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-paper-mid)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
            >
              Harvest Point Consulting ↗
            </a>
          </div>
        )}
      </header>

      {/* ── Page Content ── */}
      <main style={{ flex: 1, paddingTop: '64px' }}>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-paper)',
          padding: '3.5rem 0 2rem',
        }}
      >
        <div className="container-wide">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}>
            {/* Brand column */}
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-paper)' }}>
                  Make Work Flow™
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, marginBottom: '1rem' }}>
                A workflow-first methodology for AI, automation, and operational clarity.
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.4)', fontFamily: 'var(--font-mono)' }}>
                Methodology by Harvest Point Consulting
              </p>
            </div>

            {/* Navigation column */}
            <div>
              <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,250,248,0.4)', marginBottom: '1rem' }}>
                Explore
              </p>
              <nav aria-label="Footer navigation">
                {navLinks.map(link => (
                  <div key={link.to} style={{ marginBottom: '0.6rem' }}>
                    <Link
                      to={link.to}
                      style={{ fontSize: '0.875rem', color: 'rgba(250,250,248,0.65)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-paper)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,248,0.65)')}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Consulting column */}
            <div>
              <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,250,248,0.4)', marginBottom: '1rem' }}>
                Implementation
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                For consulting and implementation support, visit Harvest Point Consulting.
              </p>
              <a
                href="https://www.harvestpointconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-hpc-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-paper)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(250,250,248,0.3)',
                  paddingBottom: '2px',
                  transition: 'border-color 0.15s ease',
                }}
              >
                harvestpointconsulting.com ↗
              </a>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(250,250,248,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.35)', margin: 0 }}>
              © {new Date().getFullYear()} Make Work Flow™. All rights reserved.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.35)', fontFamily: 'var(--font-mono)', margin: 0 }}>
              Workflow first. Agent second. Human decision protected.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile nav styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
