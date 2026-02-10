import { Link } from 'react-router-dom'
import './AppDetail.css'

function AppDetail() {
  return (
    <div className="detail">
      <div className="detail-inner">
        <div className="detail-hero-banner">
          <img src="/img/forkit_front.png" alt="Forkit app" className="detail-hero-mockup" />
        </div>

        <div className="detail-info">
          <div className="detail-info-left">
            <img className="detail-icon" src="/img/forkitlogo.png" alt="Forkit" />
            <div>
              <h1 className="detail-name">Forkit - Bill Splitting</h1>
              <p className="detail-subtitle">Split restaurant & bars bills</p>
            </div>
          </div>
          <a
            href="https://apps.apple.com/us/app/forkit-bill-splitting/id1316082101"
            className="detail-get-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GET
          </a>
        </div>

        <div className="detail-body">
          <div className="detail-tags">
            <span className="detail-tag">iOS</span>
            <span className="detail-tag">Swift</span>
          </div>
          <p className="detail-desc">
            Split a bill much quicker than manually crunching the numbers in your head.
            Take a picture of a receipt, choose the people in your group, assign items,
            and message everyone what they owe.
          </p>
        </div>

        <div className="detail-legal">
          <Link to="/forkit/privacy-policy" className="detail-legal-link">
            Privacy Policy &rarr;
          </Link>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="detail-legal-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDetail
