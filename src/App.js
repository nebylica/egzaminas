import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/createUser'>
                    <CreateUser />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
