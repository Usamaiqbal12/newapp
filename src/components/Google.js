import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "../index.css";

class Google extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    return (
      <div>
        <GoogleLogin
          clientId="918683245824-3i4siophfobp31a542q0vumpe2l5lnhj.apps.googleusercontent.com"
          // buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          scope={("profile", "email")}
          className={"google-login  rounded"}
          icon={false}
          render={(renderProps) => (
           <p className='mx-auto text-center google'>Login with Google</p>
          )}
        />
      </div>
    );
  }
}

export default Google;
