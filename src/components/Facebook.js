import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
// import styled from "styled-components";

// const BtnFacebook = styled.button`
//   background: #3b5998;
//   color: white;
//   border: 0px transparent;
//   text-align: center;
//   margin: 5px;
//   display: inline-block;

//   &:hover {
//     background: #3b5998;
//     opacity: 0.6;
//   }
// `;

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
      picture: response.picture.data.url,
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
          cssClass="btnFacebook"
        />
      );
    }
    return <div>{facebookData}</div>;
  }
}

export default Facebook;
