import React from "react"
import { navigate } from "gatsby"
import FirebaseUI from "./FirebaseUI"
import View from "./View"

class Login extends React.Component {
  render() {
    if (this.props.user) {
      navigate(`/app/profile`)
    }
    return (
      <View title="Login with Firebase">
        <FirebaseUI
          auth={this.props.auth}
        />
      </View>
    )
  }
}

export default Login
