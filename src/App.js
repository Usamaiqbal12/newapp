import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/userProfile";
import NavBar from "./components/Header";
import CreateSearch from "./components/createSearch";
import DiscussionMode from "./components/DiscussionMode";
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
            <Route path="/createsearch" component={CreateSearch} />
            <Route path="/discussion" component={DiscussionMode} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
