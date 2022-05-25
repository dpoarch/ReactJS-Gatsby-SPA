import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Login
        </Link>
        <Link to="/app/details" className={styles[`header__link`]}>
          Details
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
