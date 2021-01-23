import React from "react";
import GoogleLogin from "react-google-login";
function Google() {
  const responseGoogle = (e) => {
    console.log('hello');
  };
  return (
    <GoogleLogin
      clientId="918683245824-3i4siophfobp31a542q0vumpe2l5lnhj.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      scope={("profile", "email")}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
