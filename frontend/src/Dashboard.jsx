import { Link, useLocation } from 'react-router-dom'
import './App.css'

function Dashboard() {
  const location = useLocation()
  const email = location.state?.email || 'user@gmail.com'

  return (
    <div className="dashboard-page">
      <header className="dashboard-nav">
        <span className="login-logo">NETIFLEX</span>
        <div className="dashboard-nav-right">
          <span className="dashboard-user">{email}</span>
          <Link to="/" className="dashboard-signout">
            Sign Out
          </Link>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-hero">
          <h1>Welcome back</h1>
          <p>Your Netiflex dashboard — dummy preview after login.</p>
        </section>

        <section className="dashboard-grid">
          <article className="dashboard-card">
            <h2>Continue Watching</h2>
            <p>Pick up where you left off.</p>
          </article>
          <article className="dashboard-card">
            <h2>My List</h2>
            <p>12 titles saved for later.</p>
          </article>
          <article className="dashboard-card">
            <h2>New Releases</h2>
            <p>Explore this week&apos;s additions.</p>
          </article>
          <article className="dashboard-card">
            <h2>Account</h2>
            <p>Plan: Standard · Profile: Main</p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
