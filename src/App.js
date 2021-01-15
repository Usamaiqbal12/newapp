import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/userProfile";
import NavBar from "./components/Header";
import CreateDataset from "./components/dataset/CreateDataset";
import Manual from "./components/dataset/Manual";
import ListDataset from "./components/dataset/ListDataset";
import { useStateValue } from "./StateProvider";
import DatasetDetails from "./components/dataset/DatasetDetails";
import { datasetListFunc } from "./services/Api";
function App() {
  const [,dispatch]=useStateValue();
  useEffect(() => {
    let mounted = true;
    if (localStorage.getItem('jwt'))
    {
    datasetListFunc().then((items) => {
      if (mounted) {
        dispatch({
            type:'ADDDATASET',
            data:items.data
          })
      }
    });
  }
    return () => (mounted = false);
  }, []);
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/createsearch">
            <CreateDataset />
          </Route>
          <Route path="/manual">
            <Manual />
          </Route>
          <Route exact path="/dataset">
            <ListDataset />
          </Route>
          <Route path="/dataset/detail/:id" component={DatasetDetails}>
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
