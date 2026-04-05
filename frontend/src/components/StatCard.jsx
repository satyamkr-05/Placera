export function StatCard({ label, note, value }) {
  return (
    <article className="stat-card">
      <h4>{label}</h4>
      <strong>{value}</strong>
      {note ? <p>{note}</p> : null}
    </article>
  )
}
