import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

const Route = ({ component: Component, location, user, ...rest }) => {
    if (!user) { navigate(`/app/login`, { replace: true })
    return null
  }

  return <Component user={user} {...rest} />
}

Route.propTypes = {
  component: PropTypes.any.isRequired
}

export default Route
