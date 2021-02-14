import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { quoteOfTheDay } from "../services/Api";
import { LinearProgress } from "@material-ui/core";
import RSkeleton from "./RSkeleton";
import Skeleton from "react-loading-skeleton";
import { useStateValue } from "../StateProvider";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // height: "100vh",
    marginBottom:'50px'
    },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));
const Home = () => {
  const [{qod},dispatch] = useStateValue()
  useEffect(() => {
    if (qod.length<1){
    quoteOfTheDay().then((data) => {
      dispatch({
        type: "qod",
        data: data,
      });
    });
  }
  }, []);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#353431" }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                noWrap
                className={classes.title}
              >
                Quote of The Day
              </Typography>
              <div className="mt-10">
                <blockquote
                  className="quote-card"
                  style={{ boxShadow: "none", backgroundColor: "#353431" }}
                >
                  <h6 className='text-light' >{qod[0] ? qod[0].quote : <RSkeleton count={3} width={'100%'}/>}</h6>
                  <cite className='text-light'>
                    {" "}
                    {qod
                      ? qod.map((v, i) => {
                          return v.author;
                        })
                      : ""}
                  </cite>
                </blockquote>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#353431" }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Multiple choice
              </Typography>

              <table className="table table-dark table-hover rounded">
                <thead className="thead"  style={{backgroundColor:'#443F39'}}>
                  <tr style={{ cursor: "pointer", fontFamily: "cursive" }}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Afnan</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mubeen</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#353429" }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Name to quote
              </Typography>

              <table className="table table-hover table-dark rounded">
                <thead className="thead"  style={{backgroundColor:'#443F39'}}>
                  <tr style={{ cursor: "pointer", fontFamily: "cursive" }}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Afnan</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mubeen</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#353439" }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Photo to quote
              </Typography>

              <table className="table table-hover table-dark">
                <thead className="thead"  style={{backgroundColor:'#443F39'}}>
                  <tr style={{ cursor: "pointer", fontFamily: "cursive" }}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Afnan</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mubeen</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
