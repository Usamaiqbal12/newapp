import React, { useState } from "react";
import "../index.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  // Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import { signup } from "../services/Api";
import { Link, useHistory } from "react-router-dom";
import Loading from "./Loading";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0.2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form1: {
    width: "100%",
  },
  date: {
    width: "100%",
  },
}));

const SignUp = () => {
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    nickname: "",
    date_of_birth: "",
    gender: "",
    first_name: "",
    last_name: "",
    error: [false, ""],
    success: false,
    passError: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const {
    email,
    password,
    nickname,
    date_of_birth,
    gender,
    first_name,
    last_name,
    error,
    passError,
  } = values;
  function submit(e) {
    e.preventDefault();
    setloading(true);
    if (confirmPassword === password) {
      signup({
        email,
        password,
        nickname,
        date_of_birth,
        gender,
        first_name,
        last_name,
      })
        .then((data) => {
          if (data.status === "failure") {
            setValues({ ...values, error: [true, data.message] });
            setloading(false);
          } else {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              success: true,
              nickname: "",
              date_of_birth: "",
              gender: "",
              first_name: "",
              last_name: "",
            });
            setloading(false);
            history.push("/signin");
          }
        })
        .catch((e) => setValues({ ...values, error: true, success: false }));
    } else {
      setValues({ ...values, passError: true });
    }
  }
  const signUpForm = (e) => {
    return (
      <Container component="main" maxWidth="sm" className="bg-white border mt-3">
        {loading && <Loading />}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="dataset__text rounded px-3 mt-2">
            <span
              className="text-dark"
              style={{ fontSize: window.screen.width < 640 ? "25px" : "30px" }}
            >
              {" "}
              Sign up{" "}
            </span>
          </h2>
          <form className={classes.form} onSubmit={submit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  value={values.first_name}
                  onChange={handleChange}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  value={values.last_name}
                  fullWidth
                  onChange={handleChange}
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  error={error[0]}
                  helperText={error[0] && error[1]}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nickName"
                  value={values.nickname}
                  onChange={handleChange}
                  label="Nick Name"
                  name="nickname"
                  autoComplete="nName"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className={classes.date}
                  required
                  name="date_of_birth"
                  value={values.date_of_birth}
                  onChange={handleChange}
                  variant="outlined"
                  id="date"
                  label="DATE OF BIRTH"
                  type="date"
                  // defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className="">
                <span className="dataset__text px-2">
                    <b className="text-dark"> Gender:</b>
                  </span>
                  <div className="radio form-check p-2 ml-4">
                    <input
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="M"
                      id="m"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="m">
                      {" "}
                      Male
                    </label>
                  </div>
                  <div className="radio form-check p-2 ml-4">
                    <input
                      type="radio"
                      value="F"
                      id="f"
                      name="gender"
                      className="form-check-input"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="f">
                      {" "}
                      Female
                    </label>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  error={passError}
                  helperText={passError && "Password do not match"}
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  };

  return <>{signUpForm()}</>;
};

export default SignUp;
