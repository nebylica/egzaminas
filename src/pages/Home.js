import React from 'react';
import UserCard from "../components/UserCard";

function Home({users, setUsers, setUpdateUser}) {
    return (
        <div className='d-flex-center'>
            <div className='usersContainer'>
                <UserCard users={users} setUsers={setUsers} setUpdateUser={setUpdateUser}/>
            </div>
        </div>
    );
}

export default Home;