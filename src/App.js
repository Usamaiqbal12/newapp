import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/userProfile";
import NavBar from "./components/Header";
import CreateDataset from "./components/dataset/CreateDataset";
import Parameters from "./components/dataset/Parameters";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/createdataset">
              <CreateDataset />
            </Route>
            {/* <Route path="/createsearch" component={CreateDataset} /> */}
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
