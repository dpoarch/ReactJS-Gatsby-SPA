import React from "react"
import PropTypes from "prop-types"
import styles from "./view.module.css"

const View = ({ title, children }) => (
  <section className={styles.view}>
    <h3 className={styles[`view__heading`]}>{title}</h3>
    {children}
  </section>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
