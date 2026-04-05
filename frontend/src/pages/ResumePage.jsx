import { resumeLists, resumeSummary } from '../data/site'
import { StatCard } from '../components/StatCard'

export function ResumePage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Resume Intelligence</h2>
        <div className="panel filter-panel resume-filter">
          <h3>Select Company</h3>
          <div className="button-row">
            <select>
              <option>Select Company</option>
              <option>TCS</option>
              <option>Infosys</option>
              <option>Wipro</option>
            </select>
            <button className="button-primary" type="button">
              View
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Company Resume Insights Summary</h3>
        <div className="resume-summary">
          {resumeSummary.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Skill Demand Analysis</h3>
        <div className="panel welcome-box">
          <ul className="list">
            {resumeLists.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>Recommended Resume Focus Areas</h3>
        <div className="panel welcome-box">
          <ul className="list">
            {resumeLists.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h3>Resume Checklist</h3>
        <div className="panel welcome-box">
          <ul className="list">
            {resumeLists.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="panel welcome-box">
          <h3>Resume Gap Analysis</h3>
          <p>Detailed comparison can be added here later.</p>
        </div>
      </section>
    </div>
  )
}
