import React from "react";
import useForm from "./useForm";
import "../index.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  FormControl,
  Typography,
  makeStyles,
  Container,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import validate from "./validateLogin";
import { signup } from "../services/Api";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const handleGenderChanging = (event) => {
    setGender(event.target.value);
  };

  function submit() {
    console.log("Submitted succesfull");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
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
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
              />
              <div>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nickName"
                label="Nick Name"
                name="nickName"
                autoComplete="nName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.date}
                required
                variant="outlined"
                id="date"
                label="DATE OF BIRTH"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.form1}>
                <InputLabel required htmlFor="demo-customized-select-native">
                  Gender
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  variat="outlined"
                  value={gender}
                  onChange={handleGenderChanging}

                  // input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Male</option>
                  <option value={20}>Female</option>
                  <option value={30}>Other</option>
                </NativeSelect>
              </FormControl>
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
              <div>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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
              <Link href="#" variant="body2">
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

export default SignUp;
