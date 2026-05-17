import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function WorkflowMemory() {
  usePageMeta({
    title: 'The Hidden Cost of Workflows That Live in Someone\'s Head | Make Work Flow™',
    description: 'When a workflow depends on one person\'s knowledge, it works until that person is absent, busy, or gone. Externalising that knowledge is not a technology problem.',
    canonicalPath: '/field-notes/workflow-memory',
    schemaType: 'Article',
    articleDate: '2025-05-29',
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
            <span className="tag tag-accent" style={{ fontSize: '0.72rem' }}>Workflow friction</span>
          </div>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            The Hidden Cost of Workflows That Live in Someone's Head
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            When a workflow depends on one person's knowledge, it works until that person
            is absent, busy, or gone. Externalising that knowledge is not a technology
            problem — it is a design problem.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              Every business has a version of this person. They are often one of the most
              valuable people in the organisation. They know how things work. They know
              who to call. They remember the history of a client relationship that pre-dates
              the current CRM. They know which suppliers can be trusted and which cannot.
              They remember why a particular process was set up a certain way.
            </p>

            <p>
              This knowledge is genuinely valuable. The problem is that it lives entirely
              in their head — and is therefore entirely inaccessible to everyone else.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What the business cannot see
            </h2>

            <p>
              When critical workflow knowledge lives in one person's memory, the business
              has a hidden dependency it often cannot see until it is exposed. The exposure
              usually comes from absence: the person goes on leave, changes roles, or
              leaves the organisation. At that point, the workflows they carried in their
              head stop functioning.
            </p>

            <p>
              Teams scramble to reconstruct what the process was. They ask the person
              questions over email or phone — if they are still reachable. They try to
              reverse-engineer the process from its outputs. They make guesses. The work
              continues, but with higher error rates and slower throughput.
            </p>

            <p>
              This happens in businesses of all sizes, but it is particularly costly in
              small and medium-sized organisations where one person may carry the
              operational knowledge for an entire function.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why this is a workflow design problem, not a technology problem
            </h2>

            <p>
              The instinct when workflow knowledge is unrecorded is to reach for a tool —
              a knowledge management platform, a wiki, a documentation system. These can
              help, but they do not address the root cause.
            </p>

            <p>
              The root cause is that the workflow was never designed to be independent of
              the person carrying it. It was built informally, through practice and
              repetition, around one person's availability, judgment, and memory. No tool
              can capture what has not been made explicit.
            </p>

            <p>
              Making a workflow explicit requires a different kind of work: observing the
              process in practice, asking the person to walk through what they actually do
              (not what they think they do), mapping the steps and the decision points,
              and identifying what triggers each action. This is not documentation work —
              it is workflow design work.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The compounding risk
            </h2>

            <p>
              The hidden cost of memory-dependent workflows compounds over time. Each year
              the workflow is not externalised, it becomes harder to map — because the
              person's knowledge deepens and becomes more tacit. Edge cases accumulate.
              Exceptions become embedded in the process without being recorded. The gap
              between what is documented and what is actually done widens.
            </p>

            <p>
              When automation is then introduced into this environment, it inherits the
              problem. The automation is built to replicate the documented version of the
              workflow. But the documented version is incomplete. The automation misses
              the exceptions. The person who carries the knowledge in their head becomes
              the one who handles all the cases the automation cannot.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What to do instead
            </h2>

            <p>
              The practical starting point is to identify which workflows in your
              organisation have a single person as their de facto owner — the person who
              is asked whenever something is unclear, who handles exceptions, whose absence
              creates problems.
            </p>

            <p>
              For each of those workflows, set time aside to observe the process in
              practice and ask the person to narrate what they are doing as they do it.
              Not from memory. In real time. This surfaces the tacit knowledge that
              documentation requests rarely capture.
            </p>

            <p>
              The goal is not to create a manual. It is to make the workflow visible
              enough that it can be shared, improved, and eventually supported — whether
              by another team member, a system, or a carefully designed automation.
              A workflow that lives only in one person's head is a workflow that is
              always one absence away from breaking.
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
