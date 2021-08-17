import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../views/landing/Home";
import Login from "../components/Login";
import Layout from "./Layout";

export default function AppRoutes() {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact/>
                    <Route path="/home" exact component={Home}/>
                </Switch>
            </Router>
        </Layout>
    );
}
