import React from "react";
import SocialLogin from "react-social-login";
import "../index.css";

class SocialButton extends React.Component {
  render() {
    return (
      <button
        className="facebook"
        onClick={this.props.triggerLogin}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
