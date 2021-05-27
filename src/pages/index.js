import * as React from 'react'
import { pageStyles } from './index.module.scss'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main className={pageStyles}>
      <title>Paul Ogolla</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">My work</Link></li>
          <li><Link to="/">About me</Link></li>
          <li><Link to="/">Get in Touch</Link></li>
        </ul>
      </nav>
      <h1>Welcome to my portfolio!</h1>
      <p>The site is currently undergoing development but should be back up soon :)</p>
    </main>
  )
}

export default IndexPage