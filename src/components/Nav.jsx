import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Erik Forkin
        </Link>
        <div className="nav-links">
          <a href="/#apps" className="nav-link">Apps</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
