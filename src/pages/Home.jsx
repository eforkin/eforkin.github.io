import AppCard from '../components/AppCard'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img className="hero-avatar" src="/img/linkedinpic.jpg" alt="Erik Forkin" />
        <h1 className="hero-name">Erik Forkin</h1>
        <p className="hero-title">Software Engineer at Indeed</p>
      </section>

      <section id="apps" className="apps-section">
        <h2 className="section-heading">Apps</h2>
        <div className="apps-grid">
          <AppCard
            name="Forkit"
            description="Split a bill much quicker than manually crunching the numbers. Take a picture of a receipt, choose the people in your group, assign items, and message everyone what they owe."
            icon="/img/forkitlogo.png"
            tags={['iOS', 'Swift']}
            to="/forkit"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
