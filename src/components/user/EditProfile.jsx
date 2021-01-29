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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { updateUser } from "../../services/user/userApi";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: window.screen.width<640?theme.spacing(4):theme.spacing(8),
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
function EditProfile() {
  const history = useHistory()
  const [{ user,},dispatch] = useStateValue();
  const [currentUser, setCurrentUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    nickname: "",
    gender: "",
    profile_picture:""
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
        profile_picture: user[0].profile_picture === null ? "--" : user[0].profile_picture,

      });
    }
  }, [user]);
  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('first_name',currentUser.first_name)
    formData.append('last_name',currentUser.last_name)
    formData.append('email',currentUser.email)
    formData.append('date_of_birth',currentUser.date_of_birth)
    formData.append('nickname',currentUser.nickname)
    formData.append('gender',currentUser.gender)
    formData.append('profile_picture',currentUser.profile_picture)
    updateUser(formData).then((data) => {
      dispatch({
        type:'ADDUSER',
        data:data.data
      })
      history.push('/profile')
    });
  };

  const classes = useStyles();
  const signUpForm = (e) => {
    return (
      <Container component="main" maxWidth="sm" className="bg-white">
        <CssBaseline />
        <div className={classes.paper}>
          <h2 className='dataset__text rounded px-3 mt-2' >
           <b style={{fontSize:window.screen.width<640&&'25px'}}> Edit Profile </b>
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
                  name="last_name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <span className='dataset__text px-2'> <b> Photo:</b> </span>
              <input type="file" onChange={(e)=>setCurrentUser({...currentUser,profile_picture:e.target.files[0]})}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  disabled={true}
                  name="email"
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
                  value={currentUser.date_of_birth}
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
                  <span className='dataset__text px-2'><b> Gender:</b></span>
                  <div className="radio form-check p-2 ml-4">
                   
                      <input
                        type="radio"
                        name="gender"
                        onChange={handleChange}
                        value="M"
                        id='m'
                        className='form-check-input'
                        checked={currentUser.gender === "M"}
                      />
                    <label className='form-check-label' htmlFor='m'> Male</label>
                     
                  
                  </div>
                  <div className="radio form-check p-2 ml-4">
                  
                      <input
                        type="radio"
                        value="F"
                        id='f'
                        name="gender"
                        className='form-check-input'
                        checked={currentUser.gender === "F"}
                        onChange={handleChange}
                      />
                      <label className='form-check-label' htmlFor='f'> Female</label>
                     
                   
                  </div>
                </div>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={currentUser.date_of_birth===""?true:false}

              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    );
  };
  return <div className='px-3'>{signUpForm()}</div>;
}

export default EditProfile;
