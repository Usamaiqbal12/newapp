import React from "react";
import GoogleLogin from "react-google-login";
import { googleLogin } from "../../services/user/userApi";
import { useStateValue } from "../../StateProvider";
import { authenticate, datasetListFunc } from "../../services/Api";
import "./sociallogin.css";
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
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      scope={("profile", "email")}
      className={"google"}
      icon={false}
      buttonText={'Login with Google'}
      // render={(renderProps) => (
      //   <p className="mx-auto text-center google">Login with Google</p>
      // )}
    />
  );
}

export default Google;
