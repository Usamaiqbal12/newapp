import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "../index.css";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
    });
    console.log(response);
  };

  render() {
    let facebookData;
    if (this.state.isLoggedIn) {
      facebookData = (
        <div>
          <h1>Welcome {this.state.name}</h1>
        </div>
      );
    } else {
      facebookData = (
        <FacebookLogin
          appId="427757665031934"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          icon={"fa fa-facebook"}
        />
      );
    }
    return <div className="btn facebook">{facebookData}</div>;
  }
}

export default Facebook;
