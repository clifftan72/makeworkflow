import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const principles = [
  {
    id: 'observe',
    label: 'Observe the real work',
    description: 'Work as it exists in documentation rarely matches work as it happens on the ground. Start by watching.',
  },
  {
    id: 'friction',
    label: 'Find the friction',
    description: 'Every workflow has points where information disappears, decisions stall, or effort repeats. These are the real problem.',
  },
  {
    id: 'automate',
    label: 'Automate only where it makes sense',
    description: 'Automation applied to a broken process creates a faster broken process. Clarity must come first.',
  },
]

const useCasePreviews = [
  { id: 'invoice', label: 'Invoice chasing', pattern: 'Accounts receivable follow-up' },
  { id: 'triage', label: 'Customer triage', pattern: 'Routing and first-response workflow' },
  { id: 'meeting', label: 'Meeting preparation', pattern: 'Pre-meeting information assembly' },
  { id: 'reporting', label: 'Operations reporting', pattern: 'Status and exception reporting' },
  { id: 'admin', label: 'Admin handoffs', pattern: 'Internal task transfer and tracking' },
  { id: 'tenancy', label: 'Tenancy handoffs', pattern: 'Property transition workflow' },
]

const fieldNotePreviews = [
  {
    id: 'fn1',
    slug: 'why-handoffs-break',
    tag: 'Handoffs',
    title: 'Why the handoff is usually where work breaks',
    excerpt: 'Most workflow failures happen when responsibility moves from one person to another.',
    status: 'published',
  },
  {
    id: 'fn2',
    slug: 'task-vs-decision-automation',
    tag: 'AI and agents',
    title: 'The difference between automating a task and automating a decision',
    excerpt: 'Not everything should be automated. A task can often be supported by automation. A decision needs context, judgement, and accountability.',
    status: 'published',
  },
  {
    id: 'fn3',
    slug: 'human-review-bottleneck',
    tag: 'Human review',
    title: 'When human review becomes the bottleneck',
    excerpt: 'Human review is not always governance. Sometimes it is just a bottleneck. The question is what the human is actually adding.',
    status: 'published',
  },
]

