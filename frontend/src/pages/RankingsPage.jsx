import { rankingsData } from '../data/site'
import { DataTable } from '../components/DataTable'

export function RankingsPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Placement Rankings</h2>
        <div className="pill-row">
          {rankingsData.categories.map((category) => (
            <button className="pill-button" key={category} type="button">
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Top Students (Highest Package)</h3>
        <DataTable columns={['Rank', 'Name', 'Branch', 'Company', 'Package']} rows={rankingsData.students} />
      </section>

      <section className="section">
        <h3>Branch-wise Placement Percentage</h3>
        <DataTable columns={['Rank', 'Branch', 'Placement %', 'Total Placed']} rows={rankingsData.branches} />
      </section>

      <section className="section">
        <h3>Top Hiring Companies</h3>
        <DataTable columns={['Rank', 'Company', 'Total Selected', 'Highest Package']} rows={rankingsData.companies} />
      </section>

      <section className="section">
        <h3>Best Placement Year</h3>
        <DataTable columns={['Rank', 'Year', 'Placement %', 'Highest Package']} rows={rankingsData.years} />
      </section>
    </div>
  )
}
