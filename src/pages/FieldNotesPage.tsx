import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const categories = [
  { id: 'workflow-friction', label: 'Workflow friction' },
  { id: 'ai-agents', label: 'AI and agents' },
  { id: 'handoffs', label: 'Handoffs' },
  { id: 'human-review', label: 'Human review' },
  { id: 'sme-operations', label: 'SME operations' },
  { id: 'tool-sprawl', label: 'Tool sprawl' },
  { id: 'decision-bottlenecks', label: 'Decision bottlenecks' },
]

const fieldNotes = [
  {
    id: 'fn-why-handoffs-break',
    slug: 'why-handoffs-break',
    tag: 'Handoffs',
    title: 'Why the handoff is usually where work breaks',
    excerpt: 'Most workflow failures happen when responsibility moves from one person to another. The handoff is where work slows, disappears, or becomes unclear.',
    status: 'published',
    date: 'May 2025',
  },
  {
    id: 'fn-task-vs-decision-automation',
    slug: 'task-vs-decision-automation',
    tag: 'AI and agents',
    title: 'The difference between automating a task and automating a decision',
    excerpt: 'Not everything should be automated. A task can often be supported by automation. A decision needs context, judgement, and accountability.',
    status: 'published',
    date: 'May 2025',
  },
  {
    id: 'fn-human-review-bottleneck',
    slug: 'human-review-bottleneck',
    tag: 'Human review',
    title: 'When human review becomes the bottleneck',
    excerpt: 'Human review is not always governance. Sometimes it is just a bottleneck. The question is what the human is actually adding.',
    status: 'published',
    date: 'May 2025',
  },
  {
    id: 'fn-tool-sprawl',
    slug: 'tool-sprawl',
    tag: 'Tool sprawl',
    title: 'More tools, more friction: the paradox of the modern SME stack',
    excerpt: 'The average small business uses more software than it can integrate. Each new tool creates a new handoff. Workflow clarity is often a tool problem in disguise.',
    status: 'published',
    date: 'May 2025',
  },
  {
    id: 'fn-memory-workflow',
    slug: 'workflow-memory',
    tag: 'Workflow friction',
    title: "The hidden cost of workflows that live in someone's head",
    excerpt: "When a workflow depends on one person's knowledge, it works until that person is absent, busy, or gone. Externalising that knowledge is not a technology problem.",
    status: 'published',
    date: 'May 2025',
  },
  {
    id: 'fn-decision-bottleneck',
    slug: null,
    tag: 'Decision bottlenecks',
    title: 'When the approval is the workflow',
    excerpt: 'In many small businesses, a single person is the decision point for almost everything. This is not a workflow — it is a dependency. Automation cannot solve it.',
    status: 'coming-soon',
    date: null,
  },
]

export default function FieldNotesPage() {
  usePageMeta({
    title: 'Field Notes | Make Work Flow™',
    description: 'Short observations on workflow friction, handoffs, AI agents, human review, and operational clarity.',
    canonicalPath: '/field-notes',
  })
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="field-notes-hero"
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
            Field Notes
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '660px' }}>
            Observations from real workflow problems.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}>
            Short, practical notes on how work breaks in real organisations.
            Grounded in operational observation, not theory.
          </p>
        </div>
      </section>

      {/* ── Categories ── */}
      <section style={{ backgroundColor: 'var(--color-paper-warm)', padding: '1.5rem 0', borderBottom: '1px solid var(--color-paper-border)' }}>
        <div className="container-site">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
              marginRight: '0.5rem',
            }}>
              Topics:
            </span>
            {categories.map(cat => (
              <span key={cat.id} className="tag" style={{ cursor: 'default' }}>
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notes Grid ── */}
      <section id="field-notes-list" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-site">
          <div className="grid-3" style={{ gap: '2px' }}>
            {fieldNotes.map(note => {
              const isPublished = note.status === 'published' && note.slug
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                isPublished ? (
                  <Link
                    to={`/field-notes/${note.slug}`}
                    id={note.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-paper-border)',
                      padding: '2rem',
                      textDecoration: 'none',
                      transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.10)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink-muted)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-paper-border)'
                    }}
                  >
                    {children}
                  </Link>
                ) : (
                  <div
                    id={note.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-paper-border)',
                      padding: '2rem',
                      opacity: 0.75,
                    }}
                  >
                    {children}
                  </div>
                )

              return (
                <CardWrapper key={note.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="tag tag-accent">{note.tag}</span>
                    {note.status === 'coming-soon' ? (
                      <span className="tag" style={{ fontSize: '0.65rem', color: 'var(--color-ink-faint)' }}>
                        Coming soon
                      </span>
                    ) : note.date ? (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--color-ink-faint)',
                        letterSpacing: '0.04em',
                      }}>
                        {note.date}
                      </span>
                    ) : null}
                  </div>

                  <h2 style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: isPublished ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                    margin: 0,
                  }}>
                    {note.title}
                  </h2>

                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--color-ink-faint)',
                    fontStyle: isPublished ? 'normal' : 'italic',
                    flex: 1,
                    margin: 0,
                  }}>
                    {note.excerpt}
                  </p>

                  {isPublished && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.04em',
                      color: 'var(--color-accent-mid)',
                      textTransform: 'uppercase',
                    }}>
                      Read →
                    </span>
                  )}
                </CardWrapper>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Bottom CTA ── */}
      <section id="field-notes-subscribe" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '500px' }}>
            These notes reflect real operational problems.
          </h2>
          <div className="prose-site" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
            <p>
              If these observations match what you are seeing in your own organisation,
              the next step is a workflow clarity conversation — not more reading.
            </p>
            <p>
              Harvest Point Consulting applies this kind of thinking to real business
              operations. If you want help understanding where your workflow is breaking,
              that is where to start.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="field-notes-hpc-cta"
              className="btn btn-primary"
            >
              Work with Harvest Point Consulting ↗
            </a>
            <Link
              to="/resources"
              id="field-notes-resources-link"
              className="btn btn-secondary"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