export default function HomePage() {
  usePageMeta({
    title: 'Make Work Flow™ | Workflow-first thinking for AI and automation',
    description: 'A workflow-first way to think about AI, automation, and operational clarity. Before automation, understand the work.',
    canonicalPath: '/',
  })
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-paper)',
          padding: '8rem 0 7rem',
          borderBottom: '4px solid var(--color-accent)',
        }}
      >
        <div className="container-narrow">
          <div style={{ marginBottom: '2rem' }}>
            <span className="tag" style={{
              backgroundColor: 'rgba(250,250,248,0.08)',
              color: 'rgba(250,250,248,0.6)',
              borderColor: 'rgba(250,250,248,0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
            }}>
              Make Work Flow™ — Methodology
            </span>
          </div>

          <h1 style={{
            color: 'var(--color-paper)',
            marginBottom: '1.75rem',
            maxWidth: '720px',
          }}>
            Make work flow before you automate it.
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(250,250,248,0.72)',
            maxWidth: '600px',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            A workflow-first way to think about AI, automation, and operational clarity.
            Built for people who need to understand how work actually moves before adding more tools.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link
              to="/method"
              id="hero-cta-method"
              className="btn btn-primary"
              style={{
                backgroundColor: 'var(--color-paper)',
                color: 'var(--color-ink)',
                fontSize: '0.95rem',
                padding: '0.85rem 1.75rem',
              }}
            >
              Explore the Method
            </Link>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-hpc"
              className="btn btn-outline-light"
              style={{ fontSize: '0.95rem', padding: '0.85rem 1.75rem' }}
            >
              Work with Harvest Point Consulting ↗
            </a>
          </div>

          <div style={{
            borderTop: '1px solid rgba(250,250,248,0.12)',
            paddingTop: '1.75rem',
          }}>
            <p className="principle-line" style={{ color: 'rgba(250,250,248,0.35)', fontSize: '0.75rem' }}>
              Workflow first &nbsp;·&nbsp; Agent second &nbsp;·&nbsp; Human decision protected
            </p>
          </div>
        </div>
      </section>

      {/* ── Method Premise ── */}
      <section id="method-premise" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ marginBottom: '1.25rem', maxWidth: '640px' }}>
              Most automation fails because the work was never understood.
            </h2>
            <p style={{ fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.8 }}>
              AI can speed up a workflow, but it cannot fix a workflow nobody has mapped.
              Make Work Flow™ starts with how work moves through people, tools, decisions,
              and handoffs — before any tool is selected or any automation is built.
            </p>
          </div>

          <div className="grid-3">
            {principles.map((p) => (
              <div
                key={p.id}
                id={`principle-${p.id}`}
                style={{
                  borderTop: '3px solid var(--color-ink)',
                  paddingTop: '1.5rem',
                }}
              >
                <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>
                  {p.label}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Five Moves Teaser ── */}
      <section id="five-moves-teaser" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <div style={{ marginBottom: '1rem' }}>
            <span className="tag tag-accent">The Five Moves</span>
          </div>
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '560px' }}>
            A structured way to see your workflow before you change it.
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            The Five Moves is a thinking framework for observing, mapping, and designing
            workflow before automation is introduced. It keeps human judgement in the right
            places and automation out of the wrong ones.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/method"
              id="five-moves-cta"
              className="btn btn-primary"
            >
              Read the Method
            </Link>
            <Link
              to="/use-cases"
              id="five-moves-use-cases"
              className="btn btn-secondary"
            >
              See Use Cases
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Use Cases Preview ── */}
      <section id="use-cases-preview" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '600px' }}>
            <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Use Cases</span>
            <h2 style={{ marginBottom: '1rem' }}>Common patterns where workflow clarity matters.</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75 }}>
              These are workflow patterns — not implementation blueprints. Each one shows
              where work commonly breaks and what workflow thinking looks like before tools
              are introduced.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {useCasePreviews.map(uc => (
              <div
                key={uc.id}
                id={`use-case-preview-${uc.id}`}
                className="card"
                style={{ borderTop: '3px solid var(--color-paper-border)' }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-faint)',
                  marginBottom: '0.6rem',
                }}>
                  {uc.pattern}
                </p>
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{uc.label}</h4>
              </div>
            ))}
          </div>

          <Link to="/use-cases" id="use-cases-more" className="btn btn-secondary">
            Explore All Use Cases
          </Link>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Field Notes Preview ── */}
      <section id="field-notes-preview" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '600px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1rem', display: 'inline-block' }}>Field Notes</span>
            <h2 style={{ marginBottom: '1rem' }}>Observations from the field.</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75 }}>
              Short, practical notes on how work breaks in real organisations. Grounded in
              operational observation, not theory.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {fieldNotePreviews.map(fn => (
              <Link
                key={fn.id}
                to={`/field-notes/${fn.slug}`}
                id={`field-note-preview-${fn.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-paper-border)',
                  padding: '2rem',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink-muted)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-paper-border)'
                }}
              >
                <span className="tag tag-accent" style={{ display: 'inline-block', alignSelf: 'flex-start' }}>
                  {fn.tag}
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.45, color: 'var(--color-ink)', margin: 0 }}>
                  {fn.title}
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--color-ink-faint)', margin: 0, flex: 1 }}>
                  {fn.excerpt}
                </p>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.04em',
                  color: 'var(--color-accent-mid)',
                  textTransform: 'uppercase',
                }}>
                  Read →
                </span>
              </Link>
            ))}
          </div>

          <Link to="/field-notes" id="field-notes-more" className="btn btn-secondary">
            Read Field Notes
          </Link>
        </div>
      </section>

      <hr className="divider" />

      {/* ── HPC CTA ── */}
      <section
        id="hpc-cta"
        className="section-lg"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-paper)',
        }}
      >
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="principle-line" style={{
            color: 'rgba(250,250,248,0.5)',
            marginBottom: '1.5rem',
          }}>
            Implementation support
          </p>
          <h2 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem' }}>
            Ready to apply this inside your business?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(250,250,248,0.75)',
            maxWidth: '500px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}>
            Make Work Flow™ is the thinking. Harvest Point Consulting is the practice.
            Work with a consulting firm that applies this methodology to real operational problems.
          </p>
          <a
            href="https://www.harvestpointconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            id="homepage-hpc-main-cta"
            className="btn"
            style={{
              backgroundColor: 'var(--color-paper)',
              color: 'var(--color-ink)',
              fontSize: '1rem',
              padding: '0.9rem 2rem',
            }}
          >
            Visit Harvest Point Consulting ↗
          </a>
        </div>
      </section>
    </>
  )
}
