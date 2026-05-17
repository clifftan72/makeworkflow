import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const resources = [
  {
    id: 'workflow-question-checklist',
    type: 'Checklist',
    title: 'Ten questions before you automate',
    description: 'A short checklist to run before introducing any automation or AI tool into an existing workflow. Covers the most common failure points.',
    status: 'coming-soon',
    format: 'PDF — 1 page',
  },
  {
    id: 'workflow-canvas',
    type: 'Canvas',
    title: 'Workflow mapping canvas',
    description: 'A one-page template for sketching how work moves through people, tools, decisions, and handoffs. Intended to be used in a conversation, not completed alone.',
    status: 'coming-soon',
    format: 'PDF — 1 page',
  },
  {
    id: 'friction-finder',
    type: 'Reflection prompt',
    title: 'Friction finder: five questions to ask your team',
    description: 'Five questions to surface where a workflow is breaking before any redesign or automation conversation begins.',
    status: 'coming-soon',
    format: 'PDF — 1 page',
  },
  {
    id: 'ai-readiness-prompt',
    type: 'Reflection prompt',
    title: 'Is this workflow AI-ready?',
    description: 'A set of reflection prompts to evaluate whether a workflow is clear enough to support AI or automation. Based on the Five Moves framework.',
    status: 'coming-soon',
    format: 'PDF — 1 page',
  },
  {
    id: 'handoff-design-guide',
    type: 'Explainer',
    title: 'Designing a clean handoff',
    description: 'A short explainer on why handoffs fail and what makes a handoff clear enough to be reliable. Intended for operators and team leads.',
    status: 'coming-soon',
    format: 'PDF — 2 pages',
  },
]

export default function ResourcesPage() {
  usePageMeta({
    title: 'Resources — Simple Tools for Workflow Thinking',
    description: 'Checklists, canvases, and reflection prompts for thinking about workflow before automation. Public resources kept deliberately simple. Implementation support via Harvest Point Consulting.',
    canonicalPath: '/resources',
  })
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="resources-hero"
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
            Resources
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '660px' }}>
            Simple tools for thinking about workflow.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}>
            Checklists, canvases, and reflection prompts. Public resources are kept deliberately
            simple. Detailed implementation support is through Harvest Point Consulting.
          </p>
        </div>
      </section>

      {/* ── Resources scope note ── */}
      <section style={{
        backgroundColor: 'var(--color-paper-warm)',
        borderBottom: '1px solid var(--color-paper-border)',
        padding: '1.5rem 0',
      }}>
        <div className="container-narrow">
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--color-ink-faint)',
          }}>
            Public resources cover how to think, not how to deliver. For worksheets, diagnostic
            tools, and implementation templates, work with Harvest Point Consulting.
          </p>
        </div>
      </section>

      {/* ── Resource List ── */}
      <section id="resources-list" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                id={`resource-${resource.id}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '2rem',
                  alignItems: 'start',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-paper-border)',
                  borderTop: index === 0 ? '3px solid var(--color-ink)' : '1px solid var(--color-paper-border)',
                  padding: '2rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="tag">{resource.type}</span>
                    {resource.status === 'coming-soon' && (
                      <span className="tag" style={{ fontSize: '0.65rem', color: 'var(--color-ink-faint)' }}>
                        Coming soon
                      </span>
                    )}
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-ink-faint)',
                      letterSpacing: '0.04em',
                    }}>
                      {resource.format}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{resource.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '560px' }}>
                    {resource.description}
                  </p>
                </div>

                <div style={{ paddingTop: '0.25rem' }}>
                  <span className="btn" style={{
                    fontSize: '0.8rem',
                    padding: '0.6rem 1.1rem',
                    backgroundColor: 'var(--color-paper-mid)',
                    color: 'var(--color-ink-faint)',
                    cursor: 'default',
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                  }}>
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Scope clarifier ── */}
      <section id="resources-scope" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '520px' }}>
            What is not published here — and why.
          </h2>
          <div className="prose-site" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
            <p>
              Detailed diagnostic worksheets, scoring tools, and implementation templates
              are not published publicly. This is not because they are secret — it is because
              they require context to be useful.
            </p>
            <p>
              A checklist used without understanding the underlying thinking often produces
              false confidence. The public resources on this page are designed to prompt
              thinking, not replace it.
            </p>
            <p>
              For structured diagnostic and implementation support, work with
              Harvest Point Consulting.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="resources-hpc-cta"
              className="btn btn-primary"
            >
              Work with Harvest Point Consulting ↗
            </a>
            <Link
              to="/field-notes"
              id="resources-field-notes-link"
              className="btn btn-secondary"
            >
              Read Field Notes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
