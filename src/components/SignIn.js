import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Facebook from "./user/Facebook";
import Google from "./user/Google";
import {
  signIn,
  authenticate,
  isAuthenticated,
  datasetListFunc,
} from "../services/Api";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getUser } from "../services/user/userApi";
import { green, purple } from "@material-ui/core/colors";
import Loading from "./Loading";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: "#263238",
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 5, 0.1),
    width: "78%",
    height: window.screen.width<600?"40px":'50px',
    fontSize: window.screen.width<600?"16px":"19px",
    textTransform: "capitalize",
    backgroundColor: "#455a64",
    color: "white",
  },
}));

export default function SignIn() {
  const [, dispatch] = useStateValue();
  const classes = useStyles();
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    Email: false,
    Password: false,
  });
  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setloading(true);
    signIn(JSON.stringify(userData))
      .then((data) => {
        if (data.status === "Failure") {
          if (data.message === "Password") {
            setErrors({ ...errors, Email: false, Password: true });
          } else if (data.message === "Email") {
            setErrors({ ...errors, Email: true, Password: false });
          } else if (data.message === "Activation") {
            history.push("/emailactivation404");
          }
          setloading(false);
        } else if (data.data.token) {
          setloading(false);
          authenticate(data.data.token, () => {
            setuserData({ email: "", password: "" });

            dispatch({
              type: "ADDUSER",
              data: data.data.data,
            });

            datasetListFunc(data.data.id).then((items) => {
              dispatch({
                type: "ADDDATASET",
                data: items.data,
              });
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  return (
    <div className="px-3 signin">
      {loading && <Loading />}
      <div className="row">
        <div className="col-12">
          <Container component="main" maxWidth="xs" className="bg-white mt-3">
            {" "}
            <Grid xs={12} item>
              <CssBaseline />
              <div className={classes.paper}>
                <h2 className="dataset__text rounded px-3 mt-2">
                  <span
                    style={{ fontSize: window.screen.width < 640 && "25px" }}
                  >
                    {" "}
                    Sign In{" "}
                  </span>
                </h2>
                <form className={classes.form} onSubmit={submit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={handleChange}
                    value={userData.email}
                    helperText={errors.Email && "Email does not exist"}
                    error={errors.Email}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    value={userData.Password}
                    helperText={errors.Password && "Invalid Password"}
                    error={errors.Password}
                    required
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <ColorButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </ColorButton>

                  <FacebookLoginButton className="pl-2 facebook-login pr-0 mt-2">
                    <Facebook />
                  </FacebookLoginButton>
                  <GoogleLoginButton className="google-login pr-0 mt-2">
                    <Google />
                  </GoogleLoginButton>
                  <Grid container className="my-3">
                    <Grid item sm={5} xs={12}>
                      <Link to="/" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item sm={7}>
                      <Link to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              {performRedirect()}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}
