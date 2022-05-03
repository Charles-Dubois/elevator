import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Elevator from "./views/Elevator";
import Admin from "./views/Admin";
export default function App() {
  return (
    <BrowserRouter>
      <a href="/elevator">Elevator</a>
      <a href="/admin">Admin</a>
      <Switch>
        <Route exact path="/elevator">
          <Elevator />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
