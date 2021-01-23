import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { authenticate, datasetListFunc } from "../../services/Api";
import { facebookLogin } from "../../services/user/userApi";
import { useStateValue } from "../../StateProvider";
import './sociallogin.css'
function Facebook() {
  const [,dispatch] = useStateValue()
  const responseFacebook = (response) => {
    const { name, email, accessToken } = response;
    const first_name = name.split(" ")[0];
    const last_name = name.split(" ")[1];
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      facebook_token: accessToken,
    };
    facebookLogin(data).then(data=>{
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
    <>
   <FacebookLogin
          appId="427757665031934"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass='facebook'
          // icon={"fa fa-facebook"}
        />
    </>
  );
}
export default Facebook;
