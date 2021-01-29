import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { googleLogin } from "../../services/user/userApi";
import { useStateValue } from "../../StateProvider";
import { authenticate, datasetListFunc } from "../../services/Api";
import "./sociallogin.css";
import Loading from "../Loading";
function Google() {
  const [, dispatch] = useStateValue();
  const [loading, setloading] = useState(false);
  const responseGoogle = (e) => {
    // setloading(true)
    const { name, email } = e.profileObj;
    const values = {
      first_name: name.split(" ")[0],
      last_name: name.split(" ")[1],
      email: email,
      google_token: e.googleId,
    };
    let mounted = true;
    if (mounted) {
      googleLogin(values).then((data) => {
        authenticate(data.data.token, () => {
          dispatch({
            type: "ADDUSER",
            data: data.data.data,
          });
          setloading(false);
        });
        datasetListFunc().then((items) => {
          dispatch({
            type: "ADDDATASET",
            data: items.data,
          });
        });
      });
    }
    return () => (mounted = false);
  };
  return (
    <>
      {loading && <Loading />}
      <GoogleLogin
        clientId="918683245824-3i4siophfobp31a542q0vumpe2l5lnhj.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        scope={("profile", "email")}
        className={"google"}
        icon={false}
      />
    </>
  );
}

export default Google;
