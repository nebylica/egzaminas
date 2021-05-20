import React from 'react';
import { useHistory } from "react-router-dom";
import {FaTrashAlt, FaUserEdit} from "react-icons/fa";
import http from "../plugins/Fetch"

function UserCard({users, setUsers, setUpdateUser}) {

    let history = useHistory();

    function deleteUser(id) {
        http.get(`/deleteUser/${id}`).then(data => {
            setUsers(data.users)
        })
    }

    function updateUserForm(userData) {
        setUpdateUser(userData)
        history.push('/updateUser')
    }


    return (
        <>
            {users.map((user, i) => (
                <div key={i} className='userCard'>
                    <h3>{user.name}</h3>
                    <div>{user.age}</div>
                    <div>{user.email}</div>
                    <div onClick={() => updateUserForm(user)}>
                        <FaUserEdit className='icon' />
                    </div>
                    <div onClick={() => deleteUser(user._id)}>
                        <FaTrashAlt className='icon' />
                    </div>
                </div>
            ))}
        </>
    );
}

export default UserCard;