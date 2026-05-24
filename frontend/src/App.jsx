import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')

  function handleuser(evt) {
    setuser(evt.target.value)
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }))
    }
    if (loginError) {
      setLoginError('')
    }
  }

  function handlepass(evt) {
    setpass(evt.target.value)
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }))
    }
    if (loginError) {
      setLoginError('')
    }
  }

  function validate() {
    const nextErrors = { email: '', password: '' }

    if (!user.trim()) {
      nextErrors.email = 'Please enter your email.'
    }

    if (!pass.trim()) {
      nextErrors.password = 'Please enter your password.'
    }

    setErrors(nextErrors)
    return !nextErrors.email && !nextErrors.password
  }

  function check(evt) {
    evt.preventDefault()

    if (!validate()) {
      return
    }

    setLoginError('')
    setLoading(true)
    axios
      .get(`http://localhost:3000/login?username=${user}&password=${pass}`)
      .then(function (data) {
        if (data.data === true) {
          navigate('/dashboard', { state: { email: user } })
        } else {
          setLoginError(
            'Incorrect email or password. Please try again.'
          )
        }
      })
      .catch(function () {
        setLoginError(
          'Could not connect to server. Make sure the backend is running on port 3000.'
        )
      })
      .finally(function () {
        setLoading(false)
      })
  }

  return (
    <div className="login-page">
      <div className="login-backdrop" aria-hidden="true" />

      <header className="login-header">
        <span className="login-logo">NETIFLEX</span>
      </header>

      <main className="login-main">
        <div className="login-card">
          <h1>Sign In</h1>

          {loginError && (
            <div className="login-alert" role="alert">
              {loginError}
            </div>
          )}

          <form className="login-form" onSubmit={check} noValidate>
            <div className="login-field">
              <label htmlFor="username">Email or mobile number</label>
              <input
                id="username"
                type="email"
                placeholder="Email or mobile number"
                onChange={handleuser}
                name="username"
                value={user}
                autoComplete="username"
                className={errors.email ? 'input-error' : ''}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="login-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={handlepass}
                name="password"
                value={pass}
                autoComplete="current-password"
                className={errors.password ? 'input-error' : ''}
                aria-invalid={errors.password ? 'true' : 'false'}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              {errors.password && (
                <p id="password-error" className="login-error" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="login-footer">
            New to Netiflex? <a href="#">Sign up now</a>.
          </p>

          <p className="login-hint">
            Demo: <strong>user@gmail.com</strong> / <strong>password123</strong>
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
