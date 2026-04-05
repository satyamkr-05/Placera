import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { AdminPage } from './pages/AdminPage'
import { AlumniPage } from './pages/AlumniPage'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { CompanyDetailPage } from './pages/CompanyDetailPage'
import { DashboardPage } from './pages/DashboardPage'
import { HiringIntelligencePage } from './pages/HiringIntelligencePage'
import { QuestionBankPage } from './pages/QuestionBankPage'
import { RankingsPage } from './pages/RankingsPage'
import { ResumePage } from './pages/ResumePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="hiring-intelligence" element={<HiringIntelligencePage />} />
        <Route path="companies/tcs" element={<CompanyDetailPage />} />
        <Route path="question-bank" element={<QuestionBankPage />} />
        <Route path="alumni" element={<AlumniPage />} />
        <Route path="rankings" element={<RankingsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
