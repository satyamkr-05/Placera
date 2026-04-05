import { Link } from 'react-router-dom'
import {
  alumniHighlights,
  dashboardActions,
  dashboardStats,
  recentHiringActivity,
  topCompaniesRows,
} from '../data/site'
import { DataTable } from '../components/DataTable'
import { ExperienceCard } from '../components/ExperienceCard'
import { StatCard } from '../components/StatCard'

export function DashboardPage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of placements, companies, and recent activity.</p>
        </div>
        <div className="stats-grid">
          {dashboardStats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Quick Actions</h3>
        <div className="button-row">
          {dashboardActions.map((action) => (
            <Link
              className={action.variant === 'primary' ? 'button-primary' : 'button-outline'}
              key={action.label}
              to={action.to}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Recent Hiring Activity</h3>
        <div className="panel welcome-box">
          <ul className="list">
            {recentHiringActivity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>Top Performing Companies</h3>
        <DataTable columns={['Company', 'Total Selected', 'Highest Package']} rows={topCompaniesRows} />
      </section>

      <section className="section">
        <div className="split-row">
          <h3>Recent Alumni Contributions</h3>
          <Link className="link-arrow" to="/alumni">
            Open
          </Link>
        </div>
        <div className="session-grid">
          {alumniHighlights.map((entry) => (
            <ExperienceCard key={`${entry.name}-${entry.meta}`} {...entry} />
          ))}
        </div>
      </section>
    </div>
  )
}
