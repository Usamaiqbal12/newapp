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
import { Link, Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getUser } from "../services/user/userApi";
import { green, purple } from "@material-ui/core/colors";
import Loading from "./loading";

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
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0.5, 0.1),
    width: "98%",
    height: "50px",
    fontSize: "19px",
    textTransform: "capitalize",
    backgroundColor: "#455a64",
    color: "white",
  },
}));

export default function SignIn() {
  const [, dispatch] = useStateValue();
  const classes = useStyles();
  const [loading, setloading] = useState(false);
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
          }
          setloading(false);
        } else if (data.data.token) {
          setloading(false);
          authenticate(data.data.token, () => {
            setuserData({ email: "", password: "" });
            getUser().then((data) => {
              dispatch({
                type: "ADDUSER",
                data: data,
              });
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
    <>{
      loading&& <Loading />
    }
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleChange}
              value={userData.email}
              helperText={errors.Email && "Invalid Email"}
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
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        {performRedirect()}
      </Container>
    </>
  );
}
