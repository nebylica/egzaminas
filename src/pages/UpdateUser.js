import {useRef, useState} from 'react';
import http from "../plugins/Fetch";
import {useHistory} from "react-router-dom";

function UpdateUser({updateUser, setUsers}) {

    let history = useHistory();

    const [name, setName] = useState(updateUser.name)
    const [age, setAge] = useState(updateUser.age)
    const [email, setEmail] = useState(updateUser.email)
    const [password, setPassword] = useState(updateUser.password)

    const [errorMsg, setErrorMsg] = useState('')

    function updateUserData() {
        const userData = {
            name,
            age: Number(age),
            email,
            password,
            id: updateUser._id
        }

        http.post('/updateUser', userData).then(data => {
            if(data.error) {
                setErrorMsg(data.msg)
            } else {
                setErrorMsg(data.msg)
                setUsers(data.users)
                setTimeout(() => {
                    setName('')
                    setAge('')
                    setEmail('')
                    setPassword('')
                    setErrorMsg('')
                    history.push("/");
                }, 700)
            }
        })
    }



    return (
        <div className='inputsForm d-flex-center column'>
            <input type="text" placeholder="Vardas" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Amžius" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="email" placeholder="El. paštas" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Slaptažodis" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <small style={{color: "darkred"}}>{errorMsg}</small>
            <button type='submit' onClick={updateUserData}>ATNAUJINTI VARTOTOJĄ</button>
        </div>
    );
}

export default UpdateUser;