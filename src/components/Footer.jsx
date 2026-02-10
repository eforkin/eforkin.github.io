import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:eforkin@umich.edu" className="footer-icon-link" aria-label="Email">
            <img src="/img/email-logo.png" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/erik-forkin-33464ba3" className="footer-icon-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/eforkin" className="footer-icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <img src="/img/github.png" alt="GitHub" />
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Erik Forkin</p>
      </div>
    </footer>
  )
}

export default Footer
