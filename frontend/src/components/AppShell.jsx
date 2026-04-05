import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { appMeta, navSections, routeMeta } from '../data/site'

export function AppShell() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const meta = routeMeta[location.pathname] ?? routeMeta['/dashboard']

  return (
    <div className="app-shell">
      <div
        aria-hidden="true"
        className={`overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="logo-block">
          <NavLink onClick={() => setSidebarOpen(false)} to="/dashboard">
            <h1>{appMeta.name}</h1>
          </NavLink>
          <p>{appMeta.institution}</p>
        </div>

        <div className="sidebar-scroll">
          <nav aria-label="Primary navigation" className="nav-groups">
            {navSections.map((section) => (
              <div className="nav-group" key={section.title}>
                <span className="nav-group-title">{section.title}</span>
                <div className="nav-group-links">
                  {section.links.map((link) => (
                    <NavLink
                      key={link.to}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setSidebarOpen(false)}
                      to={link.to}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <div className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <button
              aria-label="Toggle navigation"
              className={`menu-toggle ${sidebarOpen ? 'active' : ''}`}
              onClick={() => setSidebarOpen((open) => !open)}
              type="button"
            >
              <span />
            </button>

            <div className="topbar-copy">
              <h2>{meta.title}</h2>
              <p>{appMeta.institution}</p>
            </div>
          </div>

          <label className="search-box" htmlFor="global-search">
            <input id="global-search" placeholder={meta.searchPlaceholder} type="text" />
          </label>

          <div className="topbar-right">
            <div className="profile-chip">
              <div className="avatar">{meta.profileLabel.slice(0, 1)}</div>
              <div>
                <strong>{meta.profileLabel}</strong>
              </div>
            </div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
