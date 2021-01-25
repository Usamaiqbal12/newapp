import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import UserProfile from "./components/userProfile";
import NavBar from "./components/Header";
import CreateDataset from "./components/dataset/CreateDataset";
import Manual from "./components/dataset/Manual";
import ListDataset from "./components/dataset/ListDataset";
import { useStateValue } from "./StateProvider";
import DatasetDetails from "./components/dataset/DatasetDetails";
import { createdataset, datasetListFunc } from "./services/Api";
// import Newparams from "./components/dataset/new";
import { getUser } from "./services/user/userApi";
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";
import Params from "./components/dataset/Params";
import AuthorProfile from "./components/Author/Profile";
import PrivateRoutes from "./PrivateRoutes";
import DiscussionMode from "./components/dataset/DiscussionMode";
import Footer from "./components/footer/Footer";
import CreateDatasetModal from "./components/dataset/CreateDatasetModal";

function App() {
  const [, dispatch] = useStateValue();
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
    }
    return () => (mounted = false);
  }, []);
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/discussionmode/:id" component={DiscussionMode} />
          <PrivateRoutes path="/profile" component={Profile} />
          <PrivateRoutes path="/createsearch">
            <CreateDataset create={true} />
          </PrivateRoutes>
          <PrivateRoutes path="/manual" component={Manual} />
          <PrivateRoutes exact path="/dataset" component={ListDataset} />
          <PrivateRoutes
            path="/dataset/detail/:id"
            component={DatasetDetails}
          />
          <PrivateRoutes
            path="/datasetedit"
            update={"update"}
            component={CreateDataset}
          />
          <PrivateRoutes path="/new" component={Params} />
          <PrivateRoutes path="/editprofile" component={EditProfile} />
          <PrivateRoutes path="/authorprofile/:id" component={AuthorProfile} />
          <Route path="/createmodal" component={CreateDatasetModal} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
export default App;
