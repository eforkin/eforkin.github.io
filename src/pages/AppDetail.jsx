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
          <div className="detail-desc">
            <p>
              Forkit allows you to split your restaurant & bar bills much quicker than manually crunching the numbers in your head.
            </p>
            <ul>
              <li>Take a picture of the receipt. We automatically detect each item and its price as well as the tip and tax if applicable</li>
              <li>Choose the participants in your party from your contacts</li>
              <li>Assign each item to whomever bought it or split an item amongst multiple participants</li>
              <li>Manually change the tax and tip if necessary</li>
              <li>Observe the summary of the items</li>
              <li>Text a summary to your party for their records with a message crafted by us</li>
            </ul>
            <p>
              An annual subscription unlocks additional features to make splitting more seamless:
            </p>
            <ul>
              <li>Split bills with more than 4 people</li>
              <li>Send payments with Venmo integration</li>
              <li>Favorite your most-used contacts</li>
              <li>Save and view all past receipts</li>
              <li>Download receipt history as spreadsheet</li>
            </ul>
          </div>
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
            Terms of Use &rarr;
          </a>
          <a
            href="mailto:eforkin@umich.edu?subject=Forkit%20Dev%20Support"
            className="detail-legal-link"
          >
            Developer Support &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDetail
