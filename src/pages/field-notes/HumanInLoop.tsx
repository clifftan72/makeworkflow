import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function HumanInLoop() {
  usePageMeta({
    title: 'When to Keep a Human in the Loop | Make Work Flow™',
    description: 'Human review is not always valuable. Sometimes it is a bottleneck dressed as governance. Understanding what the human actually adds is the right question.',
    canonicalPath: '/field-notes/human-in-loop',
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
            When to Keep a Human in the Loop, and When Automation Earns Trust
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            Human review is not always valuable. Sometimes it is a bottleneck dressed as
            governance. Understanding what the human actually adds is the right question.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              Human-in-the-loop is a phrase used frequently in AI and automation discussions.
              It is presented as a solution: keep a human in the process, and the risks of
              automation are managed. This is sometimes true. But it is often a way of
              adding friction without adding safety.
            </p>

            <p>
              The useful question is not whether a human should be in the loop. It is what
              the human is actually contributing when they are there.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              When human review adds genuine value
            </h2>

            <p>
              Human review adds value when the reviewer brings something the system cannot.
              Context the system does not have access to. Judgement about edge cases the
              system was not designed to handle. Accountability for a decision that matters.
              Domain knowledge that shifts the interpretation of the output.
            </p>

            <p>
              A contract approval workflow where a senior manager reviews final terms before
              signing is genuine human-in-the-loop. The manager knows the relationship,
              the negotiation history, and the risk appetite of the organisation. The
              system cannot replicate that. The review is substantive.
            </p>

            <p>
              A customer complaint escalation where an experienced team member decides
              whether to offer a remedy is also genuine. The decision involves
              discretion, relationship history, and business judgement. A human belongs
              in that loop.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              When human review adds only delay
            </h2>

            <p>
              Human review stops adding value when the reviewer has no additional context,
              no real authority to change the outcome, and no time to engage with the
              content properly. In these cases, review becomes a rubber stamp — and a slow one.
            </p>

            <p>
              A common example in small businesses: every outgoing email requires manager
              approval. The manager approves everything. They have reviewed hundreds of
              similar emails and almost never changes them. The review adds no protective
              value. It adds a day's delay to every communication.
            </p>

            <p>
              Another example: an automated report is reviewed by a team member before
              being sent to leadership. The reviewer does not understand the underlying
              data, cannot verify the calculations, and has no authority to change the
              numbers. They check for formatting and send it on. The review step is
              a process artefact, not a safeguard.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              How to evaluate a review step
            </h2>

            <p>
              Before keeping a human review step in an automated workflow, ask three questions.
            </p>

            <p>
              First: what specifically is the reviewer checking? If the answer is vague
              — "just making sure it looks right" — the step is not adding defined value.
            </p>

            <p>
              Second: how often does the reviewer change or reject what they are reviewing?
              If almost never, the review step is not catching problems. It is creating
              a false sense of oversight.
            </p>

            <p>
              Third: what would happen if this step were removed? If the honest answer is
              "probably nothing for 95% of cases," consider whether the step should instead
              be triggered by exception — applied only when a condition is met that actually
              warrants judgement.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              When automation earns trust
            </h2>

            <p>
              Automation earns trust incrementally. The right model is not to start with
              full automation and add human review as a fallback. It is to start with human
              review and remove it progressively as the automation demonstrates reliable
              performance on well-defined cases.
            </p>

            <p>
              An invoice processing system that handles straightforward invoices correctly
              99% of the time earns the right to process those invoices without review.
              A customer triage system that routes correctly over many cycles earns the
              right to route without approval.
            </p>

            <p>
              The key is defining the conditions under which a human must be involved —
              and being specific about it. Not "when it seems complicated" but "when the
              invoice amount exceeds a threshold" or "when the customer has an active
              dispute." Specific conditions create reviewable, improvable systems. Vague
              conditions create permanent bottlenecks.
            </p>

          </div>

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
