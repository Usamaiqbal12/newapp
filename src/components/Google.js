import React from "react";
import GoogleLogin from "react-google-login";
import { googleLogin } from "../services/user/userApi";
import { useStateValue } from "../StateProvider";
import { authenticate, datasetListFunc } from "../services/Api";

function Google() {
  const [, dispatch] = useStateValue();

  const responseGoogle = (e) => {
    const { name, email } = e.profileObj;
    const values = {
      first_name: name.split(" ")[0],
      last_name: name.split(" ")[1],
      email: email,
      google_token: e.googleId,
    };
    googleLogin(values).then((data) => {
      authenticate(data.data.token, () => {
        dispatch({
          type: "ADDUSER",
          data: data.data,
        });
      });
      datasetListFunc().then((items) => {
        dispatch({
          type: "ADDDATASET",
          data: items.data,
        });
      });
    });
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
