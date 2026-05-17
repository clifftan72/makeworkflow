import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function HumanReviewBottleneck() {
  usePageMeta({
    title: 'When human review becomes the bottleneck | Make Work Flow™',
    description: 'Human review is not always governance. Sometimes it is just a bottleneck. The question is what the human is actually adding.',
    canonicalPath: '/field-notes/human-review-bottleneck',
    schemaType: 'Article',
    articleDate: '2025-05-15',
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
            <span className="tag tag-accent" style={{ fontSize: '0.72rem' }}>Human review</span>
          </div>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            When human review becomes the bottleneck
          </h1>
          <p style={{
            color: 'rgba(250,250,248,0.65)',
            maxWidth: '560px',
            lineHeight: 1.8,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.02em',
          }}>
            Human review is not always governance. Sometimes it is just a bottleneck.
            The question is what the human is actually adding.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              Human review sounds responsible.
            </p>

            <p>
              It suggests control, safety, judgement, and accountability.
            </p>

            <p>
              That is why many teams keep adding review steps whenever work feels risky
              or unclear.
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '1.25rem 0 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}>
              {[
                'One more approval.',
                'One more manager check.',
                'One more owner sign-off.',
                'One more "just send it to me first."',
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
              At first, this feels safe.
            </p>

            <p>
              Over time, it becomes the workflow.
            </p>

            <p>
              Everything waits for one person. The team stops making decisions. Work
              slows down. Small issues queue behind larger ones. Customers wait. Finance
              waits. Operations waits. The owner becomes the checkpoint for work they
              no longer have time to review properly.
            </p>

            <p>
              This is not governance.
            </p>

            <p>
              It is dependency.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The question is what the human is reviewing
            </h2>

            <p>
              The problem is not human review itself. Human review can be valuable.
              In some workflows, it is essential.
            </p>

            <p>
              The question is what the human is reviewing.
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '1.25rem 0 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}>
              {[
                'Are they applying judgement?',
                'Are they managing risk?',
                'Are they interpreting context?',
                'Are they making a decision that carries accountability?',
                'Or are they simply checking whether someone followed a known rule?',
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
              Those are very different things.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              When review is compensating for missing clarity
            </h2>

            <p>
              If the review exists because the rule is unclear, the fix is not more
              review. The fix is to clarify the rule.
            </p>

            <p>
              If the review exists because the team does not know what good looks like,
              the fix is not permanent approval. The fix is to define the standard.
            </p>

            <p>
              If the review exists because the system cannot be trusted, the fix may be
              better input quality, clearer ownership, or better exception handling.
            </p>

            <p>
              Many approval bottlenecks are created because the workflow was never
              designed properly.
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '1.25rem 0 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}>
              {[
                'A founder approves every discount because discount rules are unclear.',
                'A manager reviews every customer reply because tone guidelines are unclear.',
                'A finance lead checks every invoice because data entry is inconsistent.',
                'An operations head reviews every handoff because nobody knows what complete means.',
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
              In these cases, the human is not adding strategic judgement. They are
              compensating for missing workflow clarity.
            </p>

            <p>
              This is expensive. It also creates a hidden organisational habit: people
              stop owning the work because someone else will review it anyway.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The better move is to classify the review
            </h2>

            <p>
              Automation is often proposed as the solution. But automation should not
              simply remove the human review. That may create speed without safety.
            </p>

            <p>
              Some reviews should stay human. High-risk decisions. Exceptions. Sensitive
              communication. Financial approvals. Cases where judgement, context, or
              accountability matters.
            </p>

            <p>
              Some reviews can be reduced. Routine checks. Formatting issues. Status
              updates. Completeness checks. Rule-based routing. Repeated reminders.
            </p>

            <p>
              Some reviews should be redesigned. Instead of reviewing every item, the
              human reviews exceptions. Instead of approving every step, the human
              approves the rule. Instead of being the bottleneck, the human becomes the
              escalation point.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Where AI and automation can help
            </h2>

            <p>
              A system can check whether required fields are complete. It can flag cases
              outside normal rules. It can draft a response for review. It can summarise
              why something needs attention. It can route only exceptions to a manager.
            </p>

            <p>
              But this only works if the workflow has been thought through.
            </p>

            <p>
              The human role must be designed, not assumed.
            </p>

            <p>
              Human review should protect the decision, not block the workflow.
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
              Do not keep a human in the loop just because the process feels unclear.
              Clarify what the human is adding. If it is judgement, protect it. If it
              is routine checking, redesign it.
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
