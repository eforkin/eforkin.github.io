import { Link } from 'react-router-dom'
import './Privacy.css'

function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy-inner">
        <Link to="/forkit" className="privacy-back">&larr; Back to Forkit</Link>
        <h1>Forkit Privacy Policy</h1>
        <p className="privacy-date">Last revised on January 9, 2020</p>

        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains what information the Forkit Application
          (&ldquo;App&rdquo;) collects and how it is used. Currently, the App
          doesn&rsquo;t collect any information from the user. If you have any
          questions about the Privacy Policy of the App, please contact{' '}
          <a href="mailto:eforkin@umich.edu">eforkin@umich.edu</a>.
        </p>
        <p>
          We reserve the right, in our sole discretion, to make changes or
          modifications to this Privacy Policy at any time and for any reason.
          We will alert you about any changes by updating the &ldquo;Last
          updated&rdquo; date of this Privacy Policy, and you waive any right
          to receive specific notice of each such change. It is your
          responsibility to periodically review the Privacy Policy to stay
          informed of updates. You will be subject to, and will be deemed to
          have been made aware of and to have accepted, the changes in any
          revised Privacy Policy by your continued use of the App after the
          date such revised Privacy Policy is posted.
        </p>

        <p className="privacy-copy">&copy; {new Date().getFullYear()} Erik Forkin</p>
      </div>
    </div>
  )
}

export default Privacy
