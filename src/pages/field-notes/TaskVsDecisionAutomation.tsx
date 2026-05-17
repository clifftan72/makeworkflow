import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function TaskVsDecisionAutomation() {
  usePageMeta({
    title: 'The difference between automating a task and automating a decision | Make Work Flow™',
    description: 'Not everything should be automated. A task can often be supported by automation. A decision needs context, judgement, and accountability.',
    canonicalPath: '/field-notes/task-vs-decision-automation',
    schemaType: 'Article',
    articleDate: '2025-05-08',
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
            <span className="tag tag-accent" style={{ fontSize: '0.72rem' }}>AI and agents</span>
          </div>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            The difference between automating a task and automating a decision
          </h1>
          <p style={{
            color: 'rgba(250,250,248,0.65)',
            maxWidth: '560px',
            lineHeight: 1.8,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.02em',
          }}>
            Not everything should be automated. A task can often be supported by
            automation. A decision needs context, judgement, and accountability.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              A task and a decision are not the same thing.
            </p>

            <p>
              That sounds obvious until automation enters the conversation.
            </p>

            <p>
              Many teams say they want to automate a process, but when the work is examined
              more closely, part of that process is not a task. It is a decision.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              A task has a clearer shape
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
                'Send a reminder.',
                'Create a draft.',
                'Update a status.',
                'Move a file.',
                'Extract invoice details.',
                'Route a message to the right queue.',
              ].map((item, i) => (
                <li key={i} style={{
                  paddingLeft: '1.25rem',
                  borderLeft: '2px solid var(--color-paper-border)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink-muted)',
                }}>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              These actions can often be supported by automation because the input, rule,
              and output can be defined.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              A decision is different
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
                'Should this customer be escalated?',
                'Should this invoice be disputed or chased?',
                'Should this exception be approved?',
                'Should this request be treated as urgent?',
                'Should this case be handled normally or differently?',
              ].map((item, i) => (
                <li key={i} style={{
                  paddingLeft: '1.25rem',
                  borderLeft: '2px solid var(--color-paper-border)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink-muted)',
                }}>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              These questions require context. Sometimes they require judgement. Sometimes
              they require accountability. Sometimes they require knowledge that does not
              live neatly inside a system.
            </p>

            <p>
              This is where automation can become dangerous.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The issue is not that AI cannot help — it can
            </h2>

            <p>
              AI can summarise the context. It can highlight missing information. It can
              suggest possible next steps. It can compare a case against known criteria.
              It can prepare a recommendation.
            </p>

            <p>
              But preparing a decision and making a decision are not the same.
            </p>

            <p>
              When teams confuse the two, they start handing over responsibility to a
              system before the workflow is ready.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The better approach is to separate the work
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
                'Which parts are tasks?',
                'Which parts are decisions?',
                'Which decisions are low-risk and rule-based?',
                'Which decisions need human review?',
                'Which decisions should never be fully automated?',
              ].map((item, i) => (
                <li key={i} style={{
                  paddingLeft: '1.25rem',
                  borderLeft: '2px solid var(--color-paper-border)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink-muted)',
                }}>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              This separation changes the automation conversation.
            </p>

            <p>
              Instead of asking, "Can AI do this?", the better question is: what role
              should AI play here?
            </p>

            <p>
              Sometimes the answer is simple automation. Sometimes it is decision support.
              Sometimes it is a draft for human review. Sometimes it is an alert.
              Sometimes the right answer is not to automate yet.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              This matters especially in small businesses
            </h2>

            <p>
              In many SMEs, decisions are hidden inside habits. A founder approves things
              because they have always approved them. A finance lead knows which customers
              need a softer tone. An operations manager knows which supplier delays are
              normal and which are warning signs.
            </p>

            <p>
              These are not always written down. They live in experience.
            </p>

            <p>
              If automation is added before these decision patterns are understood, the
              system may move faster while making the business less safe.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The workflow-first approach is not anti-automation
            </h2>

            <p>
              It simply asks for the work to be understood first.
            </p>

            <p>
              A useful automation does not remove judgement blindly. It reduces unnecessary
              effort around the judgement.
            </p>

            <p>
              It gathers the context. It prepares the options. It flags the exceptions.
              It makes the next step clearer. The human still owns the decision where the
              decision matters.
            </p>

            <p>
              This is what "human in the loop" should mean. Not a token approval step.
              Not a vague safety phrase. A clear understanding of what the human is
              responsible for and why.
            </p>

            <p>
              If the human adds judgement, keep the human there.
            </p>

            <p>
              If the human is only copying data, chasing updates, or formatting
              information, automation may help.
            </p>

            <p>
              The line matters.
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
              Do not ask whether a process can be automated. First ask which parts are
              tasks, which parts are decisions, and where human judgement must remain
              protected.
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
