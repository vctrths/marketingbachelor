import { useState } from 'react'
import Button from '../Button/Button'
import Toast from '../Toast/Toast'
import logo from '../../assets/1b8bd55b78e3b301c14943aee24dbd92de9a8620.svg'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)

  const showToast = () => setToastVisible(true)

  return (
    <>
    <Toast message="Binnenkort beschikbaar!" visible={toastVisible} onClose={() => setToastVisible(false)} />
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Groene Vingers" />
      </div>
      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span className="navbar__hamburger-line" />
        <span className="navbar__hamburger-line" />
        <span className="navbar__hamburger-line" />
      </button>
      <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
        <a href="#zoek" className="navbar__link">Zoek een tuin</a>
        <a href="#hoe-werkt-het" className="navbar__link">Hoe werkt het</a>
        <a href="#over-ons" className="navbar__link">Over ons</a>
        <div className="navbar__actions">
          <Button variant="outline" onClick={showToast}>Login</Button>
          <Button variant="primary" onClick={showToast}>Registreer</Button>
        </div>
      </div>
    </nav>
    </>
  )
}
