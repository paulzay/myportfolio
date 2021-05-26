import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layouts.module.scss'

const Layout = () => {
  return (
    <main className={container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </main>
  )
}

export default Layout