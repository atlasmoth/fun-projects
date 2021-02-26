import React from "react";
import "./app.css";
// import Test from "./Test";
import { Switch, Route, Redirect } from "react-router-dom";
import Tweets from "./Tweets";
import Test from "./Test";
export default function App() {
  return (
    <div className="section home">
      <Switch>
        <Route exact path="/tweets/:tweetid" render={() => <Test />} />
        <Route path="/" component={Tweets} />
        <Route exact render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}
