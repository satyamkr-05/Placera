import { Link } from 'react-router-dom'
import { companyOverviewStats, hiringFilters, hiringSessions } from '../data/site'
import { StatCard } from '../components/StatCard'

export function HiringIntelligencePage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Hiring Intelligence</h2>
        <div className="panel filter-panel">
          <h3>Filter Hiring Data</h3>
          <div className="filter-row">
            {hiringFilters.map((filter) => (
              <select key={filter[0]}>
                {filter.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>
          <div>
            <button className="button-primary" type="button">
              Apply Filter
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Company Hiring Overview</h3>
        <article className="company-card">
          <div>
            <h4>TCS (Tata Consultancy Services)</h4>
            <p>Sector: IT Services</p>
          </div>
          <div className="stats-grid">
            {companyOverviewStats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
          <div>
            <Link className="button-outline" to="/companies/tcs">
              View Company Details
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <h3>Year-wise Hiring Sessions</h3>
        <div className="session-grid">
          {hiringSessions.map((session) => (
            <article className="session-card" key={session.title}>
              <h4>{session.title}</h4>
              <div className="list">
                {session.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
