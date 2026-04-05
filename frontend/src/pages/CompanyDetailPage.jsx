import { Link } from 'react-router-dom'
import { companyDetailStats, hiringSessions } from '../data/site'
import { ExperienceCard } from '../components/ExperienceCard'
import { QuestionCard } from '../components/QuestionCard'
import { StatCard } from '../components/StatCard'

export function CompanyDetailPage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="muted-text">Sector: IT Services</p>
          <h1>TCS (Tata Consultancy Services)</h1>
          <p className="muted-text">Visited campus consistently since 2021.</p>
        </div>
        <div className="company-summary">
          {companyDetailStats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Hiring Sessions (Year-wise)</h3>
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

      <section className="section">
        <div className="split-row">
          <h3>Question Bank Preview</h3>
          <Link className="link-arrow" to="/question-bank">
            Open
          </Link>
        </div>
        <div className="session-grid">
          <QuestionCard
            badges={[
              ['topic', 'OOP'],
              ['frequency', 'High frequency'],
              ['difficulty', 'Medium'],
            ]}
            text="Explain OOP concepts with examples."
          />
          <QuestionCard
            badges={[
              ['topic', 'SQL'],
              ['frequency', 'Popular'],
              ['difficulty hard', 'Hard'],
            ]}
            text="Write an SQL query to fetch the second highest salary."
          />
        </div>
      </section>

      <section className="section">
        <div className="split-row">
          <h3>Recent Alumni Experiences</h3>
          <Link className="link-arrow" to="/alumni">
            Open
          </Link>
        </div>
        <ExperienceCard
          meta="2024"
          name="Satyam Kumar"
          summary="Technical round focused heavily on DBMS and OOP with one coding problem on arrays."
        />
      </section>

      <section className="section">
        <div className="panel welcome-box">
          <h3>Resume Insights</h3>
          <p>DSA projects, SQL, and internships were common in selected resumes.</p>
          <div className="button-row">
            <Link className="button-outline" to="/resume">
              Open Resume Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
