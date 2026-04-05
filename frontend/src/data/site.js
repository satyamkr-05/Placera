export const appMeta = {
  name: 'Placera',
  institution: 'Gulzar Group of Institutes',
}

export const navSections = [
  {
    title: 'Main',
    links: [{ label: 'Dashboard', to: '/dashboard' }],
  },
  {
    title: 'Intelligence',
    links: [
      { label: 'Hiring Intelligence', to: '/hiring-intelligence' },
      { label: 'Question Bank', to: '/question-bank' },
    ],
  },
  {
    title: 'Community',
    links: [{ label: 'Alumni Experiences', to: '/alumni' }],
  },
  {
    title: 'Analytics',
    links: [
      { label: 'Placement Rankings', to: '/rankings' },
      { label: 'Analytics & Insights', to: '/analytics' },
      { label: 'Resume Intelligence', to: '/resume' },
    ],
  },
  {
    title: 'Admin',
    links: [{ label: 'Admin Panel', to: '/admin' }],
  },
]

export const routeMeta = {
  '/': {
    title: 'Home',
    searchPlaceholder: 'Search companies, questions, alumni...',
    profileLabel: 'Profile',
  },
  '/dashboard': {
    title: 'Dashboard',
    searchPlaceholder: 'Search companies, questions, alumni...',
    profileLabel: 'Profile',
  },
  '/hiring-intelligence': {
    title: 'Hiring Intelligence',
    searchPlaceholder: 'Search companies...',
    profileLabel: 'Profile',
  },
  '/companies/tcs': {
    title: 'Company Detail',
    searchPlaceholder: 'Search companies, questions, alumni...',
    profileLabel: 'Profile',
  },
  '/question-bank': {
    title: 'Question Bank',
    searchPlaceholder: 'Search questions...',
    profileLabel: 'Profile',
  },
  '/alumni': {
    title: 'Alumni Experiences',
    searchPlaceholder: 'Search alumni stories...',
    profileLabel: 'Profile',
  },
  '/rankings': {
    title: 'Placement Rankings',
    searchPlaceholder: 'Search rankings...',
    profileLabel: 'Profile',
  },
  '/analytics': {
    title: 'Analytics & Insights',
    searchPlaceholder: 'Search companies, questions, alumni...',
    profileLabel: 'Profile',
  },
  '/resume': {
    title: 'Resume Intelligence',
    searchPlaceholder: 'Search resume insights...',
    profileLabel: 'Profile',
  },
  '/admin': {
    title: 'Admin Panel',
    searchPlaceholder: 'Search admin records...',
    profileLabel: 'Admin',
  },
}

export const dashboardStats = [
  { label: 'Total Companies', value: '25', note: 'All years' },
  { label: 'Students Placed', value: '156', note: '78% placement rate' },
  { label: 'Highest Package', value: '12 LPA', note: '2024 record' },
  { label: 'Average Package', value: '4.2 LPA', note: 'Across all companies' },
]

export const dashboardActions = [
  { label: 'Question Bank', to: '/question-bank', variant: 'primary' },
  { label: 'Add Experience', to: '/alumni', variant: 'outline' },
  { label: 'Rankings', to: '/rankings', variant: 'outline' },
]

export const recentHiringActivity = [
  'TCS hired 18 students in 2024',
  'Infosys visited campus in 2024',
  'Wipro conducted a technical round',
]

export const topCompaniesRows = [
  ['TCS', '45', '7 LPA'],
  ['Infosys', '32', '8 LPA'],
]

export const alumniHighlights = [
  {
    name: 'Satyam Kumar',
    meta: 'TCS - 2024',
    summary: 'Focus on OOP, DBMS, and SQL joins. HR was behavioral.',
    helpful: '18 helpful',
  },
  {
    name: 'Abhishek Kumar',
    meta: 'Infosys - 2023',
    summary: 'Aptitude was moderate. HR asked situational questions.',
    helpful: '12 helpful',
  },
]

export const hiringFilters = [
  ['Select Company', 'TCS', 'Infosys', 'Wipro'],
  ['Select Year', '2024', '2023', '2022'],
  ['Select Branch', 'CSE', 'ECE', 'ME'],
]

export const companyOverviewStats = [
  { label: 'Total Students Selected', value: '45' },
  { label: 'Highest Package', value: '7 LPA' },
  { label: 'Average Package', value: '3.5 LPA' },
]

