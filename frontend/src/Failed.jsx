import { Link, useLocation } from 'react-router-dom'
import './App.css'

function Failed() {
  const location = useLocation()
  const message =
    location.state?.message ||
    'Incorrect email or password. Please try again.'

  return (
    <div className="login-page">
      <div className="login-backdrop" aria-hidden="true" />

      <header className="login-header">
        <Link to="/" className="login-logo">
          NETIFLEX
        </Link>
      </header>

      <main className="login-main">
        <div className="login-card result-card">
          <h1>Sign In</h1>
          <div className="login-alert" role="alert">
            {message}
          </div>
          <Link to="/" className="login-submit result-back">
            Try again
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Failed
