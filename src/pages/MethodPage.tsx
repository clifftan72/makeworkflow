import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const moves = [
  {
    number: '01',
    title: 'Observe the work',
    idea: 'You cannot improve work you have not seen. The starting point is observation, not assumption.',
    question: 'Where does the work actually start and end?',
    warning: 'Do not automate before you have watched the work happen at least once in real conditions.',
  },
  {
    number: '02',
    title: 'Map the flow',
    idea: 'Information moves between people, tools, and decisions in ways that are rarely visible until you look for them.',
    question: 'Where does information move between people, tools, and decisions?',
    warning: 'Do not map how the process is supposed to work. Map how it actually works.',
  },
  {
    number: '03',
    title: 'Find the friction',
    idea: 'Friction is where work slows, repeats, disappears, or depends on one person\'s memory.',
    question: 'Where does work slow down, repeat, disappear, or depend on memory?',
    warning: 'Do not mistake busyness for friction. Look for where things fail quietly, not loudly.',
  },
  {
    number: '04',
    title: 'Redesign the handoff',
    idea: 'Most workflow failures happen at the point where responsibility transfers from one person or system to another.',
    question: 'What should be clarified before any automation is added?',
    warning: 'Do not add automation to a handoff that has not been made explicit first.',
  },
  {
    number: '05',
    title: 'Add automation carefully',
    idea: 'Automation earns its place only where the workflow is clear, the decision is understood, and the human role is protected.',
    question: 'What can be supported safely without removing human judgement?',
    warning: 'Do not automate decisions that require context, discretion, or accountability.',
  },
]

export default function MethodPage() {
  usePageMeta({
    title: 'The Five Moves | Make Work Flow™',
    description: 'A practical framework for observing, mapping, and redesigning workflow before introducing AI or automation.',
    canonicalPath: '/method',
  })
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        id="method-hero"
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
            Method
          </span>
          <h1 style={{ color: 'var(--color-paper)', marginBottom: '1.5rem', maxWidth: '680px' }}>
            The Five Moves
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.8,
          }}>
            A framework for thinking through workflow before introducing AI or automation.
            Each move builds on the previous. None can be skipped without cost.
          </p>
        </div>
      </section>

      {/* ── Method Premise ── */}
      <section id="method-premise" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '600px' }}>
            Before the tool, the workflow. Before the workflow, the work.
          </h2>
          <div className="prose-site" style={{ maxWidth: '600px' }}>
            <p>
              Most organisations adopt AI or automation to solve a problem they have not yet
              fully defined. The tool arrives before the thinking. The process gets faster but
              not better.
            </p>
            <p>
              Make Work Flow™ reverses this order. It asks operators and teams to understand
              how work moves before deciding how to change it. This produces better decisions
              about what to automate, what to redesign, and what to leave alone.
            </p>
            <p>
              The Five Moves are a thinking framework, not a rigid process. They can be applied
              to a single workflow in an afternoon or used to structure a deeper operational
              review. What matters is the sequence.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── The Five Moves ── */}
      <section id="the-five-moves" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '4rem', maxWidth: '560px' }}>
            <h2 style={{ marginBottom: '1rem' }}>The Five Moves</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              Each move is a lens. Apply them in sequence to any workflow you are trying
              to understand or improve.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {moves.map((move, index) => (
              <div
                key={move.number}
                id={`move-${move.number}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2.5rem',
                  padding: '3rem 0',
                  borderBottom: index < moves.length - 1 ? '1px solid var(--color-paper-border)' : 'none',
                  alignItems: 'start',
                }}
              >
                {/* Number */}
                <div style={{ paddingTop: '0.25rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--color-ink-faint)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}>
                    Move
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2.5rem',
                    fontWeight: 500,
                    color: 'var(--color-paper-mid)',
                    lineHeight: 1,
                    display: 'block',
                  }}>
                    {move.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ marginBottom: '0.85rem', fontSize: '1.35rem' }}>{move.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '600px' }}>
                    {move.idea}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.25rem',
                  }}>
                    {/* Question */}
                    <div style={{
                      backgroundColor: 'var(--color-paper-warm)',
                      border: '1px solid var(--color-paper-border)',
                      padding: '1.25rem',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent-mid)',
                        marginBottom: '0.6rem',
                      }}>
                        Ask this
                      </p>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-ink-muted)', fontStyle: 'italic' }}>
                        "{move.question}"
                      </p>
                    </div>

                    {/* Warning */}
                    <div style={{
                      backgroundColor: 'var(--color-signal-pale)',
                      border: '1px solid rgba(200,168,75,0.2)',
                      padding: '1.25rem',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-signal-dark)',
                        marginBottom: '0.6rem',
                      }}>
                        Not yet
                      </p>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-ink-muted)' }}>
                        {move.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Application Note ── */}
      <section id="method-application" className="section-lg" style={{ backgroundColor: 'var(--color-paper-warm)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.5rem', maxWidth: '520px' }}>
            How to apply this in practice
          </h2>
          <div className="prose-site" style={{ maxWidth: '580px', marginBottom: '2.5rem' }}>
            <p>
              The Five Moves can be applied individually or in sequence. A single
              conversation with the right questions can produce the first map. A structured
              review can produce a full picture of where automation belongs.
            </p>
            <p>
              The framework is deliberately high-level here. The application depends on the
              specific workflow, organisation, and context. If you need help applying it
              inside your business, that is the work of Harvest Point Consulting.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.harvestpointconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              id="method-hpc-cta"
              className="btn btn-primary"
            >
              Work with Harvest Point Consulting ↗
            </a>
            <Link
              to="/use-cases"
              id="method-use-cases-cta"
              className="btn btn-secondary"
            >
              See Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
