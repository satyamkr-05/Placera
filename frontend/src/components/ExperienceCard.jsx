export function ExperienceCard({ helpful, meta, name, summary }) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <h4>{name}</h4>
        <span>{meta}</span>
      </div>
      <p className="experience-summary">{summary}</p>
      {helpful ? (
        <div className="experience-footer">
          <span>{helpful}</span>
        </div>
      ) : null}
    </article>
  )
}
