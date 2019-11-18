import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/user";
import NotFound from "./pages/notFould";
import SideNav from "./components/sideNav";

function Routes() {
  return (
    <div style={{display: "flex"}}>
      <SideNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Redirect from="/people/" to="/users/" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
