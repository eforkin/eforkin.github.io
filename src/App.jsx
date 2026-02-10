import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import Privacy from './pages/Privacy'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forkit" element={<AppDetail />} />
          <Route path="/forkit/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
