import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function HandoffBreaks() {
  usePageMeta({
    title: 'Why the Handoff is Usually Where Work Breaks | Make Work Flow™',
    description: 'Most workflow failures do not happen mid-task. They happen at the point where responsibility transfers — and nobody has made that transfer explicit.',
    canonicalPath: '/field-notes/handoff-breaks',
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
            Why the Handoff is Usually Where Work Breaks
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            Most workflow failures do not happen mid-task. They happen at the point where
            responsibility transfers from one person, team, or system to another — and
            nobody has made that transfer explicit.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              Ask most operations managers where their workflow breaks, and they will point
              to a tool, a team member, or a process. Rarely do they point to the space
              between those things. But that gap — the handoff — is where most of the
              damage is done.
            </p>

            <p>
              A handoff is the moment where responsibility for a task, a decision, or a
              piece of information moves from one person, team, or system to another. It
              sounds simple. In practice, it is the most fragile point in any workflow.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What makes a handoff break
            </h2>

            <p>
              Handoffs fail for predictable reasons. The most common is information
              asymmetry: the person handing off knows something the person receiving does
              not. They forget to say it, assume it is obvious, or lack a consistent format
              for communicating it. The receiver picks up the task without the full picture
              and makes decisions based on incomplete information.
            </p>

            <p>
              The second most common failure is unclear ownership. When a task leaves one
              person's hands, it is not always clear whose hands it lands in. It sits in a
              shared inbox, a group chat, or a project board — visible to everyone and
              owned by no one. It waits until someone notices it has not moved.
            </p>

            <p>
              The third failure is timing. Handoffs often happen at the wrong moment — too
              early, before the work is actually ready to transfer; or too late, after the
              window for action has narrowed. A tenancy renewal notice sent to a property
              manager two days before deadline is technically a handoff. In practice, it
              is a problem.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              A real pattern
            </h2>

            <p>
              Consider a common accounts receivable workflow. An invoice is sent. Payment
              is due in 30 days. On day 31, someone notices it has not been paid. They
              send a follow-up. The follow-up may or may not be seen, depending on who
              checks the inbox that day.
            </p>

            <p>
              This is not an automation problem. It is a handoff problem. The trigger
              for follow-up lives in one person's memory, or in an unshared spreadsheet,
              or in the email thread nobody else can see. The information needed to act
              has not been transferred — it is trapped.
            </p>

            <p>
              Before any automation is introduced, the handoff itself needs to be made
              explicit. What triggers the follow-up? Who owns it? What information does
              that person need to act? Only once those questions are answered does
              automation become useful.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The workflow-first correction
            </h2>

            <p>
              Making a handoff explicit does not require software. It requires clarity.
              Three things need to be defined: what is being handed over, what state it
              is in when it transfers, and what the receiving person or system is expected
              to do next.
            </p>

            <p>
              In the accounts receivable example: the handoff is the overdue invoice. The
              state is the number of days overdue and the previous communication. The
              expected action is a specific follow-up within a defined timeframe. Once
              those three things are visible, the workflow can be managed — and eventually,
              supported by automation.
            </p>

            <p>
              This is the pattern across most operational workflows. The handoff is the
              problem. Making it explicit is the correction. Adding automation after that
              clarity exists is straightforward.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What to look for in your own workflows
            </h2>

            <p>
              If you want to find where your workflow is breaking, look for the places
              where work goes quiet. Where does a task sit between people without
              progressing? Where does someone regularly have to chase for an update?
              Where does the same information get re-explained every time it moves?
            </p>

            <p>
              Those are your handoffs. Those are where the work breaks. That is where to
              start before adding any new tool, system, or automation.
            </p>

          </div>

          {/* ── Article footer nav ── */}
          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-paper-border)',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <Link to="/method" id="article-method-link" className="btn btn-secondary">
              Read the Method
            </Link>
            <Link to="/use-cases" id="article-use-cases-link" className="btn btn-secondary">
              See Use Cases
            </Link>
            <Link to="/field-notes" id="article-back-link" className="btn btn-secondary">
              ← All Field Notes
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
