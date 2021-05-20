import {useRef, useState} from 'react';

function UpdateUser({updateUser}) {

    const [name, setName] = useState(updateUser.name)
    const [age, setAge] = useState(updateUser.age)
    const [email, setEmail] = useState(updateUser.email)
    const [password, setPassword] = useState(updateUser.password)

    const [errorMsg, setErrorMsg] = useState('')

    function updateUserData() {
        const userData = {
            name,
            age,
            email,
            password,
            id: updateUser._id
        }

        console.log(userData)
    }



    return (
        <div className='inputsForm d-flex-center column'>
            <input type="text" placeholder="Vardas" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Amžius" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="email" placeholder="El. paštas" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Slaptažodis" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <small style={{color: "darkred"}}>{errorMsg}</small>
            <button type='submit' onClick={updateUserData}>SUKURTI NAUJĄ VARTOTOJĄ</button>
        </div>
    );
}

export default UpdateUser;