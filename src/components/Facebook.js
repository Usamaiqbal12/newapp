import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { facebookLogin } from "../services/user/userApi";
function Facebook() {
  const [fbUser,setFbUser] = useState({
    name: "",
    email: "",
    picture: "",
  })
  const responseFacebook = (response) => {
    // this.setState({
    //   isLoggedIn: true,
    //   userID: response.userID,
    //   name: response.name,
    //   email: response.email,
    // });
    console.log(response);
  };

  return (
        <FacebookLogin
          appId="427757665031934"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook}
          cssClass="btnFacebook"
        />
  )
}
export default Facebook;
