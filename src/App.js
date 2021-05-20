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
import UpdateUser from "./pages/UpdateUser";


function App() {

    const [users, setUsers] = useState([])
    const [updateUser, setUpdateUser] = useState([])

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
                        <Home users={users} setUsers={setUsers} setUpdateUser={setUpdateUser}/>
                    </Route>
                    <Route path='/createUser'>
                        <CreateUser setUsers={setUsers} />
                    </Route>
                    <Route path='/updateUser'>
                        <UpdateUser updateUser={updateUser}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
