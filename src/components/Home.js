import React from "react";
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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  title: {
    flexGrow: 1,
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
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
                    lorem ipsum ipsum ipsum ipmsdsdsdj dsjdhsshj jsdjshdh
                    jdsjdhsj jhdjshdsdj{" "}
                  </h6>
                  <cite>Sam</cite>
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
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Head 1</TableCell>
                    <TableCell>head 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                // gutterBottom
                className={classes.title}
              >
                Game 2
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Head 1</TableCell>
                    <TableCell>head 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
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
                Game 3
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Head 1</TableCell>
                    <TableCell>head 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        {/* <Box pt={4}>
            <Copyright />
          </Box> */}
      </Container>
    </>
  );
};

export default Home;
