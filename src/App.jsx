import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import Privacy from './pages/Privacy'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app">
      {!isHome && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forkit" element={<AppDetail />} />
          <Route path="/forkit/privacy-policy" element={<Privacy />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  )
}

export default App
