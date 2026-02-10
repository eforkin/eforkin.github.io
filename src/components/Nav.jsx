import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Erik Forkin
        </Link>
      </div>
    </nav>
  )
}

export default Nav
