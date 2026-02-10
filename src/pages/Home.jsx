import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img className="hero-avatar" src="/img/linkedinpic.jpg" alt="Erik Forkin" />
        <div>
          <h1 className="hero-name">Erik Forkin</h1>
          <p className="hero-title">Software Engineer at Indeed</p>
        </div>
      </section>

      <section className="featured-section">
        <Link to="/forkit" className="featured-card">
          <div className="featured-banner">
            <img src="/img/forkit_front.png" alt="Forkit app" className="featured-mockup" />
          </div>
          <div className="featured-body">
            <div className="featured-meta">
              <img src="/img/forkitlogo.png" alt="" className="featured-icon" />
              <div>
                <h2 className="featured-name">Forkit - Bill Splitting</h2>
                <p className="featured-subtitle">Split restaurant & bars bills</p>
              </div>
            </div>
            <div className="featured-badge">GET</div>
          </div>
        </Link>
      </section>

      <footer className="home-footer">
        <div className="home-footer-links">
          <a href="mailto:eforkin@umich.edu" aria-label="Email">
            <img src="/img/email-logo.png" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/erik-forkin-33464ba3" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/eforkin" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <img src="/img/github.png" alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
