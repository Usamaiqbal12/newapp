import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/Header";
import Manual from "./components/dataset/Manual";
import ListDataset from "./components/dataset/ListDataset";
import { useStateValue } from "./StateProvider";
import DatasetDetails from "./components/dataset/DatasetDetails";
import { datasetListFunc, isAuthenticated, listAttributes } from "./services/Api";
import { getUser } from "./services/user/userApi";
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";
import AuthorProfile from "./components/Author/Profile";
import PrivateRoutes from "./PrivateRoutes";
import DiscussionMode from "./components/dataset/DiscussionMode";
import Footer from "./components/footer/Footer";
import CreateDatasetModal from "./components/dataset/CreateDatasetModal";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Home from "./components/Home";
import EmailActivation404 from "./components/user/EmailActivation404";
import EmailActivation from "./components/user/EmailActivation";
import MobileFooter from './components/footer/MobileFooter'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [{datasetList}, dispatch] = useStateValue();
  useEffect(() => {
    let mounted = true;
    if (localStorage.getItem("jwt")) {
      getUser().then((data) => {
        if (mounted) {
          dispatch({
            type: "ADDUSER",
            data: data,
          });
        }
      });
      datasetListFunc().then((items) => {
        if (mounted) {
          dispatch({
            type: "ADDDATASET",
            data: items.data,
          });
        }
      });
      listAttributes().then(data=>{
        if(mounted){
          dispatch({
            type:"GETATTRIBUTES",
            data:data
          })
        }
      })
    }
    return () => (mounted = false);
  }, [datasetList]);
  return (
    <div className={classes.root}>
      <NavBar />
      {/* <NewHeader /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Switch>
          <React.Fragment>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/emailactivation"
              component={EmailActivation}
            />
            <PrivateRoutes
              path="/discussionmode/:id"
              component={DiscussionMode}
            />
            <PrivateRoutes path="/profile" component={Profile} />
            <PrivateRoutes path="/" exact component={Home} />
            <PrivateRoutes path="/manual" component={Manual} />
            <div className="container">
              <PrivateRoutes exact path="/dataset">
                  <ListDataset create={true} />
              </PrivateRoutes>
            </div>
            <PrivateRoutes
              path="/dataset/detail/:id"
              component={DatasetDetails}
            />
            <Route
              path="/emailactivation404"
              component={EmailActivation404}
            />
           
            <PrivateRoutes
              path="/datasetedit/:id"
              component={CreateDatasetModal}
            />
            <PrivateRoutes path="/dataseteditmanual/:id" component={Manual} />
            <PrivateRoutes path="/editprofile">
              <EditProfile />
            </PrivateRoutes>
            <PrivateRoutes
              path="/authorprofile/:id"
              component={AuthorProfile}
            />
          </React.Fragment>
        </Switch>
        {isAuthenticated()&&window.screen.width<600&&<MobileFooter />}
        {window.screen.width>600&& <Footer /> }
      </main>
    </div>
  );
}
export default App;
