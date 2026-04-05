import { alumniHighlights } from '../data/site'
import { ExperienceCard } from '../components/ExperienceCard'

export function AlumniPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Share Your Placement Experience</h2>
        <form className="panel alumni-form">
          <div className="form-row">
            <input placeholder="Full Name" type="text" />
            <input placeholder="Branch" type="text" />
          </div>
          <div className="form-row">
            <input placeholder="Company Name" type="text" />
            <input placeholder="Year" type="text" />
          </div>
          <textarea placeholder="Describe technical round questions" />
          <textarea placeholder="Describe HR round questions" />
          <textarea placeholder="Preparation strategy and tips" />
          <div className="form-row">
            <input placeholder="LinkedIn Profile (Optional)" type="text" />
            <input placeholder="Email (Optional)" type="email" />
          </div>
          <div>
            <button className="button-primary" type="button">
              Submit Experience
            </button>
          </div>
        </form>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <h2>Approved Alumni Experiences</h2>
        <div className="session-grid">
          {alumniHighlights.map((entry) => (
            <ExperienceCard key={`${entry.name}-${entry.meta}`} {...entry} />
          ))}
        </div>
      </section>
    </div>
  )
}
