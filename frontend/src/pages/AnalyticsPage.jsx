import { analyticsPanels, analyticsStats } from '../data/site'
import { StatCard } from '../components/StatCard'

export function AnalyticsPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Analytics &amp; Insights</h2>
        <div className="analytics-summary">
          {analyticsStats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      {analyticsPanels.map((panel) => (
        <section className="section" key={panel.title}>
          <h3>{panel.title}</h3>
          <div className="chart-placeholder">
            <p>{panel.copy}</p>
          </div>
        </section>
      ))}
    </div>
  )
}
