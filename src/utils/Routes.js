import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../views/landing/Home";
import Login from "../components/Login";
import Layout from "./Layout";

export default function AppRoutes() {
    return (
        <Layout>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" component={<Home/>}/>
            </Routes>
        </Router>
    </Layout>);
}