export const hiringSessions = [
  {
    title: '2024 Hiring',
    details: ['Rounds: Aptitude -> Technical -> HR', 'Selected: 18 students', 'Branch-wise: CSE (10), ECE (5), ME (3)'],
  },
  {
    title: '2023 Hiring',
    details: ['Rounds: Aptitude -> Technical -> HR', 'Selected: 15 students'],
  },
  {
    title: '2022 Hiring',
    details: ['Rounds: Technical -> HR', 'Selected: 12 students'],
  },
]

export const questionFilters = [
  ['Select Company', 'TCS', 'Infosys'],
  ['Select Year', '2024', '2023'],
  ['Select Round', 'Aptitude', 'Technical', 'HR'],
  ['Select Topic', 'DSA', 'OOP', 'DBMS'],
  ['Select Difficulty', 'Easy', 'Medium', 'Hard'],
]

export const questionGroups = [
  {
    title: 'Technical Round (12 Questions)',
    questions: [
      {
        text: 'Explain the difference between stack and queue.',
        badges: [
          ['topic', 'DSA'],
          ['frequency', 'Asked 12 times'],
          ['difficulty', 'Medium'],
        ],
      },
      {
        text: 'Explain OOP concepts with real-life examples.',
        badges: [
          ['topic', 'OOP'],
          ['frequency', 'Asked 10 times'],
          ['difficulty hard', 'Hard'],
        ],
      },
    ],
  },
  {
    title: 'Aptitude Round (6 Questions)',
    questions: [
      {
        text: 'Solve a time and work numerical problem.',
        badges: [
          ['topic', 'Quantitative'],
          ['frequency', 'Asked 8 times'],
          ['difficulty', 'Easy'],
        ],
      },
    ],
  },
  {
    title: 'HR Round (5 Questions)',
    questions: [
      {
        text: 'Tell me about yourself.',
        badges: [
          ['topic', 'Behavioral'],
          ['frequency', 'Asked 15 times'],
          ['difficulty', 'Medium'],
        ],
      },
    ],
  },
]

export const analyticsStats = [
  { label: 'Overall Placement Rate', value: '78%', note: 'Across all years' },
  { label: 'Highest Package', value: '12 LPA', note: 'Offered in 2024' },
  { label: 'Average Package', value: '4.2 LPA', note: 'Across all companies' },
]

export const analyticsPanels = [
  { title: 'Year-wise Placement Growth', copy: 'Line chart area' },
  { title: 'Package Distribution', copy: 'Bar chart area' },
  { title: 'Topic Frequency', copy: 'Topic chart area' },
  { title: 'Round Difficulty', copy: 'Difficulty chart area' },
]

export const rankingsData = {
  categories: ['Student Ranking', 'Branch Ranking', 'Company Ranking', 'Year Ranking'],
  students: [
    ['1', 'Satyam Kumar', 'CSE', 'Infosys', '12 LPA'],
    ['2', 'Abhisek Kumar', 'CSE', 'TCS', '12 LPA'],
  ],
  branches: [
    ['1', 'CSE', '85%', '90'],
    ['2', 'ECE', '70%', '50'],
  ],
  companies: [
    ['1', 'TCS', '45', '7 LPA'],
    ['2', 'Infosys', '32', '8 LPA'],
  ],
  years: [
    ['1', '2024', '82%', '12 LPA'],
    ['2', '2023', '75%', '10 LPA'],
  ],
}

export const resumeSummary = [
  { label: 'Most Selected Branch', value: 'CSE' },
  { label: 'Average CGPA', value: '7.8' },
  { label: 'Internship Preference', value: 'Recommended' },
]

export const resumeLists = {
  skills: [
    'DSA',
    'SQL',
    'OOP',
    'System design basics',
  ],
  recommendations: [
    'Add one DSA project',
    'Highlight SQL-based work',
    'Mention internships clearly',
    'Keep resume within 1 page',
  ],
  checklist: [
    'Contact information updated',
    'Skills section clear',
    'Projects show impact',
    'Internship experience added',
    'No grammatical errors',
  ],
}

export const adminSummary = [
  { label: 'Pending Alumni Approvals', value: '5' },
  { label: 'Pending Question Approvals', value: '8' },
  { label: 'Total Companies', value: '25' },
]

export const companyDetailStats = [
  { label: 'Total Students Selected', value: '45' },
  { label: 'Highest Package', value: '7 LPA' },
  { label: 'Average Package', value: '3.5 LPA' },
  { label: 'Total Hiring Rounds', value: '3' },
]
