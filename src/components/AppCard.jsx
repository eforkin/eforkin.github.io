import { Link } from 'react-router-dom'
import './AppCard.css'

function AppCard({ name, description, icon, tags, to }) {
  return (
    <Link to={to} className="app-card">
      <div className="app-card-icon">
        <img src={icon} alt={`${name} icon`} />
      </div>
      <div className="app-card-body">
        <h3 className="app-card-name">{name}</h3>
        <p className="app-card-desc">{description}</p>
        <div className="app-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="app-card-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default AppCard
