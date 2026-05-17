import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function WhyHandoffsBreak() {
  usePageMeta({
    title: 'Why the handoff is usually where work breaks | Make Work Flow™',
    description: 'Most workflow failures happen when responsibility moves from one person to another. The handoff is where work slows, disappears, or becomes unclear.',
    canonicalPath: '/field-notes/why-handoffs-break',
    schemaType: 'Article',
    articleDate: '2025-05-01',
  })

  return (
    <>
      <section
        id="article-hero"
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-paper)',
          padding: '5rem 0 4rem',
          borderBottom: '4px solid var(--color-accent)',
        }}
      >
        <div className="container-narrow">
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to="/field-notes"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.5)',
                textDecoration: 'none',
              }}
            >
              ← Field Notes
            </Link>
            <span style={{ color: 'rgba(250,250,248,0.2)' }}>·</span>
            <span className="tag tag-accent" style={{ fontSize: '0.72rem' }}>Handoffs</span>
          </div>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            Why the handoff is usually where work breaks
          </h1>
          <p style={{
            color: 'rgba(250,250,248,0.65)',
            maxWidth: '560px',
            lineHeight: 1.8,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.02em',
          }}>
            Most workflow failures happen when responsibility moves from one person to
            another. The handoff is where work slows, disappears, or becomes unclear.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              Work rarely breaks because one person forgot to do their job.
            </p>

            <p>
              More often, work breaks when it moves from one person to another.
            </p>

            <p>
              That moment looks small. A message is sent. A spreadsheet is updated. A task
              is mentioned in passing. Someone says, "I'll handle it." Someone else assumes
              the next step is obvious.
            </p>

            <p>
              Then the work disappears.
            </p>

            <p>
              Nobody is fully sure who owns it now. The first person thinks they have
              handed it over. The next person thinks they are still waiting for more
              information. The manager assumes the team is handling it. The customer
              assumes someone is following up.
            </p>

            <p>
              This is where many workflows quietly fail.
            </p>

            <p>
              The handoff is often treated as an informal moment, but it is actually one
              of the most important parts of the workflow. It is the point where
              responsibility, context, information, timing, and expectation all need to
              move together.
            </p>

            <p>
              Usually, they do not.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              A clean handoff answers simple questions
            </h2>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '1.25rem 0 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}>
              {[
                'What is being handed over?',
                'Who owns it now?',
                'What state is it in?',
                'What information is missing?',
                'What needs to happen next?',
                'When should it be followed up?',
                'What happens if nothing moves?',
              ].map((q, i) => (
                <li key={i} style={{
                  paddingLeft: '1.25rem',
                  borderLeft: '2px solid var(--color-paper-border)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink-muted)',
                }}>
                  {q}
                </li>
              ))}
            </ul>

            <p>
              Most teams do not answer these questions explicitly. They rely on familiarity,
              memory, relationships, and common sense.
            </p>

            <p>
              That works until the business gets busy.
            </p>

            <p>
              It also works until someone is on leave, a new person joins, the volume
              increases, or the person who normally "just knows" is not available.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why adding a tool does not fix this
            </h2>

            <p>
              A project management system can show a task. A CRM can show a lead. An
              accounting system can show an invoice. A shared inbox can show an email.
              But none of these tools can fix an unclear transfer of responsibility.
            </p>

            <p>
              The problem is not where the task is stored.
            </p>

            <p>
              The problem is whether the handoff is understood.
            </p>

            <p>
              AI and automation can help with handoffs, but only after the handoff is
              clear enough to support. A system can send a reminder. It can route a
              request. It can flag an overdue item. It can prepare a summary. It can
              notify the next person.
            </p>

            <p>
              But it cannot decide the meaning of an unclear handoff unless the business
              has already defined what a proper handoff looks like.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Before automating the handoff, make it visible
            </h2>

            <p>
              The first useful move is not to ask, "What tool should we use?"
            </p>

            <p>
              It is to ask: where does responsibility change hands?
            </p>

            <p>
              That question reveals more than most workflow diagrams. It shows where sales
              hands over to operations. Where operations hands over to finance. Where
              customer service hands over to fulfilment. Where an owner approval interrupts
              the flow. Where a WhatsApp message becomes the only record of a decision.
            </p>

            <p>
              Once the handoff is visible, the next question is simple:
            </p>

            <p>
              What must be true before the next person can act?
            </p>

            <p>
              That is where workflow clarity begins. Not in the software. Not in the
              automation. Not in the dashboard.
            </p>

            <p>
              At the handoff.
            </p>

            <p>
              Because if the handoff is unclear, every tool downstream inherits the
              confusion.
            </p>

          </div>

          {/* ── Quiet takeaway ── */}
          <div style={{
            maxWidth: '640px',
            marginTop: '3rem',
            padding: '1.5rem 1.75rem',
            borderLeft: '3px solid var(--color-accent)',
            backgroundColor: 'var(--color-accent-pale)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.6rem',
            }}>
              Quiet takeaway
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              Before improving the workflow, find the handoff. That is usually where the
              work is breaking.
            </p>
          </div>

          {/* ── Article footer nav ── */}
          <div style={{
            maxWidth: '640px',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-paper-border)',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <Link to="/method" id="article-method-link" className="btn btn-secondary">
              Read the Method
            </Link>
            <Link to="/use-cases" id="article-use-cases-link" className="btn btn-secondary">
              See Use Cases
            </Link>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="article-hpc-cta"
              className="btn btn-primary"
            >
              Work with Harvest Point Consulting ↗
            </a>
          </div>

          <div style={{ maxWidth: '640px', marginTop: '1.5rem' }}>
            <Link
              to="/field-notes"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.04em',
                color: 'var(--color-ink-faint)',
                textDecoration: 'none',
              }}
            >
              ← All Field Notes
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
