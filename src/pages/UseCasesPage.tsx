import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const useCases = [
  {
    id: 'invoice-chasing',
    title: 'Invoice chasing',
    pattern: 'Accounts receivable follow-up',
    failurePoint: 'Follow-up timing depends on one person\'s memory. Chasing stops when that person is busy or absent.',
    correction: 'Map when invoices are sent, when payment is due, and what triggers a follow-up. Make the trigger explicit, not personal.',
    automation: 'Scheduled reminders, overdue flagging, and status reporting can all be supported once the trigger logic is clear.',
  },
  {
    id: 'customer-triage',
    title: 'Customer triage',
    pattern: 'Routing and first-response workflow',
    failurePoint: 'All enquiries arrive in the same inbox. Priority is judged by whoever checks email first, not by the nature of the request.',
    correction: 'Define what kinds of requests exist, what urgency looks like, and who handles what. Make routing criteria visible and consistent.',
    automation: 'Categorisation, routing, and acknowledgement can be supported by AI once the triage logic is defined by a human.',
  },
  {
    id: 'meeting-preparation',
    title: 'Meeting preparation',
    pattern: 'Pre-meeting information assembly',
    failurePoint: 'Preparation happens differently each time. Key information is missing, duplicated, or arrives too late to be useful.',
    correction: 'Map what information is needed before each meeting type, where it lives, and who is responsible for assembling it.',
    automation: 'Information retrieval, formatting, and distribution can be automated once the information structure is standardised.',
  },
  {
    id: 'operations-reporting',
    title: 'Operations reporting',
    pattern: 'Status and exception reporting',
    failurePoint: 'Reports are assembled manually from multiple sources. They take time, vary in format, and are often out of date before they are read.',
    correction: 'Define what decisions each report is meant to support. Strip everything else. Make data sources explicit.',
    automation: 'Data assembly, formatting, and distribution can be automated. The decision about what to report must remain human.',
  },
  {
    id: 'admin-handoffs',
    title: 'Admin handoffs',
    pattern: 'Internal task transfer and tracking',
    failurePoint: 'Tasks transfer between people informally. Status is unclear. Follow-up depends on relationships, not systems.',
    correction: 'Make handoff criteria explicit: what is being handed over, what state it is in, and what needs to happen next.',
    automation: 'Handoff notifications, status tracking, and reminders can be supported once the handoff conditions are defined.',
  },
  {
    id: 'tenancy-handoffs',
    title: 'Tenancy handoffs',
    pattern: 'Property transition workflow',
    failurePoint: 'Outgoing and incoming tenancy steps overlap unpredictably. Communication breaks. Items are missed or duplicated.',
    correction: 'Map the transition sequence end-to-end. Identify who is responsible at each step and what triggers the next action.',
    automation: 'Checklists, scheduling, and communication can be automated once the sequence is mapped and validated.',
  },
]

export default function UseCasesPage() {
  usePageMeta({
    title: 'Workflow Use Cases | Make Work Flow™',
    description: 'Common operational patterns where workflow clarity matters before AI, automation, or more tools are added.',
    canonicalPath: '/use-cases',
  })
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="use-cases-hero"
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
            Use Cases
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '680px' }}>
            Workflow patterns that appear across most SME operations.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.8,
          }}>
            These are not implementation guides. They are patterns — showing how workflow
            breaks and what thinking is needed before tools are introduced.
          </p>
        </div>
      </section>

      {/* ── Caveat note ── */}
      <section style={{ backgroundColor: 'var(--color-paper-warm)', padding: '2rem 0', borderBottom: '1px solid var(--color-paper-border)' }}>
        <div className="container-narrow">
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--color-ink-faint)',
            letterSpacing: '0.01em',
          }}>
            Each use case shows: the common failure point, the workflow-first correction,
            and where automation could help once clarity exists. Detailed implementation
            support is available through Harvest Point Consulting.
          </p>
        </div>
      </section>

      {/* ── Use Case Cards ── */}
      <section id="use-cases-list" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {useCases.map((uc, index) => (
              <div
                key={uc.id}
                id={`use-case-${uc.id}`}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-paper-border)',
                  padding: '2.5rem',
                  borderTop: index === 0 ? '3px solid var(--color-ink)' : '1px solid var(--color-paper-border)',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-faint)',
                      marginBottom: '0.4rem',
                    }}>
                      {uc.pattern}
                    </p>
                    <h3 style={{ fontSize: '1.35rem' }}>{uc.title}</h3>
                  </div>
                </div>

                {/* Three columns */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-signal-dark)',
                      marginBottom: '0.6rem',
                      borderBottom: '2px solid var(--color-signal)',
                      paddingBottom: '0.4rem',
                      display: 'inline-block',
                    }}>
                      Common failure point
                    </p>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                      {uc.failurePoint}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-mid)',
                      marginBottom: '0.6rem',
                      borderBottom: '2px solid var(--color-accent-light)',
                      paddingBottom: '0.4rem',
                      display: 'inline-block',
                    }}>
                      Workflow-first correction
                    </p>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                      {uc.correction}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-faint)',
                      marginBottom: '0.6rem',
                      borderBottom: '2px solid var(--color-paper-border)',
                      paddingBottom: '0.4rem',
                      display: 'inline-block',
                    }}>
                      Automation role (after clarity)
                    </p>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                      {uc.automation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Closing note ── */}
      <section id="use-cases-closing" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '540px' }}>
            Every organisation has its own version of these patterns.
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            The patterns above are starting points. The real work is mapping how they manifest
            in your specific context — your tools, your team, your handoffs. That is the
            work of a workflow review, not a template.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="use-cases-hpc-cta"
              className="btn btn-primary"
            >
              Work with Harvest Point Consulting ↗
            </a>
            <Link
              to="/method"
              id="use-cases-method-link"
              className="btn btn-secondary"
            >
              Read the Method
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
