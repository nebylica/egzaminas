import {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Navbar from "./components/Navbar";
import http from "./plugins/Fetch"


function App() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        http.get('/getAllUsers').then(data => {
            setUsers(data.users)
        })
    }, [])

    return (
        <Router>
            <Navbar />
            <div className='d-flex-center'>
                <Switch>
                    <Route exact path='/'>
                        <Home users={users} setUsers={setUsers}/>
                    </Route>
                    <Route path='/createUser'>
                        <CreateUser setUsers={setUsers} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
