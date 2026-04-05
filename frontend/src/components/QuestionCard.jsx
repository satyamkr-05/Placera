export function QuestionCard({ badges, text }) {
  return (
    <article className="question-card">
      <p className="question-text">{text}</p>
      <div className="badge-row">
        {badges.map(([kind, label]) => (
          <span className={`badge ${kind}`} key={`${kind}-${label}`}>
            {label}
          </span>
        ))}
      </div>
    </article>
  )
}
