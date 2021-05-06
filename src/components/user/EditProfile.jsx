import React, { useState, useEffect } from "react";
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
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { updateUser } from "../../services/user/userApi";
import Loading from "../Loading";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: window.screen.width < 640 ? theme.spacing(1) : theme.spacing(2),
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
    margin: theme.spacing(4, 0, 4),
  },
  form1: {
    width: "100%",
  },
  date: {
    width: "100%",
  },
}));
function EditProfile() {
  const history = useHistory();
  const [loading,setLoading] = useState(false)
  const [{ user }, dispatch] = useStateValue();
  const [selectedDate, setSelectedDate] =React.useState(new Date('2014-08-18T21:11:54'));
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return year+ '-' + month + '-' + day;
}
 
  const [currentUser, setCurrentUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    nickname: "",
    gender: "",
    profile_picture: "",
  });
  useEffect(() => {
    if (user[0] !== undefined) {
      setCurrentUser({
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email,
        date_of_birth:
          user[0].date_of_birth === null ? "" : user[0].date_of_birth,
        nickname: user[0].nickname === null ? "" : user[0].nickname,
        gender: user[0].gender === null ? "--" : user[0].gender,
        profile_picture: "",
      });
      setSelectedDate(user[0].date_of_birth)
    }
  }, [user]);
  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentUser({...currentUser,date_of_birth:getFormattedDate(date)})
  };
  const submit = (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("first_name", currentUser.first_name);
    formData.append("last_name", currentUser.last_name);
    formData.append("email", currentUser.email);
    formData.append("date_of_birth", currentUser.date_of_birth);
    formData.append("nickname", currentUser.nickname);
    formData.append("gender", currentUser.gender);
    formData.append("profile_picture", currentUser.profile_picture);
    updateUser(formData).then((data) => {
      dispatch({
        type: "ADDUSER",
        data: data.data,
      });
      setLoading(false)
      history.push("/profile");
    });
  };

  const classes = useStyles();
  const signUpForm = (e) => {
    return (
      <Container
        component="main"
        maxWidth="sm"
        style={{ backgroundColor: "#E0E0E0" }}
        className="rounded border mt-3 mb-5"
      >
        {loading&&<Loading />}
        <CssBaseline />
        <div className={classes.paper}>
          <h2 className="rounded px-3 mt-2">
            <span
              className="text-dark"
              style={{ fontSize: window.screen.width < 640 ? "25px" : "30px" }}
            >
              {" "}
              Edit Profile{" "}
            </span>
          </h2>
          <form className={classes.form} onSubmit={submit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  value={currentUser.first_name}
                  onChange={handleChange}
                  fullWidth
                  size={'small'}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  value={currentUser.last_name}
                  fullWidth
                  onChange={handleChange}
                  id="lastName"
                  label="Last Name"
                  size={'small'}

                  name="last_name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <span className=" px-2">
                  {" "}
                  <b className="text-dark"> Photo:</b>{" "}
                </span>
                <input
                  className="btn"
                  type="file"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      profile_picture: e.target.files[0],
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  disabled={true}
                  name="email"
                  size={'small'}

                  autoComplete="email"
                  value={currentUser.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nickName"
                  value={currentUser.nickname}
                  onChange={handleChange}
                  size={'small'}

                  label="Nick Name"
                  name="nickname"
                  autoComplete="nName"
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid className='col-md-12'>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date of Birth"
                    value={selectedDate}
                    onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              <Grid item xs={12} sm={12}>
                <div className="">
                  <span className="px-2">
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
                      checked={currentUser.gender === "M"}
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
                      checked={currentUser.gender === "F"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="f">
                      {" "}
                      Female
                    </label>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={currentUser.date_of_birth === "" ? true : false}
              className={classes.submit}
            >
              Save
            </Button>
          </form>
        </div>
      </Container>
    );
  };
  return <div className="px-3">{signUpForm()}</div>;
}

export default EditProfile;
