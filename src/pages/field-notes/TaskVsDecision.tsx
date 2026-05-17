import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function TaskVsDecision() {
  usePageMeta({
    title: 'The Difference Between Automating a Task and Automating a Decision | Make Work Flow™',
    description: 'Tasks have defined inputs and outputs. Decisions require context, judgement, and accountability. Confusing the two is how automation causes harm.',
    canonicalPath: '/field-notes/task-vs-decision',
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
            The Difference Between Automating a Task and Automating a Decision
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            Tasks have a defined input and a defined output. Decisions require context,
            judgement, and accountability. Confusing the two is how automation causes harm.
          </p>
        </div>
      </section>

      <article id="article-body" className="section-lg" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-narrow">
          <div className="prose-site" style={{ maxWidth: '640px' }}>

            <p>
              There is a question that should be asked before automating anything:
              is what I am automating a task, or a decision?
            </p>

            <p>
              The distinction matters more than most organisations realise, and it is not
              always obvious. Much of what looks like a task is actually a decision in
              disguise. And when organisations automate a disguised decision without
              recognising it, they hand over something that should not be handed over.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What makes something a task
            </h2>

            <p>
              A task has a defined input and a defined output. Given the same input, the
              output should be the same every time. Formatting a document, sending a
              scheduled email, generating a report from a database, converting a file —
              these are tasks. The criteria for completion are clear. A machine can
              evaluate whether the task is done correctly.
            </p>

            <p>
              Tasks are good candidates for automation. When the input is clean and the
              expected output is well defined, automation reduces effort and removes the
              chance of human error in mechanical repetition.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              What makes something a decision
            </h2>

            <p>
              A decision requires something tasks do not: context that is not fully
              captured in the input. It requires weighing options. It may have more than
              one defensible outcome. And importantly, it requires someone who can be
              accountable for the outcome.
            </p>

            <p>
              Consider a customer service queue. Routing a query to the right department
              based on a keyword match is a task. Deciding whether a long-term customer's
              complaint warrants an exception to policy is a decision. The first has a
              right answer derivable from the input. The second requires judgement about
              the relationship, the context, and the value of maintaining trust.
            </p>

            <p>
              When organisations automate the second type without acknowledging it,
              they create a system that gives consistent outputs to situations that
              require inconsistent handling. The customer who deserves an exception
              gets the standard response. The nuance is lost.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The problem with AI in this space
            </h2>

            <p>
              AI systems are particularly susceptible to this confusion because they are
              good at producing confident-sounding outputs from complex inputs. A language
              model can assess a complaint, generate a response, and take an action — and
              it will do so fluently. But fluency is not the same as judgement.
            </p>

            <p>
              The risk is not that AI gets tasks wrong. It is that AI gets decisions
              wrong in ways that look like tasks being done correctly. The system produces
              an output. The output is coherent. Nobody checks. The decision was made
              without accountability.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              A practical test
            </h2>

            <p>
              Before automating anything, ask these questions:
            </p>

            <p>
              Could two reasonable people look at the same input and reach different
              conclusions about what should happen? If yes, this is a decision, not a task.
            </p>

            <p>
              If the automation produces a bad outcome, who is accountable? If the answer
              is unclear or uncomfortable, this is a decision, not a task.
            </p>

            <p>
              Does this situation have meaningful exceptions? If yes, and if those
              exceptions depend on context the system cannot see, this is a decision,
              not a task.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              The workflow-first implication
            </h2>

            <p>
              Mapping a workflow before automating it is partly an exercise in separating
              tasks from decisions. Many workflows contain both, interleaved. A good
              workflow map makes that distinction visible.
            </p>

            <p>
              Once you can see which steps are tasks and which are decisions, you can
              make a principled choice: automate the tasks, and design the workflow so
              that decisions always pass through a human who has the context, the
              authority, and the accountability to make them well.
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
