import { questionFilters, questionGroups } from '../data/site'
import { QuestionCard } from '../components/QuestionCard'

export function QuestionBankPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <h2>Question Bank</h2>
        <div className="panel filter-panel">
          <h3>Filter Questions</h3>
          <div className="filter-row">
            {questionFilters.map((filter) => (
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
        <h3>Download Question Sets</h3>
        <div className="button-row">
          <button className="button-outline" type="button">
            Download Company-Year PDF
          </button>
          <button className="button-outline" type="button">
            Download Most Asked Questions
          </button>
          <button className="button-outline" type="button">
            Download Topic-wise PDF
          </button>
        </div>
      </section>

      {questionGroups.map((group) => (
        <section className="section" key={group.title}>
          <h3>{group.title}</h3>
          <div className="session-grid">
            {group.questions.map((question) => (
              <QuestionCard key={question.text} {...question} />
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <h3>Pagination</h3>
        <div className="button-row">
          <button className="button-outline" type="button">
            Previous
          </button>
          <button className="button-outline" type="button">
            1
          </button>
          <button className="button-outline" type="button">
            2
          </button>
          <button className="button-outline" type="button">
            Next
          </button>
        </div>
      </section>
    </div>
  )
}
