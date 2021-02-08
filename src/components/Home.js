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
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  title: {
    flexGrow: 1,
  },
}));
const Home = () => {
  const [qod, setQod] = useState([]);
  useEffect(() => {
    quoteOfTheDay().then((data) => {
      setQod(data);
    });
  }, []);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
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
                  style={{ boxShadow: "none" }}
                >
                  <h6>
                    {qod &&
                      qod.map((v, i) => {
                        return v.quote;
                      })}
                  </h6>
                  <cite>
                    {" "}
                    {qod &&
                      qod.map((v, i) => {
                        return v.author;
                      })}
                  </cite>
                </blockquote>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Game 1
              </Typography>

              <table className="table table-striped bg-white border">
                <thead className="thead-dark">
                  <tr style={{ cursor: "pointer",fontFamily:'cursive'}}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Date Of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Game 2
              </Typography>

              <table className="table table-striped bg-white border">
                <thead className="thead-dark">
                  <tr style={{ cursor: "pointer",fontFamily:'cursive'}}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Date Of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                noWrap
                className={classes.title}
              >
                Game 3
              </Typography>

              <table className="table table-striped bg-white border">
                <thead className="thead-dark">
                  <tr style={{ cursor: "pointer",fontFamily:'cursive'}}>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Date Of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
                    <td>dummy</td>
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
