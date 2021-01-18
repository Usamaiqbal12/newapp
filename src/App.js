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
import Newparams from "./components/dataset/new";
import { getUser } from "./services/user/userApi";
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";
import Params from './components/dataset/Params'
function App() {
  const [,dispatch]=useStateValue();
  useEffect(() => {
    let mounted = true;
    if (localStorage.getItem('jwt'))
    {
    getUser().then(data=>{
      if(mounted){
        dispatch({
          type:"ADDUSER",
          data:data
        })
      }
    })
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
          <Route path="/profile" component={Profile} />
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
          <Route path='/new'><Params/> </Route>
          <Route path='/editprofile'><EditProfile /> </Route>

        </Switch>
      </main>
    </>
  );
}
export default App;
