import { Link } from 'react-router-dom'
import './AppDetail.css'

function AppDetail() {
  return (
    <div className="app-detail">
      <div className="app-detail-inner">
        <div className="app-detail-content">
          <img className="app-detail-logo" src="/img/forkitlogo.png" alt="Forkit" />
          <h1 className="app-detail-name">Forkit</h1>
          <p className="app-detail-desc">
            Split a bill much quicker than manually crunching the numbers in your head.
            Take a picture of a receipt, choose the people in your group, assign items,
            and message everyone what they owe.
          </p>
          <div className="app-detail-tags">
            <span className="app-detail-tag">iOS</span>
            <span className="app-detail-tag">Swift</span>
          </div>
          <a
            href="https://apps.apple.com/us/app/forkit-bill-splitting/id1316082101"
            className="app-store-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/apple_store.png" alt="Download on the App Store" />
          </a>
          <Link to="/forkit/privacy" className="privacy-link">
            Privacy Policy
          </Link>
        </div>
        <div className="app-detail-mockup">
          <img src="/img/forkit_front.png" alt="Forkit app screenshot" />
        </div>
      </div>
    </div>
  )
}

export default AppDetail
