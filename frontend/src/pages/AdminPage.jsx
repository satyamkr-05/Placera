import { adminSummary } from '../data/site'
import { DataTable } from '../components/DataTable'
import { StatCard } from '../components/StatCard'

export function AdminPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Admin Panel</h2>
        <div className="admin-summary">
          {adminSummary.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <h3>Pending Alumni Submissions</h3>
        <DataTable
          columns={['Name', 'Company', 'Year', 'Action']}
          rows={[['Rahul Sharma', 'TCS', '2024', 'Approve / Reject']]}
        />
      </section>

      <section className="section">
        <h3>Pending Question Submissions</h3>
        <DataTable
          columns={['Question', 'Company', 'Round', 'Action']}
          rows={[['Explain normalization in DBMS', 'Infosys', 'Technical', 'Approve / Reject']]}
        />
      </section>

      <section className="section">
        <div className="split-row">
          <h3>Manage Companies</h3>
          <button className="button-primary" type="button">
            Add New Company
          </button>
        </div>
        <DataTable
          columns={['Company Name', 'Sector', 'Action']}
          rows={[['TCS', 'IT Services', 'Edit / Delete']]}
        />
      </section>

      <section className="section">
        <div className="split-row">
          <h3>Manage Hiring Sessions</h3>
          <button className="button-primary" type="button">
            Add Hiring Session
          </button>
        </div>
        <DataTable
          columns={['Company', 'Year', 'Rounds', 'Action']}
          rows={[['TCS', '2024', 'Aptitude -> Technical -> HR', 'Edit / Delete']]}
        />
      </section>

      <section className="section">
        <h3>Generate Reports</h3>
        <div className="button-row">
          <button className="button-outline" type="button">
            Generate Placement Report
          </button>
          <button className="button-outline" type="button">
            Generate Company-wise Report
          </button>
          <button className="button-outline" type="button">
            Generate Year-wise Report
          </button>
        </div>
      </section>
    </div>
  )
}
