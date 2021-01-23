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
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          scope={("profile", "email")}
          // className={"google-login  rounded"}
          render={(renderProps) => (
            <button
              className="btn rounded google-login"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className="fa fa-google fa-3x icoss " aria-hidden="true" />
              <p className="text-center">Login with Google</p>
            </button>
          )}
        />
      </div>
    );
  }
}

export default Google;
