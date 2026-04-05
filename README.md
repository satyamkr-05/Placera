# Placera

Placera is a React-based placement platform UI for managing placement data, hiring information, question banks, alumni experiences, rankings, analytics, resume insights, and admin work.

## Current Scope

- Dashboard landing
- Hiring Intelligence
- Company Detail
- Question Bank
- Alumni Experiences
- Placement Rankings
- Analytics and Insights
- Resume Intelligence
- Admin Panel

## Tech Stack

- React
- Vite
- React Router
- ESLint

## Project Structure

```text
Placera/
├─ frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ data/
│  │  └─ pages/
│  └─ package.json
├─ package.json
└─ Placera_SRS_Professional_Version.pdf
```

## Run Locally

From the project root:

```powershell
npm install --prefix frontend
npm run dev
```

## Available Scripts

From the project root:

```powershell
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

- Root `package.json` forwards commands to the React app inside `frontend`.
- Main working branch is `main`.
- The project has been cleaned and converted from static pages into a routed React app.
