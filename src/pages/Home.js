import React from 'react';
import UserCard from "../components/UserCard";

function Home({users, setUsers}) {
    return (
        <div className='d-flex-center'>
            <div className='usersContainer'>
                <UserCard users={users} setUsers={setUsers}/>
            </div>
        </div>
    );
}

export default Home;