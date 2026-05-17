import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function ToolSprawl() {
  usePageMeta({
    title: 'More Tools, More Friction | Make Work Flow™',
    description: 'The paradox of the modern SME stack: each new tool creates a new handoff. Workflow clarity is often a tool problem in disguise.',
    canonicalPath: '/field-notes/tool-sprawl',
    schemaType: 'Article',
    articleDate: '2025-05-22',
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
            <span className="tag tag-accent" style={{ fontSize: '0.72rem' }}>Tool sprawl</span>
          </div>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.25rem', maxWidth: '680px' }}>
            More Tools, More Friction: The Paradox of the Modern SME Stack
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            The average small business uses more software than it can integrate. Each new
            tool creates a new handoff point. Workflow friction is often a tool problem in disguise.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              The pitch for each new software tool follows a predictable pattern. It will
              save time. It will reduce errors. It will connect with the other tools you
              already use. After the demo, it seems obvious. The team adopts it. The
              subscription starts.
            </p>

            <p>
              Six months later, nobody can remember who is responsible for updating which
              system. Information lives in four different places. The new tool has created
              two new handoff points that did not exist before. Someone has built a
              spreadsheet to bridge the gaps.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why each tool creates new friction
            </h2>

            <p>
              Every software tool is a boundary. Information that lives inside one tool
              does not automatically appear in another. When a business adopts a new
              platform, they do not eliminate work — they relocate it. The work of moving
              information from one system to another does not disappear; it becomes
              someone's job.
            </p>

            <p>
              In a small business with ten people and eight tools, the integration problem
              compounds quickly. A customer enquiry arrives by email. It is logged in a
              CRM. A quote is generated in accounting software. The job is tracked in a
              project management tool. A follow-up is scheduled in a calendar app. The
              invoice is issued from a different accounting module.
            </p>

            <p>
              Each transition between those systems is a handoff. Each handoff is an
              opportunity for information to be lost, delayed, or duplicated. The workflow
              is not served by these tools — it is threaded through them.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The tool adoption cycle
            </h2>

            <p>
              The pattern repeats. A pain point is identified — reports take too long,
              communication is scattered, tasks are being missed. Someone proposes a tool
              that addresses the symptom. The tool is adopted. The symptom improves
              temporarily. New friction appears elsewhere. A new tool is proposed.
            </p>

            <p>
              The underlying workflow is never examined. The question of how information
              should move, who should own which step, and what triggers each action is
              never asked. Instead, each new tool is expected to compensate for the
              absence of that thinking.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What to look for
            </h2>

            <p>
              If your business has adopted more than four or five distinct software tools
              in the last two years, it is worth asking: are these tools serving the
              workflow, or is the workflow serving the tools?
            </p>

            <p>
              Signs that tools are creating rather than solving friction include: team
              members regularly extracting data from one system to re-enter it in another;
              more than one person being asked the same question because the answer lives
              in a tool others cannot access; processes that require manual steps to
              "connect" what should be connected automatically; and spreadsheets being
              used as the primary record in areas that nominally have dedicated software.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The workflow-first correction
            </h2>

            <p>
              Before evaluating another tool, map the workflow the tool is supposed to
              support. Where does information enter the workflow? Where does it need to
              be at the end? What steps does it go through, and who is responsible for
              each?
            </p>

            <p>
              This mapping often reveals that the workflow has problems that no tool can
              solve — unclear ownership, missing triggers, information that is never
              captured in the first place. A new tool installed on top of those problems
              will inherit them.
            </p>

            <p>
              Workflow clarity comes before tool selection. Not because technology is
              unimportant, but because the right technology choice depends on understanding
              what the workflow actually needs — and that understanding requires looking
              at the work first.
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
