import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class Google extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };
    let googleData = (
      <GoogleLogin
        clientId="918683245824-3i4siophfobp31a542q0vumpe2l5lnhj.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
    return <div>{googleData}</div>;
  }
}

export default Google;
