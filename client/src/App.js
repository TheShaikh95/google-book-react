import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron";
// import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/saved/:id" component={Saved} />
          {/* <Route component={NoMatch} />  */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;