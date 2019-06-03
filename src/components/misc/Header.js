import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-light bg-light mb-5">
    <div className="container">
      <Link className="navbar-brand" to="/">insta-web</Link>
    </div>
  </nav>
)

export default Header