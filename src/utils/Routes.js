import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/landing/Home";
import Login from "../components/Login";
import Layout from "./Layout";

export default function AppRoutes() {
    return (<Layout>
            <Router>
                <Switch>
                    <Route path="/">
                        <Login/>
                    </Route>
                    <Route path="/home" component={Home} exact/>
                </Switch>
            </Router>
        </Layout>);
}
